import { Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import {ChevronLeft} from "lucide-react"
import Logo from "@/components/Logo"
import LoginForm from "@/components/LoginForm"
import { cn } from "@/lib/utils"
export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Vrni se
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
        <div className="flex items-center justify-center mb-3">
            <Link
            href="/"
            className="flex h-9 items-center gap-2 rounded-xl px-2 mb-3"
    >
      <Logo size={70}/>
    </Link>
          </div>
          <h1 className="text-5xl font-semibold tracking-tight">
            Pozdravljeni,
          </h1>
          <p className="text-sm text-muted-foreground">
            Vnesite svoj elektronski naslov in geslo
          </p>
        </div>
        <LoginForm/>
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Ali še nimate svojega računa?
          </Link>
        </p>
      </div>
    </div>
  )
}