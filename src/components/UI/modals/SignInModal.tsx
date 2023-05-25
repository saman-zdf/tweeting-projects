"use client";
import { FC, useState } from "react";
import { Input } from "../input";
import { TweetAPI } from "@/lib/axios";
import { store } from "@/redux";
import { setUser } from "@/redux/userSlice";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSignInSchema } from "@/validation/UserInfoValidation";
import { Button } from "../button";
import { Loader2, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { localStorageSetItem } from "@/utils/windowStorages/Storages";

const SignInModal: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof userSignInSchema>>({
    resolver: zodResolver(userSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof userSignInSchema>) => {
    setLoading(true);

    const payload = {
      email: values.email,
      password: values.password,
    };

    TweetAPI.post("/login", payload)
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
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  };

  return (
    <Dialog>
      <DialogTrigger className='py-2 px-6 rounded-md m-2 bg-blue-400 text-whit hover:bg-blue-500 hover:opacity-80'>
        Sign In
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign In to your account</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className='space-y-8'
          >
            <DialogDescription>
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
            </DialogDescription>
            <DialogFooter>
              <Button
                type='submit'
                className='bg-blue-500 text-white hover:bg-blue-500 hover:opacity-80'
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
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
