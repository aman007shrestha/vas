import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

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
  const [credential, setCredential] = useState<Info>(initialCredential);

  const onFinish = (values: any) => {
    setCredential(values);
    alert(`${credential.username}, ${credential.password}`);
    // Api call to auth
    setCredential(initialCredential);
  };

  const onFinishFailed = (errorInfo: any) => {
    alert('Input credentials');
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
