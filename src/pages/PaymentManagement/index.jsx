import { Button, Col, Form, notification, Row, Spin, Table } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteIcon from '../../assets/images/icons/deleteIcon.svg';
import importIcon from '../../assets/images/icons/importIcon.svg';
import plusIcon from '../../assets/images/icons/plus.svg';
import Pagination from '../../components/common/Pagination';
// import Table from '../../components/common/TableNormal';
import ModalConfirm from '../../components/ModalConfirm';
import {
  deletePayment,
  retrieveData,
  uploadFile,
} from '../../slices/paymentManagement';
import { FORMAT_DATE, LOADING_STATUS } from '../../ultis/constant';
import CreatePayment from './CreatePayment';
import PaymentHistory from './PaymentHistory';
import PaymentManagementHeader from './PaymentManagementHeader';
import { DeleteOutlined } from '@ant-design/icons';
import { getTimeByTZ } from '../../helper/index';

const PaymentManagement = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [rowActive, setRowActive] = useState({});
  const [searchPayload, setSearchPayload] = useState('');
  const [historyItem, setHistoryItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const dispatch = useDispatch();
  const payments = useSelector((state) => state.paymentManagementReducer);
  const loading = useSelector((state) => state.loading.loading);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleDeleteOne = (item) => {
    ModalConfirm({
      content: `Xác nhận xóa ${item.userFullname}`,
      callApi: () => {
        dispatch(deletePayment({ transactionIds: [item.id] })),
        setHistoryItem(null);
      },
    });
  };
  const handleDelete = () => {
    if (selectedRowKeys.length > 0) {
      // const id = [];
      // selectedRowKeys.map((item) => id.push(item.id));
      ModalConfirm({
        callApi: () => {
          dispatch(deletePayment({ transactionIds: selectedRowKeys })),
          setHistoryItem(null);
        },
      });
    } else {
      notification.warning({
        message: 'Vui lòng chọn bản ghi bạn cần xóa',
        duration: 2,
        placement: 'topLeft',
        icon:false
      });
    }
  };

  const handleImport = (e) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    dispatch(uploadFile(data));
  };
  const columns = [
    {
      title: 'Họ và tên',
      dataIndex: 'userFullname',
      key: 'userFullname',
    },
    {
      title: 'Ngày thanh toán',
      key: 'startDate',
      render: (record) => {
        return <span>{getTimeByTZ(record.startDate)}</span>;
      },
    },
    {
      title: 'Ngày hiệu lực',
      key: 'startDate',
      render: (record) => {
        return <span>{getTimeByTZ(record.startDate)}</span>;
      },
    },
    {
      title: 'Ngày kết thúc',
      key: 'dueDate',
      render: (record) => {
        return <span>{getTimeByTZ(record.dueDate)}</span>;
      },
    },
    {
      title: 'Số tiền',
      key: 'amount',
      className: 'green-color',
      render: (record) => {
        const format = new Intl.NumberFormat('vi-VN').format(record.amount);
        return <span>{format}</span>;
      },
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: (_, record) => (
        <DeleteOutlined
          className='btn-deleteIcon'
          onClick={() => handleDeleteOne(record)}
        />
      ),
    },
  ];

  const onChangePage = (current, pageSize) => {
    setPage(current);
    setLimit(pageSize);
  };

  useEffect(() => {
    const params = { q: searchPayload, page: page, limit: limit };
    dispatch(retrieveData(params));
  }, [searchPayload, page, limit, payments.isReload]);

  return (
    <div className='paymentManagement'>
      <div className='paymentManagement-nav'>
        <div className='paymentManagement-title'>
          <h3>Quản lý thanh toán khách hàng Manulife</h3>
        </div>
        <div className='paymentManagement-option'>
          <Button onClick={handleDelete}>Xóa</Button>
          <Button type='primary'>
            <label htmlFor='import'>
              <img src={importIcon} alt='' />
              <input
                type='file'
                id='import'
                style={{ display: 'none' }}
                onChange={handleImport}
              />
              Import
            </label>
          </Button>
          <Button
            type='primary'
            icon={<img src={plusIcon} alt='' />}
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            Thanh toán mới
          </Button>
        </div>
      </div>
      <div className='paymentManagement-container'>
        <Row
          gutter={[15, 15]}
          align='stretch'
          className='paymentManagement-row'
        >
          <Col
            span={15}
            className='paymentManagement-col'
            lg={15}
            md={24}
            sm={24}
            xs={24}
          >
            <div className='paymentManagement-content'>
              <PaymentManagementHeader
                title='Danh sách tài khoản'
                search
                setPayload={setSearchPayload}
              />
              <Spin spinning={loading === LOADING_STATUS.pending}>
                <Table
                  className='table-common paymentManagement-table'
                  dataSource={payments.data}
                  columns={columns}
                  pagination={
                    payments.total > limit && {
                      total: payments.total,
                      onChange: onChangePage,
                      //pageSizeOptions: [10, 20, 50],
                      showSizeChanger: true,
                      className: 'payment-pagination',
                    }
                  }
                  rowSelection={{
                    selectedRowKeys,
                    onChange: onSelectChange,
                  }}
                  rowClassName={(record) =>
                    rowActive === record.id ? 'active' : ''
                  }
                  onRow={(record) => {
                    return {
                      onClick: () => {
                        setRowActive(record.id), setHistoryItem(record);
                      },
                    };
                  }}
                  rowKey='id'
                  size='middle'
                  bordered={false}
                />
              </Spin>
            </div>
          </Col>
          <Col
            span={9}
            className='paymentManagement-col'
            lg={9}
            md={24}
            sm={24}
            xs={24}
          >
            <div className='paymentManagement-content'>
              <PaymentManagementHeader title='Lịch sử thanh toán' />
              <PaymentHistory customer={historyItem} />
            </div>
          </Col>
        </Row>
        <CreatePayment
          users={payments.data}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      {/* <Table
        dataSource={payments.data}
        columnTable={columns}
        isSelection
        setSelectedRowKeys={onSelectChange}
      ></Table> */}
      {/* <Pagination
        total={payments.total}
        // onShowSizeChange={onChangePage}
        // setPaginate={setPaginate}
      /> */}
    </div>
  );
};

export default PaymentManagement;
