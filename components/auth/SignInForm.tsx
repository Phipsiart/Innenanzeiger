"use client"

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { SignInSchema } from "@/app/types"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signIn } from "@/app/actions/auth.actions"

export  function SignInForm(){
    const router = useRouter();
    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
          username: "",
          password:"",
        },
      })
     
     async  function onSubmit(values: z.infer<typeof SignInSchema>) {
        console.log(values)
         const res = await signIn(values)
         if(res.error ){
            toast({
                variant: 'destructive',
                description: res.error
            })
         } else if (res.success){
            toast({
                variant: 'default',
            description: 'Signed in successfully.'
            })
            router.push('/dashboard')
         }
      }
    return(
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
              <FormMessage />
            </FormItem>
          )}
        />
      
<div>
<span className="text-gray-500 ">By continuing, you accept our</span><Link className="ml-1 text-gray-700" href="/terms">Terms of Service</Link>

</div>
        <Button type="submit" className="w-full">Sign In</Button>
      </form>
    </Form>
    </>
    )
}