"use client";
import React, { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useStyles } from "./style/style";
import PasswordInput from "@/components/auth-components/password-input/password-input";
import { ILoginData } from "@/providers/auth/context";
import { useAuthActions, useAuthState } from "@/providers/auth";
import { useRouter } from "next/navigation";
import { toast } from "@/providers/toast/toast";

const LoginPage: React.FC = () => {
  const { styles } = useStyles();
  const { loginUser, resetStateFlags } = useAuthActions();
  const { isSuccess, isError, currentRole } = useAuthState();
  const router = useRouter();

  const handleSingIn = async (values) => {
    try {
      const loginData: ILoginData = {
        ...values,
      };
      loginUser(loginData);
    } catch (error) {
      toast("Username or password incorrect", "error");
      console.error(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      resetStateFlags();
      switch (currentRole) {
        case "publicuser":
          router.push("/publicUser");
          break;
        case "employee":
          router.push("/employee");
          break;
        default:
          router.push("/publicUser");
      }
    }

    if (isError) {
      resetStateFlags();
    }
  }, [isSuccess, isError]);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.formContainer}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={handleSingIn}
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
            <PasswordInput />
          </Form.Item>
          <Form.Item>
            <a href="">Forgot password</a>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            or <a href="/sign-up">Register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
