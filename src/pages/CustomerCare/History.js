import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Col, Checkbox, Button} from 'antd';
import {getData} from '../../slices/customerCare';
import Table from '../../components/common/TableNormal';
import IconPlus from '../../assets/images/icons/plus.svg';
import IconFiles from '../../assets/images/icons/files.svg';
import Filter from "../../components/common/Filter";
import AddInfoContent from "../../components/common/Modal/CustomerCare/AddInfoContent";
import Modal from "../../components/common/Modal";
import {CUSTOMER_CARE_INFO, LOADING_STATUS, ARR_INFO_REDIRECT, INFO_PATH} from '../../ultis/constant';
import {getCustomerCareLabel, getTimeByTZ} from "../../helper";
import {Link} from "react-router-dom";

export default function History() {
  const {t} = useTranslation();
  const loading = useSelector((state) => state.loading.loading);
  const {data, customerData} = useSelector((state) => state.customerCare);
  const [visibleModalAddInfo, setVisibleModalAddInfo] = useState(false)
  const [detailData, setDetailData] = useState({})
  const [optionsFilter, setOptionsFilter] = useState('')
  const dispatch = useDispatch();

  const columns = [
    {
      title: t('common.date'),
      dataIndex: 'date',
      key: 'date',
      width: '20%',
      render: (record) => {
        return (
          <span>{getTimeByTZ(record.date)}</span>
        );
      }
    },
    {
      title: t('common.type info'),
      key: 'info',
      width: '23%',
      render: (record) => {
        return (
          <span>{getCustomerCareLabel(record.info)}</span>
        );
      }
    },
    {
      title: t('common.content'),
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '',
      key: 'info',
      width: '18%',
      render: (record) => {
        if (ARR_INFO_REDIRECT.includes(record.info)) {
          return (<div className="d-flex-end">
            <Link to={INFO_PATH[record.info]} className="btn-bgWhite-textGreen-borGreen pd-btn">
              <span>Xem</span>
            </Link>
          </div>)
        }
      }
    }
  ];

  const addModal = (detail) => {
    setVisibleModalAddInfo(true)
    setDetailData({})
  }

  useEffect(() => {
    if (customerData.customerId > 0) {
      dispatch(getData({customerId: customerData.customerId, info: CUSTOMER_CARE_INFO[0].value}))
    }
  }, [customerData.customerId])

  useEffect(() => {
    if (customerData.customerId > 0) {
      dispatch(getData({customerId: customerData.customerId, info: optionsFilter[0]}))
    }
  }, [optionsFilter])

  useEffect(() => {
    if (loading === LOADING_STATUS.succeeded) {
      setVisibleModalAddInfo(false)
    }
  }, [loading])
  
  return (
    <>
      <Col span={11} className="customer-care__right">
        <div className="customer-care__right--top">
          <Checkbox className="checkbox-item" checked={customerData.isPotential}>{t('customer care.no more potential')}</Checkbox>
        </div>
        <div className="customer-care__right--event">
          <div className="customer-care__right--event--left">
            <h5>{t('customer care.history title')}</h5>
            <Filter options={CUSTOMER_CARE_INFO} setPayload={setOptionsFilter} />
          </div>
        </div>
        <div className="customer-care__right--list">
          <Table dataSource={data} columnTable={columns} isScroll={true} heightMargin={550}/>
          <div className="customer-care__right--list-footer">
            <Button className="btn-add-new" icon={<img src={IconPlus} alt=""/>} onClick={(() => addModal())}>{t('customer care.add info title')}</Button>
          </div>
        </div>
        <div className="customer-care__right--info">
          <h3><img src={IconFiles} alt=""/>{t('customer care.sync info')}</h3>
          <ul>
            <li>27 tuổi, 1 vợ, 2 con, chưa có nhà, đang làm nghề môi giới chứng khóa</li>
            <li>Thu nhập 62 triệu</li>
          </ul>
        </div>
      </Col>
      <Modal isVisible={visibleModalAddInfo} setIsVisible={setVisibleModalAddInfo} title={Object.keys(detailData).length > 0 ? t(('customer care.edit info title')) : t(('customer care.add info title'))} width={770} content={<AddInfoContent detailData={detailData} setVisibleModalAddInfo={setVisibleModalAddInfo}/>} />
    </>
  );
}
