"use client";

import AuthLayout from "@/app/components/layout/AuthLayout";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { Checkbox } from "@nextui-org/react";
import { Lock, LogInIcon, MailIcon, User } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <AuthLayout>

        <p className="text-center text-sm py-2">
          Unlock deals and effortless shopping. Log in for exclusive offers and
          secure transactions. Elevate your online experience with confidence in
          a click.
        </p>

        <div className="w-full border-2 mt-4 rounded p-4">
        <h1 className="text-primary text-center pb-4 font-bold">Register Account</h1>

          <Input isPassword={false} placeholder="Username" icon={<User />} />
          <Input isPassword={false} placeholder="Fullname" icon={<User />} />
          <Input isPassword={false} placeholder="Email" icon={<MailIcon />} />
          <Input isPassword={true} placeholder="Password" icon={<Lock />} />
          <Input
            isPassword={true}
            placeholder="Confirm password"
            icon={<Lock />}
          />
          <Checkbox className="text-xs pb-4" color="primary">
            Click to agree to our privacy policy, and terms & conditions
          </Checkbox>

          <Button
            title={"Register"}
            icon={<LogInIcon className="mr-2" />}
            func={() => {}}
          />
        </div>
      </AuthLayout>
    </>
  );
};

export default page;
