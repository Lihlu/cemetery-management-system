import React, { useState } from "react";
import { Input, Progress } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

interface PasswordInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value = "",
  onChange,
}) => {
  const [password, setPassword] = useState(value);

  const checkRequirements = (password: string) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;

    return {
      length: { met: isLongEnough, color: isLongEnough ? "green" : "red" },
      uppercase: { met: hasUppercase, color: hasUppercase ? "green" : "red" },
      lowercase: { met: hasLowercase, color: hasLowercase ? "green" : "red" },
      number: { met: hasNumber, color: hasNumber ? "green" : "red" },
      specialChar: {
        met: hasSpecialChar,
        color: hasSpecialChar ? "green" : "red",
      },
    };
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (onChange) {
      onChange(newPassword);
    }
  };

  const requirements = checkRequirements(password);

  const progress = Object.values(requirements).filter((req) => req.met).length;

  let progressColor = "red";
  if (progress === 2) {
    progressColor = "orange";
  } else if (progress === 5) {
    progressColor = "green";
  }

  return (
    <div>
      <Input.Password
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
      />
      {password && (
        <div style={{ marginTop: 10 }}>
          <Progress
            percent={(progress / 5) * 100}
            strokeColor={progressColor}
            showInfo={false}
          />
          <div style={{ marginTop: 10 }}>
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: 5 }}
            >
              {requirements.length.met ? (
                <CheckCircleFilled style={{ color: "green", marginRight: 8 }} />
              ) : (
                <CloseCircleFilled style={{ color: "red", marginRight: 8 }} />
              )}
              <span style={{ color: requirements.length.color }}>
                Minimum 8 characters
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: 5 }}
            >
              {requirements.uppercase.met ? (
                <CheckCircleFilled style={{ color: "green", marginRight: 8 }} />
              ) : (
                <CloseCircleFilled style={{ color: "red", marginRight: 8 }} />
              )}
              <span style={{ color: requirements.uppercase.color }}>
                At least one uppercase letter
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: 5 }}
            >
              {requirements.lowercase.met ? (
                <CheckCircleFilled style={{ color: "green", marginRight: 8 }} />
              ) : (
                <CloseCircleFilled style={{ color: "red", marginRight: 8 }} />
              )}
              <span style={{ color: requirements.lowercase.color }}>
                At least one lowercase letter
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: 5 }}
            >
              {requirements.number.met ? (
                <CheckCircleFilled style={{ color: "green", marginRight: 8 }} />
              ) : (
                <CloseCircleFilled style={{ color: "red", marginRight: 8 }} />
              )}
              <span style={{ color: requirements.number.color }}>
                At least one number
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: 5 }}
            >
              {requirements.specialChar.met ? (
                <CheckCircleFilled style={{ color: "green", marginRight: 8 }} />
              ) : (
                <CloseCircleFilled style={{ color: "red", marginRight: 8 }} />
              )}
              <span style={{ color: requirements.specialChar.color }}>
                At least one special character (e.g., @, #, $, etc.)
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
