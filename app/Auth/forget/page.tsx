'use client'

import AuthLayout from "@/app/components/layout/AuthLayout";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { SendIcon, User } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <AuthLayout>
        <h1 className="my-4 text-sm text-center">
          Lost your way? The Forgot Password page is your guide to reclaiming
          access. Follow the prompts, secure your account, and continue your
          digital journey with confidence and ease.
        </h1>
        <Input
          isPassword={false}
          placeholder="Enter your username or email"
          icon={<User />}
        />

        <Button
          title={"Send Verification Code"}
          icon={<SendIcon className="mr-2" />}
          func={()=>{ }}
        />
      </AuthLayout>
    </>
  );
};

export default page;
