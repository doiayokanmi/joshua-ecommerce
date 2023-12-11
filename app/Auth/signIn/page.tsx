"use client";

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
        <p className="text-center text-sm py-2">
          Unlock deals and effortless shopping. Log in for exclusive offers and
          secure transactions. Elevate your online experience with confidence in
          a click.
        </p>

        <div className="w-full border-2 mt-4 rounded p-4">
          <h1 className="text-primary text-center pb-4 font-bold">
            Login Account
          </h1>

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
