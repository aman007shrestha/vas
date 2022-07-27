import React, { useContext, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { AuthContext, AuthInterface } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [credential, setCredential] = useState<Info>(initialCredential);
  const [form] = Form.useForm();
  const { setLogggedInState } = useContext(AuthContext) as AuthInterface;
  const onFinish = (values: any) => {
    setCredential(values);
    setLogggedInState({ userName: values.username, isLoggedIn: true });
    localStorage.setItem('username', values.username);
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
