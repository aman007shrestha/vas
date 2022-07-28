import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../features/authentication/authSlice';

interface Info {
  username: string;
  password: string;
  remember: boolean;
}

const initialCredential = {
  username: '',
  password: '',
  remember: true,
};

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credential, setCredential] = useState<Info>(initialCredential);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setCredential(values);
    const localData = { userName: values.username, isLoggedIn: true };
    localStorage.setItem('userDetail', JSON.stringify(localData));
    dispatch(logIn(JSON.stringify(localData.userName)));
    navigate({ pathname: '/' });
  };

  const onFinishFailed = (errorInfo: any) => {
    setCredential(initialCredential);
    form.resetFields();
  };

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={credential}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
      form={form}
    >
      <Form.Item
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='remember'
        valuePropName='checked'
        wrapperCol={{ offset: 8, span: 8 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
