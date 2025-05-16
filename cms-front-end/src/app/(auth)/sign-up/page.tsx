"use client";
import React, { useEffect } from "react";
import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
  PhoneOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Spin, Typography, Divider, Card } from "antd";
import { useStyles } from "./style/style";
import PasswordInput from "@/components/auth-components/password-input/password-input";
import { useRouter } from "next/navigation";
import { toast } from "@/providers/toast/toast";
import { ISignUpData } from "@/providers/auth/context";
import { useAuthActions, useAuthState } from "@/providers/auth";
import Link from "next/link";
import { useEmailActions } from "@/providers/email";
import { accountCreatedTemplate } from "@/providers/email/email-templates/account-created";
import { IEmail } from "@/providers/email/context";

const { Title, Text } = Typography;

const SignUp: React.FC = () => {
  const { styles } = useStyles();
  const { isPending, isSuccess, isError } = useAuthState();
  const { signUp, resetStateFlags } = useAuthActions();
  const { sendEmail } = useEmailActions();
  const router = useRouter();
  const [form] = Form.useForm();

  const handleSignUp = async (values: ISignUpData) => {
    try {
      await signUp(values);
      const emailData: IEmail = {
        to: values.email,
        subject: "Account Created",
        body: accountCreatedTemplate(values.name),
        isBodyHtml: true,
      };
      sendEmail(emailData);
    } catch (error) {
      const errorMessage =
        error?.message || "Something went wrong. Please try again.";
      toast(errorMessage, "error");
      console.error(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast("Account created successfully! Please log in.", "success");
      form.resetFields();
      router.push("/login");
      resetStateFlags();
    }

    if (isError) {
      toast("Registration failed. Please try again.", "error");
      resetStateFlags();
    }
  }, [isSuccess, isError, resetStateFlags, router]);

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
            Create an Account
          </Title>
          <Text type="secondary" className={styles.formSubtitle}>
            Sign up to get started
          </Text>

          <Form
            form={form}
            name="signup"
            initialValues={{ remember: true }}
            className={styles.loginForm}
            onFinish={handleSignUp}
            layout="vertical"
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className={styles.inputIcon} />}
                placeholder="Enter your username"
                className={styles.input}
              />
            </Form.Item>

            <div className={styles.formRow}>
              <Form.Item
                name="name"
                label="First Name"
                rules={[{ required: true, message: "Please input your Name!" }]}
                className={styles.halfWidthInput}
              >
                <Input
                  prefix={<UserOutlined className={styles.inputIcon} />}
                  placeholder="First name"
                  className={styles.input}
                />
              </Form.Item>

              <Form.Item
                name="surname"
                label="Last Name"
                rules={[
                  { required: true, message: "Please input your Surname!" },
                ]}
                className={styles.halfWidthInput}
              >
                <Input
                  prefix={<UserOutlined className={styles.inputIcon} />}
                  placeholder="Last name"
                  className={styles.input}
                />
              </Form.Item>
            </div>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please input your Email" },
                {
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className={styles.inputIcon} />}
                type="email"
                placeholder="Enter your email"
                className={styles.input}
              />
            </Form.Item>

            <Form.Item
              name="contactNumber"
              label="Contact Number"
              rules={[
                { required: true, message: "Please input your contact number" },
              ]}
            >
              <Input
                prefix={<PhoneOutlined className={styles.inputIcon} />}
                placeholder="Enter your contact number"
                className={styles.input}
              />
            </Form.Item>

            <Form.Item
              name="nationalIdNumber"
              label="ID Number"
              rules={[
                { required: true, message: "Please input your ID Number" },
              ]}
            >
              <Input
                prefix={<IdcardOutlined className={styles.inputIcon} />}
                placeholder="Enter your ID number"
                className={styles.input}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <PasswordInput />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your Password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className={styles.inputIcon} />}
                placeholder="Confirm your password"
                className={styles.input}
              />
            </Form.Item>

            <Form.Item className={styles.submitContainer}>
              <Button
                block
                type="primary"
                htmlType="submit"
                disabled={isPending}
                className={styles.submitButton}
              >
                Create Account
              </Button>
            </Form.Item>
          </Form>

          <Divider className={styles.divider}>
            <Text type="secondary">Already have an account?</Text>
          </Divider>

          <div className={styles.registerContainer}>
            <Link href="/login">
              <Button block size="large" className={styles.registerButton}>
                Sign In
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
