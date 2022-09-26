import {React, useState, useEffect} from 'react'
import { Col, Row, Checkbox, Button, Form, Input, Select } from 'antd';
import "../../assets/scss/Admin/create-user.scss"
import { useDispatch, useSelector } from 'react-redux';
import {createUser} from '../../slices/userManagement';
import axios from 'axios';
const {Option} = Select;

function Create_user(props) {
  const [dataCity, setDataCity]= useState([])
  const dispatch= useDispatch()
  useEffect(() => {
    axios.get('https://provinces.open-api.vn/api/')
      .then(function (response) {
        console.log(response.data);
        setDataCity(response.data)
      })
  },[])
  
  const handleClose = () => {
    props.closeCreateUser()
  }
  const onFinish = (values) => {
    dispatch(createUser(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='container_create-user'>
      <div className="creater_user-title">
        <h3>Tạo mới nhân sự</h3>
      </div>
      <div className="line"></div>
      <Form name="create_user-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[8, 16]}>
          <Col span={8} >
            <Form.Item
              label="ID"
            >
              <Input type="text" placeholder='Gen tự động' disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Họ và tên"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập Họ và tên.',
                },
              ]}
            >
              <Input type="text" placeholder='Nhập' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Sô điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập số điện thoai.',
                },
              ]}
            >
              <Input type="number" placeholder='Nhập' />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label="ID login"
              name="loginId">
              <Input type="text" placeholder='Nhập' />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="Email"
              name="email"
            >
              <Input type="text" placeholder='Nhập' />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="start" className='group_checkbox '>
          <Col span={5}>
            <Form.Item
              name="isAdmin"
              valuePropName="checked"
            >
              <Checkbox className='checkbox-primary'>Admin</Checkbox>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              name="qna"
              valuePropName="checked"
            >
              <Checkbox className='checkbox-primary'>Hỏi đáp</Checkbox>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="isPaid"
              valuePropName="checked"
            >
              <Checkbox className='checkbox-primary'>Thanh toán</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[8, 16]}>
          <Col span={16}>
            <Form.Item
              label="Vùng hoạt động"
              name="location"
            >
              <Select
                placeholder="Nhập"
                style={{
                  
                }}
                // onChange={handleChangeSelect}
              >
                {dataCity != [] && dataCity.map(item=>{
                  return(
                    <Option key={item.code} value={item.codename}>{item.name}</Option>
                  )
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="idLoginUserManager"
              label="ID login người quản lý"
            >
              <Input type="text" placeholder='Nhập' />
            </Form.Item>
          </Col>
        </Row>
        <div className="line line_bottom"></div>
        <div className="group_btn">
          <button className='btn-danger' onClick={handleClose}>Huỷ tạo</button>
          <Form.Item>
            <Button type="primary" htmlType="submit" className='btn-primary'>Tạo mới</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export default Create_user