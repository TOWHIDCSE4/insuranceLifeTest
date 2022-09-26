import { Table } from 'antd';
import React from 'react';
import calendarIcon from '../../assets/images/icons/calendar.svg';
import moment from 'moment';
import { FORMAT_DATE, LOADING_STATUS } from '../../ultis/constant';
import { memo } from 'react';

const columns = [
  {
    title: 'Ngày',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Nội dung',
    dataIndex: 'content',
    key: 'content',
  },
];

const PaymentHistory = ({ customer }) => {
  return (
    <div className='paymentHistory'>
      {customer ? (
        <>
          <div className='paymentHistory-customer'>
            <div className='paymentHistory-info'>
              <div className='paymentHistory-title'>
                <h4>{customer?.userFullname} </h4>
                <p>
                  Số tiền: <span>{customer?.amount}</span>
                </p>
              </div>
              <div className='paymentHistory-time'>
                <div className='paymentHistory-time_item'>
                  <div className='paymentHistory-time_title'>
                    <img src={calendarIcon} alt='' />
                    <span>Ngày thanh toán</span>
                  </div>
                  <div className='paymentHistory-time_date'>
                    <span>
                      {moment(customer?.startDate).format(FORMAT_DATE)}
                    </span>
                  </div>
                </div>

                <div className='paymentHistory-time_item'>
                  <div className='paymentHistory-time_title'>
                    <img src={calendarIcon} alt='' />
                    <span>Ngày hiệu lực</span>
                  </div>
                  <div className='paymentHistory-time_date'>
                    <span>
                      {moment(customer?.startDate).format(FORMAT_DATE)}
                    </span>
                  </div>
                </div>

                <div className='paymentHistory-time_item'>
                  <div className='paymentHistory-time_title'>
                    <img src={calendarIcon} alt='' />
                    <span>Ngày kết thúc</span>
                  </div>
                  <div className='paymentHistory-time_date'>
                    <span>{moment(customer?.dueDate).format(FORMAT_DATE)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='paymentHistory-group'>
            <Table
              className='table-common'
              size='middle'
              dataSource={customer?.histories}
              columns={columns}
              pagination={false}
              rowKey={(record) => record.id}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default memo(PaymentHistory);
