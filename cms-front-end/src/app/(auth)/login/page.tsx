"use client";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input} from "antd";
import { useStyles } from "./style/style";

const LoginPage: React.FC = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.outerContainer}>
      <div className={styles.formContainer}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
        >
          <Form.Item
            name="userNameOrEmailAddress"
            rules={[
              {
                required: true,
                message: "Please input your Username or Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username or Email Address"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
              <a href="">Forgot password</a>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            or <a href="">Register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
