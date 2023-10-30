import { Button, Form, Input } from 'antd';
import { CSSProperties } from 'react';
const LoginForm = (props: { style?: CSSProperties }) => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        // 在这里处理表单提交, 如发送请求到后端服务 
        // router.push('/dashboard'); // 如果登录成功, 可以跳转到 dashboard 页面
    };

    return (
        <Form
            name="normal_login"
            className="login-form w-full "
            initialValues={{
                remember: true,
            }}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入你的用户名',
                    },
                ]}
            >
                <Input placeholder="用户名" />
            </Form.Item>
            <Form.Item
                name="password"
                label="密码"
                rules={[
                    {
                        required: true,
                        message: '请输入你的密码',
                    },
                ]}
            >
                <Input
                    type="password"
                    placeholder="密码"
                />
            </Form.Item>

            <Form.Item className='flex justify-center'>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;