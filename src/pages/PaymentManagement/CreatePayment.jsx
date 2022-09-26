import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { createPayment } from '../../slices/paymentManagement';
import { LOADING_STATUS } from '../../ultis/constant';

const CreatePayment = (props) => {
  const { isModalOpen, setIsModalOpen } = props;
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const loading = useSelector((state) => state.loading.loading);

  const handleAddNew = (values) => {
    const newPayment = {
      ...values,
      startDate: moment(values.startDate?._d).format(),
      dueDate: moment(values.dueDate?._d).format(),
      amount: +values.amount,
    };
    dispatch(createPayment(newPayment));
    if (loading === LOADING_STATUS.succeeded) {
      setIsModalOpen(false);
      form.resetFields()
    }
  };

  return (
    <div className='createPayment'>
      <Modal
        className='paymentManagement-modal'
        title={<h3>Thanh toán mới</h3>}
        open={isModalOpen}
        footer={false}
        keyboard={false}
        centered
        onCancel={() =>{ setIsModalOpen(false),form.resetFields()}}
      >
        <Form name='nest-messages' onFinish={handleAddNew} form={form}>
          <Form.Item
            name='loginId'
            label='ID Login'
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='ID login' />
          </Form.Item>
          <Form.Item
            name='userFullname'
            label='Họ và tên:'
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='Nhập' />
            {/* <Select
              showSearch
              placeholder='Select a person'
              optionFilterProp='children'
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              {users &&
                users.map((user) => (
                  <Select.Option value={user.id} key={user.id}>
                    {user.userFullname}
                  </Select.Option>
                ))}
            </Select> */}
          </Form.Item>

          <Form.Item
            name='startDate'
            label='Ngày thanh toán'
            rules={[
              {
                required: true,
                type: 'date',
              },
            ]}
          >
            <DatePicker placeholder='Chọn ngày thanh toán' />
          </Form.Item>
          <Form.Item
            name='dueDate'
            label='Ngày kết thúc'
            rules={[
              {
                type: 'date',
                required: true,
              },
            ]}
          >
            <DatePicker placeholder='Chọn ngày kết thúc' />
          </Form.Item>
          <Form.Item name='amount' label='Số tiền' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='description' label='Nội dung'>
            <Input.TextArea autoSize />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Thêm mới
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreatePayment;
