"use client";
import React, { useEffect, useState } from "react";
import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
  PhoneOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Spin } from "antd";
import { useStyles } from "./style/style";
import PasswordInput from "@/components/auth-components/password-input/password-input";
import { useRouter } from "next/navigation";
import { toast } from "@/providers/toast/toast";
import { ISignUpData } from "@/providers/auth/context";
import { useAuthActions, useAuthState } from "@/providers/auth";

const SignUp: React.FC = () => {
  const { styles } = useStyles();
  const { isPending, isSuccess } = useAuthState();
  const { signUp, resetStateFlags } = useAuthActions();
  const router = useRouter();

  const handleSignUp = async (values: ISignUpData) => {
    try {
      await signUp(values);
    } catch (error) {
      toast(error.message, "error");
      console.error(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast("Account created successfully! Please log in.", "success");
      router.push("/login");

      resetStateFlags();
    }
  }, [isSuccess, resetStateFlags, router]);

  return (
    <div className={styles.outerContainer}>
      {isPending && (
        <div className={styles.loadingOverlay}>
          <Spin size="large" />
        </div>
      )}
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Create an Account</h2>
        <Form
          name="signup"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={handleSignUp}
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <div className={styles.nameFields}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your Name!" }]}
              className={styles.halfWidthInput}
            >
              <Input prefix={<UserOutlined />} placeholder="Name" />
            </Form.Item>

            <Form.Item
              name="surname"
              rules={[
                { required: true, message: "Please input your Surname!" },
              ]}
              className={styles.halfWidthInput}
            >
              <Input prefix={<UserOutlined />} placeholder="Surname" />
            </Form.Item>
          </div>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your Email" },
              { type: "email", message: "Please enter a valid email address" },
            ]}
          >
            <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="contactNumber"
            rules={[
              { required: true, message: "Please input your contact number" },
            ]}
          >
            <Input prefix={<PhoneOutlined />} placeholder="Contact Number" />
          </Form.Item>

          <Form.Item
            name="nationalIdNumber"
            rules={[{ required: true, message: "Please input your ID Number" }]}
          >
            <Input prefix={<IdcardOutlined />} placeholder="ID Number" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <PasswordInput />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your Password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!"),
                  );
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" disabled={isPending}>
              Sign Up
            </Button>
            <div className={styles.loginLink}>
              Already have an account? <a href="/login">Log in</a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
