"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/UI/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/Form";
import { Input } from "@/components/UI/input";
import { userSignInSchema } from "@/validation/UserInfoValidation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { Loader2, Mail } from "lucide-react";
import { Result } from "@/lib/types/sign-in-results";
import { useToast } from "../use-toast";

const SignInForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { status, data: session } = useSession();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof userSignInSchema>>({
    resolver: zodResolver(userSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof userSignInSchema>) => {
    setLoading(true);

    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      // TODO: Create helper for dynamic redirect
      // callbackUrl: `/${dynamicRoute(window.location.search)}`,
      callbackUrl: "/",
    })
      .then(() => {
        toast({
          title: "Success!",
          description: "✅ You have successfully signed in!",
        });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <div className='max-w-[400px] mx-auto border border-slate-700 rounded-sm p-4 mt-32'>
      <h3 className='text-xl py-4'>Please Sign In</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your email'
                    {...field}
                    type='text'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your password'
                    {...field}
                    type='password'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            className='bg-blue-500 text-white hover:bg-blue-500 hover:opacity-80 w-full'
          >
            {loading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                <span>Please wait</span>
              </>
            ) : (
              <>
                <Mail className='mr-2 h-4 w-4' />
                <span>Login</span>
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
