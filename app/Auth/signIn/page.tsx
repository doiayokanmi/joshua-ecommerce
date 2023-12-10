'use client'

import AuthLayout from "@/app/components/layout/AuthLayout";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { Avatar, Checkbox, Link } from "@nextui-org/react";
import { LockIcon, LogInIcon, User2Icon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <AuthLayout>
        <Avatar showFallback className="w-20 mb-4 h-20 rounded-full" />
        <h1 className="text-primary font-bold">Login Account</h1>
        <p className="text-center text-sm py-2">
          Unlock deals and effortless shopping. Log in for exclusive offers and
          secure transactions. Elevate your online experience with confidence in
          a click.
        </p>

        <div className="w-full py-4">
          <Input
            placeholder="Enter your username or email"
            isPassword={false}
            icon={<User2Icon />}
          />
          <Input
            placeholder="Enter your password"
            isPassword={true}
            icon={<LockIcon />}
          />

          <div className="flex justify-between mb-4 text-xs items-center">
            <Checkbox color="default">Remember me</Checkbox>
            <Link href={"/Auth/forget"}>Forget password?</Link>
          </div>

          <Button
            func={() => {}}
            title={"Sign in"}
            icon={<LogInIcon className="mr-2" />}
          />

          <Link
            className="text-sm flex justify-end w-full"
            href={"/Auth/register"}
          >
            Not yet a member? register here.
          </Link>
        </div>
      </AuthLayout>
    </>
  );
};

export default page;
