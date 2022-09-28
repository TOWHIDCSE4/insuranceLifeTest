import {React, useEffect} from 'react'
import { Form, Upload, Row, Col, Input, Checkbox, Button } from 'antd'
import { CameraOutlined } from '@ant-design/icons';
import useFormErrors from "../../hooks/useFormErrors";
import { useDispatch, useSelector } from 'react-redux';
import { changePasswords, updateUsers, sendAvatars } from '../../slices/configUser';


function ConfigUser() {


  const userInfo= useSelector((state)=>state.auth.me)
  console.log(userInfo);
  const [form] = Form.useForm();
  useFormErrors(form);

  const onFinish = (values) => {
    console.log(values);
  };


  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      form.setFieldsValue({ ...userInfo})
    } else {
      form.resetFields()
    }
    
  }, [userInfo])
  return (
    <div>
      <div className="config_header">
        <h3>Cấu hình</h3>
        <button className='btn-primary'>
          <img src='../images/lock_icon.svg' />
          Đổi mật khẩu
        </button>
      </div>
      <Form form={form}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className="config_content">
          <div className="config_content_title">
            <h2>Thông tin cá nhân</h2>
          </div>
          <div className="config_content_body">
            <div className="config_content_body-avatar">
              <p className='avatar-title'>Ảnh đại diện:</p>
              <Upload
                // name={name}
                listType='picture-card'
                className='avatar-uploader'
              // showUploadList
              // onChange={onChange}
              /* beforeUpload={() => { return false }} */
              // beforeUpload={Upload.LIST_IGNORE}
              // fileList={fileList}
              /* disabled={fileList.length > 0 ? true : false} */
              >
                <div className='upload-content'>
                  <CameraOutlined />
                  <span>Tải ảnh lên</span>
                </div>
              </Upload>
            </div>
            <div className="config_content_body-infoUser">
              <Row gutter={[10, 13]}>
                <Col span={5}>
                  <Form.Item
                    label="Họ và tên"
                    name="fullname"
                    rules={[{
                      required: true,
                    }]}
                  >
                    <Input type='text'/>
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[{
                      required: true,
                    }]}
                  >
                    <Input type='number' />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="ID login"
                    name="loginId"
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Form.Item
                    label="Địa chỉ email"
                    name="email"
                    rules={[{
                      required: true,
                    },
                    ]}
                  >
                    <Input type='text' />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="ID của người quản lý"
                    name="managerId"
                    rules={[{
                      required: true,
                    }]}
                  >
                    <Input type='text' />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    label="Vùng hoạt động"
                    name="location"
                    rules={[{
                      required: true,
                    }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="config_content_body_checkbox-group">
              <Row>
                <Col span={11} className="border_right">
                  <Form.Item
                    name="isDefaultHelper"
                  >
                    <Checkbox className='checkbox-primary'
                      // id='isAdmin'
                      // defaultChecked={record.isAdmin}
                    >
                      Chế độ trợ giúp mặc định (hiện lời thoại trên các giao diện)
                    </Checkbox>
                  </Form.Item>
                </Col>
                <Col span={5} className="border_right">
                  <Form.Item
                    name="isTraining"
                  >
                    <Checkbox className='checkbox-primary'>
                      Chế độ đào tạo
                    </Checkbox>
                  </Form.Item>
                </Col>
                <Col span={8} className="border_right">
                  <Form.Item
                    name="isLanguageBaseLocation"
                  >
                    <Checkbox className='checkbox-primary'>
                      Chế độ ngôn ngữ theo vùng
                    </Checkbox>
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="config_content_body_button-group">
              <Button className='btn-primary'>Về trang chủ</Button>
              <div className="config_content_body_button-group_right">
                <Button className='btn-danger'>Huỷ</Button>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className='btn-primary'>Lưu thay đổi</Button>
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default ConfigUser