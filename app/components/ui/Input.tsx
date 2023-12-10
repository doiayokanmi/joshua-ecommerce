"use client";

import { Eye, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";

interface Props {
  placeholder: string;
  isPassword: boolean;
  icon: JSX.Element;
}


const Input = ({ placeholder, isPassword, icon }: Props) => {
  const [changeType, setChangeType] = useState(true);
  return (
    <>
      <div className="w-full ps-2 bg-gray-100 flex items-center border-l-4 border-l-primary relative mb-4">
        {icon}
        <input
          type={`${isPassword && changeType ? "password" : "text"}`}
          className="p-2 w-full focus:outline-0 bg-gray-100"
          placeholder={placeholder}
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
