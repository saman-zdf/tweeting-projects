"use client";

import { FC, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";
import { Button } from "../button";
import { TweetAPI } from "@/lib/axios";
import { store } from "@/redux";
import { useRouter } from "next/navigation";
import { localStorageSetItem } from "@/utils/windowStorages/Storages";
import { setUser } from "@/redux/userSlice";
import { useForm } from "react-hook-form";
import { userRegisterSchema } from "@/validation/UserInfoValidation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "../dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/Form";
import { Loader2, Mail } from "lucide-react";

const RegisterModal: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { reset } = useForm();
  const form = useForm<z.infer<typeof userRegisterSchema>>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof userRegisterSchema>) => {
    setLoading(true);
    const payload = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    TweetAPI.post("/register", payload)
      .then((res) => {
        const userRes = res.data;
        const { token, user } = userRes;
        const userObjectToSet = {
          id: user.id,
          username: user.username,
          email: user.email,
          token: token,
          role: user.role,
        };
        store.dispatch(setUser(userObjectToSet));
        localStorageSetItem("user", userObjectToSet);
        router.push("/");
        reset();
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <Dialog>
      <DialogTrigger className='bg-white text-black py-2 px-6 rounded-md m-2 hover:opacity-80 transition'>
        Register
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create your account</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className='space-y-8'
          >
            <DialogDescription>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter create a username'
                        {...field}
                        type='text'
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <br />
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
                        type='email'
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <br />
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
              <br />
              <FormField
                control={form.control}
                name='passwordConfirmation'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password Confirmation</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Confirm your password'
                        {...field}
                        type='password'
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </DialogDescription>
            <DialogFooter>
              <Button
                type='submit'
                className='bg-white text-black hover:opacity-80'
              >
                {loading ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    <span>Please wait</span>
                  </>
                ) : (
                  <>
                    <span>Register</span>
                  </>
                )}
              </Button>
              <DialogClose asChild>
                <Button type='submit' variant='outline' onClick={() => reset()}>
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
