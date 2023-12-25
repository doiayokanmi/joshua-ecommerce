"use client";

import { Eye, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";

interface Props {
  placeholder: string;
  value: string;
  name: string;
  isPassword: boolean;
  icon: JSX.Element;
  onChange: (e) => void;
  onBlur: (e)=>void;
}


const Input = ({ placeholder, isPassword, name, icon, onChange, value, onBlur }: Props) => {
  const [changeType, setChangeType] = useState(true);
  return (
    <>
      <div className="w-full ps-2 bg-gray-100 flex items-center border-l-4 border-l-primary relative mb-4">
        {icon}
        <input
          type={`${isPassword && changeType ? "password" : "text"}`}
          className="p-2 w-full outline-0 focus:outline-0 bg-gray-100"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />

        {isPassword && (
          <div
            onClick={() => setChangeType(!changeType)}
            className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"
          >
            {changeType ? <Eye /> : <EyeOffIcon />}
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
