'use client'

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthLayout from '@/app/components/layout/AuthLayout';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import { confettiEffect } from '@/app/components/ui/confetti';
import { client } from '@/util';
import { CircularProgress } from '@mui/material';
import { Checkbox } from '@nextui-org/react';
import { Lock, LogInIcon, MailIcon, User } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    cPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
      cPassword: '',
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      handleReg(values);
      formik.resetForm();
      setIsSuccess(true);
    },
  });

  const handleReg = async (values: { username: any; fullName: any; email: any; password: any; cPassword?: string; terms: any; }) => {
    if (values.terms) {
      try {
        await client.create({
          _type: 'users',
          username: values.username,
          password: values.password,
          email: values.email,
          fullName: values.fullName,
        });
        confettiEffect();
        setIsLoading(false);
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

          {
            isSuccess && <div className="mb-4 text-white rounded p-4 bg-success">
            Registration successful, proceed to <Link href='/Auth/signIn'>login page</Link> to gain access
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

          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-danger text-xs">{formik.errors.fullName}</div>
          )}
          <Input
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="fullName"
            isPassword={false}
            placeholder="Full name"
            icon={<User />}
          />

          {formik.touched.email && formik.errors.email && (
            <div className="text-danger text-xs">{formik.errors.email}</div>
          )}
          <Input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            isPassword={false}
            placeholder="Email"
            icon={<MailIcon />}
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
            icon={<Lock />}
          />

          {formik.touched.cPassword && formik.errors.cPassword && (
            <div className="text-danger text-xs">{formik.errors.cPassword}</div>
          )}
          <Input
            value={formik.values.cPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="cPassword"
            isPassword={true}
            placeholder="Confirm password"
            icon={<Lock />}
          />

          {formik.touched.terms && formik.errors.terms && (
            <div className="text-danger text-xs">{formik.errors.terms}</div>
          )}
          <Checkbox
            checked={formik.values.terms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="terms"
            className="text-xs mb-4"
            color="primary"
          >
            Click to agree to our privacy policy, and terms & conditions
          </Checkbox>


          <div className="flex justify-center">
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Button
                title={'Register'}
                icon={<LogInIcon className="mr-2" />}
                func={formik.handleSubmit}
              />
            )}
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Page;
