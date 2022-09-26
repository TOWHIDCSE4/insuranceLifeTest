import { React, useEffect } from 'react';
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Select,
  DatePicker,
  AutoComplete,
} from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  createContract,
  updateContract,
} from '../../slices/contractManagement';
import {useTranslation} from 'react-i18next';
import { getCustoms } from '../../slices/contractManagement';
import useFormErrors from '../../hooks/useFormErrors'

function CreateContract(props) {
  const {t} = useTranslation();
  const [form] = Form.useForm();
  useFormErrors(form);
  const { setVisibleModal, dataEdit } = props
  const customerName = useSelector((state) => state.contractManagement.custom);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustoms({ name: '', limit: 10, offset: 0 }));
  }, []);

  var { Option } = AutoComplete;

  const onFinish = (values) => {
    const data = {
      contractNumber: values.contractNumber,
      customerId: +id,
      solutionId: +id,
      beneficiary: values.beneficiary,
      value: +values.value,
      startDate: moment(values.startDate._d).format(),
      duration: +values.duration,
      depositTerm: +values.depositTerm,
    };
    if (Object.keys(dataEdit).length > 0) {
      dispatch(updateContract({ id: dataEdit.id, data: data }));
    } else {
      dispatch(createContract(data));
    }
  };

  //autoComplete
  const onSearch = (searchText) => {
    dispatch(getCustoms({ name: searchText, limit: 10, offset: 0 }));
  };

  useEffect(() => {
    if (Object.keys(dataEdit).length > 0) {
      form.setFieldsValue({...dataEdit, ...{date: moment(dataEdit.date)}})
    } else {
      form.resetFields()
    }
  }, [dataEdit])

  return <Form
    layout="vertical"
    initialValues={{
      remember: true,
    }}
    form={form}
    onFinish={onFinish}
    autoComplete='off'
  >
    <Row gutter={[6, 13]}>
      <Col span={6}>
        <Form.Item
          label='Mã số'
          name='contractNumber'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder='Nhập' type='number' className="input-item-outline"/>
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label='Tên người mua'
          name='customerName'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <AutoComplete
            onSearch={onSearch}
            dropdownMatchSelectWidth={400}
            placeholder='Nhập'
            className="select-item-outline"
          >
            {customerName.map((item) => (
              <Option value={item.fullname} key={item.customerId}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.fullname}</span>
                  <span>ID: {item.customerId}</span>
                </div>
              </Option>
            ))}
          </AutoComplete>
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label='Tên người hưởng'
          name='beneficiary'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập trường này.',
            },
          ]}
        >
          <Input placeholder='Nhập' className="input-item-outline"/>
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label='Giá trị'
          name='value'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập trường này.',
            },
          ]}
        >
          <Input placeholder='Nhập' type='number' className="input-item-outline"/>
        </Form.Item>
      </Col>
      <Col span={6}>
        {props.data?.createdAt ? (
          <Form.Item
            label='Ngày hiệu lực'
            name='startDate'
            initialValue={moment(props.data?.createdAt) || 'DD/MM/YYYY'}
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập trường này.',
              },
            ]}
          >
            <DatePicker format={'DD/MM/YYYY'} className="input-item-outline"/>
          </Form.Item>
        ) : (
          <Form.Item
            label='Ngày hiệu lực'
            name='startDate'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập trường này.',
              },
            ]}
          >
            <DatePicker placeholder='DD/MM/YYYY' format={'DD/MM/YYYY'} className="input-item-outline"/>
          </Form.Item>
        )}
      </Col>
      <Col span={6}>
        <Form.Item
          label='Số năm nộp phí'
          name='duration'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập trường này.',
            },
          ]}
        >
          <Input placeholder='Nhập' className="input-item-outline"/>
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label='Chu kỳ nộp phí'
          name='depositTerm'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập trường này.',
            },
          ]}
        >
          <Select className='select-item-outline' placeholder='Chọn'>
            <Option value='30'>Tháng</Option>
            <Option value='180'>Nửa năm</Option>
            <Option value='360'>Năm</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item className="footer-modal">
          <Button key="back" className="btn-danger" onClick={() => setVisibleModal(false)}>
            {t('common.cancel')}
          </Button>
          <Button key="submit" className="btn-primary" htmlType="submit" type="primary">
            {Object.keys(dataEdit).length > 0 ? t('common.save') : t('common.create')}
          </Button>
        </Form.Item>
      </Col>
    </Row>
  </Form>
}

export default CreateContract;
