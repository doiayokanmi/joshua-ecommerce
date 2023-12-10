import AuthLayout from "@/app/components/layout/AuthLayout";
import Input from "@/app/components/ui/Input";
import { Avatar, Checkbox, Link } from "@nextui-org/react";
import { LogInIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <AuthLayout>
        <Avatar showFallback className="w-20 mb-4 h-20 rounded-full" />
        <h1 className="text-primary font-bold">Login Account</h1>
        <p className="text-center text-sm py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          tempore exercitationem incidunt quas enim quos dolore explicabo
          distinctio.
        </p>

        <div className="w-full py-4">
          <Input placeholder="Username or email" isPassword={false} />
          <Input placeholder="Password" isPassword={true} />

          <div className="flex justify-between mb-4 text-xs items-center">
          <Checkbox color="default">Remember me</Checkbox>
          <Link href={'#'}>Forget password?</Link>
          </div>

          <button className="bg-primary w-full flex justify-center items-center text-white p-2">
            <LogInIcon className="mr-2" /> Signin
          </button>
        </div>
      </AuthLayout>
    </>
  );
};

export default page;
