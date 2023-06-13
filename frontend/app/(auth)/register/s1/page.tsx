import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Logo from "@/components/Logo"
import  RegisterForm  from "@/components/RegisterForm"
export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
}

export default function RegisterStep1() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
    
      <div className="relative hidden h-full lg:block ">
        <Image src="https://images.unsplash.com/photo-1567454712351-1cba6639242d"  alt="Bled" fill={true} />
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="flex items-center justify-center mb-3">
            <Link
            href="/"
            className="flex h-9 items-center gap-2 rounded-xl px-2"
    >
      <Logo  />
    </Link>
          </div>
           
            <h1 className="text-2xl font-semibold tracking-tight">
              Ustvari Račun
            </h1>
            <p className="text-sm text-muted-foreground">
              Najprej izberite
            </p>
          </div>
          <RegisterForm/>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}