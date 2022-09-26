import React, {useEffect, useRef, useState} from 'react';
import { Table } from 'antd';
import {useSelector} from 'react-redux';
import {LOADING_STATUS} from '../../../ultis/constant';

export default function TableCommon(props) {
  const loading = useSelector((state) => state.loading);
  const {
    dataSource,
    columnTable,
    pagination = false,
    isSelection = false,
    bordered = false,
    ratioHeight = 0.5,
    heightMargin = 340,
    setSelectedRowKeys,
  } = props;
  const ref = useRef(null)
  const [isScroll, setIsScroll] = useState(false)

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRows);
  };

  const rowSelection = {
    onChange: onSelectChange,
  };

  useEffect(() => {
    if (ref.current.clientHeight > window.innerHeight*ratioHeight) {
      setIsScroll(true)
    }
  })

  return <Table
    {...props}
    ref={ref}
    loading={loading.loading === LOADING_STATUS.pending ? true : false}
    rowSelection={isSelection ? rowSelection : undefined}
    dataSource={dataSource}
    columns={columnTable}
    pagination={pagination}
    bordered={bordered}
    className='table-common'
    rowKey="id"
    scroll={isScroll ?
      {
        y: `calc(100vh - ${heightMargin}px)`,
        scrollToFirstRowOnChange: false
      }
      : 
      {}}>
    {props.children}
  </Table>
}
