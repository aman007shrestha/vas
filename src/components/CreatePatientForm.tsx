import {
  Button,
  Form,
  Input,
  DatePicker,
  Select,
  Upload,
  InputNumber,
  UploadProps,
  UploadFile,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setPatientInformation } from '../features/patientInformation/patientInformationSlice';
import { useState } from 'react';

interface Props {
  isAdmin: boolean;
}

/**
 * @params {isAdmin} bool representing the action being called by admin or normal user
 * @desc form consisting of fields for registration, formats data in structure, sets redux state, send axios request to backend
 * @returns a generic form for patient registration for both admin and client
 */
const CreatePatientForm = ({ isAdmin }: Props) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  console.log(isAdmin);

  const handleSubmit = (values: any) => {
    const structuredData = {
      firstName: values.firstName,
      lastName: values.lastName,
      birthDate: values.birthDate._d.toString(),
      ethnicity: values.ethnicity,
      gender: values.gender,
      email: values.email,
      address: {
        cityName: values.cityName,
        stateName: values.stateName,
        streetName: values.streetName,
      },
      paymentInfo: {
        insuranceProvider: values.insuranceProvider,
        insuranceId: values.insuranceId,
        memberId: values.memberId,
      },
      document: values.document.file,
    };
    // get patient Id for successful registration
    dispatch(setPatientInformation(structuredData));
    form.resetFields();
    setFileList([]);
  };

  const { Option } = Select;
  const uploadProps: UploadProps = {
    onRemove: () => {
      setFileList([]);
    },
    beforeUpload: (file) => {
      setFileList([file]);
      return false;
    },
    fileList,
  };

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      onFinish={handleSubmit}
      form={form}
      autoComplete='on'
    >
      <Form.Item
        label='First Name'
        name='firstName'
        rules={[{ required: true, message: 'Please input your first Name!' }]}
      >
        <Input placeholder='Enter your first Name' />
      </Form.Item>

      <Form.Item
        label='Last Name'
        name='lastName'
        rules={[{ required: true, message: 'Please input your last Name!' }]}
      >
        <Input placeholder='Enter your last Name' />
      </Form.Item>
      <Form.Item
        label='Birth Date'
        name='birthDate'
        rules={[{ required: true, message: 'Please input your Birth Date!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label='Ethnicity'
        name='ethnicity'
        rules={[{ required: true, message: 'Please input your ethnicity!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Gender'
        name='gender'
        rules={[{ required: true, message: 'Please select a field!' }]}
      >
        <Select>
          <Option value='male'>Male</Option>
          <Option value='female'>Female</Option>
          <Option value='other'>Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label='email'
        name='email'
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input type='email' />
      </Form.Item>

      <Form.Item label='Registered Address'>
        <Input.Group compact>
          <Form.Item
            name='streetName'
            rules={[
              { required: true, message: 'Please input your street name!' },
            ]}
          >
            <Input
              style={{ width: 100, textAlign: 'center' }}
              placeholder='Street'
            />
          </Form.Item>

          <Form.Item
            name='cityName'
            rules={[
              { required: true, message: 'Please input your city name!' },
            ]}
          >
            <Input
              style={{ width: 100, textAlign: 'center' }}
              placeholder='city'
            />
          </Form.Item>
          <Form.Item
            name='stateName'
            rules={[
              { required: true, message: 'Please input your state name!' },
            ]}
          >
            <Input
              style={{ width: 100, textAlign: 'center' }}
              placeholder='state'
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item label='Payment Information'>
        <Input.Group compact>
          <Form.Item
            name='insuranceId'
            rules={[
              { required: true, message: 'Please input your insurance id!' },
            ]}
          >
            <InputNumber
              style={{ width: 100, textAlign: 'center' }}
              placeholder='Insurance Id'
            />
          </Form.Item>

          <Form.Item
            name='memberId'
            rules={[
              { required: true, message: 'Please input your member id!' },
            ]}
          >
            <InputNumber
              style={{ width: 100, textAlign: 'center' }}
              placeholder='member Id'
            />
          </Form.Item>
          <Form.Item
            name='insuranceProvider'
            rules={[
              {
                required: true,
                message: 'Please input your insurance provider!',
              },
            ]}
          >
            <Input
              style={{ width: 100, textAlign: 'center' }}
              placeholder='Insurance Provider'
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item
        name='document'
        label='Document'
        rules={[
          {
            required: true,
            message: 'Please upload your document!',
          },
        ]}
      >
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePatientForm;
