'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { SignUpSchema } from '@/app/types';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signUp } from '@/app/actions/auth.actions';

export function SignUpForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    console.log(values);
    const res = await signUp(values);
    if (res.error) {
      toast({
        variant: 'destructive',
        description: res.error,
      });
    } else if (res.success) {
      toast({
        variant: 'default',
        description: 'Account successfully created.',
      });
      router.push('/dashboard');
    }
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="coolpeter123" {...field} />
                </FormControl>
                <FormDescription>Enter here your username. Once set, it cannot be changed.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="****" type="password" {...field} />
                </FormControl>
                <FormDescription>Choose a secure password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input placeholder="****" {...field} />
                </FormControl>
                <FormDescription>Retype the password you&apos;ve chosen before here.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <span className="text-gray-500 ">By continuing, you accept our</span>
            <Link className="ml-1 text-gray-700" href="/terms">
              Terms of Service
            </Link>
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </Form>
    </>
  );
}
