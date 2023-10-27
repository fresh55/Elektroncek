"use client";

import { Loader2 } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useContext, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AiOutlineGoogle } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { signIn,getSession } from "next-auth/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BiConfused } from "react-icons/bi";
import { useRouter } from "next/navigation";

import getCurrentUser from "@/app/actions/getCurretUser";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    signIn("credentials", {
      email: data.email.toLowerCase(),
      password: data.password,
      redirect: false,
    }).then(async (callback) => {
      setIsLoading(false);
      if (callback?.error) {
        setServerMessage(callback.error);
      } else {
        router.push("/");
      }
    }

    ).catch((error) => {
      console.error("SignIn error:", error);
  });
    };

  return (
    <div className="grid gap-6">
      {serverMessage && (
        <Alert variant="destructive">
          <AlertTitle>Pozor</AlertTitle>
          <BiConfused></BiConfused>

          <AlertDescription>
            Vaše uporabniško ime ali geslo je napačno
          </AlertDescription>
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1 ">
            <Label htmlFor="email">Uporabnisko Ime</Label>
            <Input
              id="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email", { required: true })}
            />
            <div className="mb-2">
              {errors.email?.type === "required" && (
                <p className="px-1 text-xs text-red-600">Email je obvezen </p>
              )}
            </div>
            <Label>Geslo</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password", { required: true })}
            />
            <div className="mb-2">
              {errors.password?.type === "required" && (
                <p className="px-1 text-xs text-red-600">Geslo je obvezno </p>
              )}
            </div>
          </div>
          <Button
            className="bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-700 hover:to-sky-600 hover:shadow-sm"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Prijava
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Nadaljuj raje z
          </span>
        </div>
      </div>
      <Button disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        <AiOutlineGoogle size={20} /> <p className="ml-3">Google</p>
      </Button>

      <Button disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

        <FiFacebook size={20} />
        <p className="ml-3">Facebook</p>
      </Button>
    </div>
  );
};

export default LoginForm;

function setCurrentProfile(user: any) {
  throw new Error("Function not implemented.");
}
