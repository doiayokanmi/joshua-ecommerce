"use client";

import { Eye, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";

interface Props {
  placeholder: string;
  isPassword: boolean;
}

const Input = ({ placeholder, isPassword }: Props) => {
  const [changeType, setChangeType] = useState(true);
  return (
    <>
      <div className="w-full relative mb-4">
        <input
          type={`${isPassword && changeType ? "password" : "text"}`}
          className="p-2 w-full border focus:outline-0 border-l-4 border-l-primary bg-gray-100"
          placeholder={placeholder}
        />

        {isPassword && (
          <div
            onClick={() => setChangeType(!changeType)}
            className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"
          >
            {changeType ? <Eye size={12} /> : <EyeOffIcon size={12} />}
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
