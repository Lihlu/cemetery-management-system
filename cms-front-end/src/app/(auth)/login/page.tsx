"use client";
import React, { useEffect } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Form, Input, Spin, Typography, Divider, Card } from "antd";
import { useStyles } from "./style/style";
import { ILoginData } from "@/providers/auth/context";
import { useAuthActions, useAuthState } from "@/providers/auth";
import { useRouter } from "next/navigation";
import { toast } from "@/providers/toast/toast";
import Link from "next/link";

const { Title, Text } = Typography;

const LoginPage: React.FC = () => {
  const { styles } = useStyles();
  const { loginUser, resetStateFlags } = useAuthActions();
  const { isSuccess, isError, isPending, currentRole } = useAuthState();
  const router = useRouter();
  const [form] = Form.useForm();

  const handleSignIn = async (values: ILoginData) => {
    try {
      loginUser(values);
    } catch (error) {
      toast("Username or password incorrect", "error");
      console.error(error);
    }
  };

  useEffect(() => {
    let shouldNavigate = false;
    let destination = "/";

    if (isSuccess) {
      toast("Login successful", "success");
      shouldNavigate = true;
      switch (currentRole) {
        case "publicuser":
          destination = "/public-user";
          break;
        case "employee":
          destination = "/employee";
          break;
      }

      resetStateFlags();

      if (shouldNavigate) {
        router.push(destination);
      }
    }

    if (isError) {
      toast("Login Failed. Password/Username incorrect", "error");
      resetStateFlags();
    }
  }, [isSuccess, isError, currentRole, resetStateFlags, router]);

  return (
    <div className={styles.pageContainer}>
      {isPending && (
        <div className={styles.loadingOverlay}>
          <Spin size="large" />
        </div>
      )}
      <div className={styles.contentWrapper}>
        <Card bordered={false} className={styles.loginCard}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <img src="/images/auth-logo.png" alt="Logo" width="120px" />
            </div>
          </div>
          <Title level={2} className={styles.formTitle}>
            Welcome Back
          </Title>
          <Text type="secondary" className={styles.formSubtitle}>
            Sign in to continue to your account
          </Text>

          <Form
            form={form}
            name="login"
            initialValues={{ remember: true }}
            className={styles.loginForm}
            onFinish={handleSignIn}
            layout="vertical"
          >
            <Form.Item
              name="userNameOrEmailAddress"
              label="Username or Email"
              rules={[
                {
                  required: true,
                  message: "Please enter your username or email",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className={styles.inputIcon} />}
                placeholder="Enter your username or email"
                className={styles.input}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password
                placeholder="Enter your password"
                prefix={<LockOutlined className={styles.inputIcon} />}
                className={styles.input}
              />
            </Form.Item>

            <div className={styles.forgotPasswordContainer}>
              <Link href="/forgot-password" className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </div>

            <Form.Item className={styles.submitContainer}>
              <Button
                block
                type="primary"
                htmlType="submit"
                disabled={isPending}
                className={styles.submitButton}
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>

          <Divider className={styles.divider}>
            <Text type="secondary">New to our platform?</Text>
          </Divider>

          <div className={styles.registerContainer}>
            <Link href="/sign-up">
              <Button block size="large" className={styles.registerButton}>
                Create an Account
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
