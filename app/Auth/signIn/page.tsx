"use client";

import AuthLayout from "@/app/components/layout/AuthLayout";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { client } from "@/util";
import { Checkbox, Link } from "@nextui-org/react";
import { LockIcon, LogInIcon, User } from "lucide-react";
import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

const Page = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [errorMsg, setErrorMsg] = React.useState<string>("");
  const [success, setSuccess] = React.useState<boolean>(false);
  const [rememberMe, setRememberMe] = React.useState<boolean>(false);
  const router = useRouter()

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username/email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      handleLogIn(values);
    },
  });

  const handleLogIn = async (values: any) => {
    setLoading(true)
    const userExists = await client.fetch(`*[_type == 'users' && (lower(email) == $username || lower(username) == $username) && password == $password]`, {
      username: (values.username).toLowerCase(),
      password: values.password,
    });
    setLoading(false)
    if (userExists.length != 0) {
      setIsError(false);
      window.sessionStorage.setItem("user", JSON.stringify(userExists[0]));
     router.push('/')
    } else {
      setIsError(true);
      setErrorMsg("Invalid username and/or password");
    }

  }
  return (
    <>
      <div className="relative">
      
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

            {
              isError && <div className="mb-4 text-white rounded p-4 bg-warning">
                {errorMsg}
              </div>
            }

            {formik.touched.username && formik.errors.username && (
              <div className="text-danger text-xs">{formik.errors.username}</div>
            )}
            <Input
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="username"
              isPassword={false}
              placeholder="Username"
              icon={<User />}
            />

            {formik.touched.password && formik.errors.password && (
              <div className="text-danger text-xs">{formik.errors.password}</div>
            )}
            <Input
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              isPassword={true}
              placeholder="Password"
              icon={<LockIcon />}
            />

            <div className="flex justify-between mb-4 text-xs items-center">
              <Checkbox color="default">Remember me</Checkbox>
              <Link href={"/Auth/forget"}>Forget password?</Link>
            </div>
            {
              loading ?
                <div className="flex justify-center">
                  <CircularProgress />
                </div>
                :
                <Button
                  func={formik.handleSubmit}
                  title={"Sign in"}
                  icon={<LogInIcon className="mr-2" />}
                />
            }

            <Link
              className="text-sm flex justify-end w-full"
              href={"/Auth/register"}
            >
              Not yet a member? register here.
            </Link>
          </div>
        </AuthLayout>
      </div>
    </>
  );
};

export default Page;
