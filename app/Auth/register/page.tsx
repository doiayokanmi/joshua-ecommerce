"use client";

import AuthLayout from "@/app/components/layout/AuthLayout";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { confettiEffect } from "@/app/components/ui/confetti";
import { client } from "@/util";
import { Checkbox } from "@nextui-org/react";
import { Lock, LogInIcon, MailIcon, User } from "lucide-react";
import React from "react";

const Page = () => {
  const [username, setUsername] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cPassword, setCPassword] = React.useState("");
  const [terms, setTerms] = React.useState(false);

  const formData = {
    username,
    fullName,
    email,
    password,
  };

  const handleSubmit = async () => {
    if (terms) {
      try {
        await client.create({
          _type: 'users',
          username,
          password,
          email,
          fullName,
        });
        confettiEffect()
        console.log('Form data:', {
          username,
          password,
          email,
          fullName,
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };


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
            Register Account
          </h1>

          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            isPassword={false}
            placeholder="Username"
            icon={<User />}
          />
          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            isPassword={false}
            placeholder="Full name"
            icon={<User />}
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isPassword={false}
            placeholder="Email"
            icon={<MailIcon />}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isPassword={true}
            placeholder="Password"
            icon={<Lock />}
          />
          <Input
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
            isPassword={true}
            placeholder="Confirm password"
            icon={<Lock />}
          />

          <Checkbox
            onClick={() => setTerms(!terms)}
            className="text-xs my-4"
            color="primary"
          >
            Click to agree to our privacy policy, and terms & conditions
          </Checkbox>

          <Button
            title={"Register"}
            icon={<LogInIcon className="mr-2" />}
            func={handleSubmit}
          />
        </div>
      </AuthLayout>
    </>
  );
};


export default Page;
