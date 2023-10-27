"use client";
import SelectMesto from "@/components/SelectMesto";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User } from "@/types";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { updateUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, Facebook, Instagram } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/ImageUpload";

type Props = {
  user: User;
};
const formSchema = z
  .object({
    ime: z.string().optional(),
    priimek: z.string().optional(),
    mesto: z.string(),
    avatar: z.string(),
    facebookLink: z.union([z.string().url(), z.literal("")]).optional(),
    instagramLink: z.union([z.string().url(), z.literal("")]).optional(),
    bio: z
      .string()
      .max(256, "Opis je predolg! Prosimo,uporabite manj kot 256 znakov.")
      .optional(),
  })
  .refine(
    (data) => {
      if (data.ime && !data.priimek) {
        return false;
      }
      return true;
    },
    {
      message: "Prosimo, izpolnite obe polji: ime in priimek.",
      path: ["priimek"],
    }
  )
  .refine(
    (data) => {
      if (data.priimek && !data.ime) {
        return false;
      }
      return true;
    },
    {
      message: "Prosimo, izpolnite obe polji: ime in priimek.",
      path: ["ime"],
    }
  );
export const ProfileForm: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ime: user.ime || "",
      priimek: user.priimek || "",
      mesto: user.mesto || "",
      bio: user.bio || "",
      avatar: user.avatar || "",
      facebookLink: user.facebookLink || "",
      instagramLink: user.instagramLink || "",
    },
  });

  const mestoValue = watch("mesto");
  const imageValue = watch("avatar");

  async function onSubmit({
    ime,
    priimek,
    mesto,
    bio,
    avatar,
    facebookLink,
    instagramLink,
  }: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await updateUser(
        user.id,
        ime,
        priimek,
        mesto,
        bio,
        avatar,
        instagramLink,
        facebookLink
      );
      router.refresh();
    } catch (error) {
      console.error("Failed to update user:", error);
      // Show error message to the user
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Osnovni podatki</CardTitle>
        <CardDescription>
          Vpišite zgolj podatke, ki jih želite deliti z ostalimi. Podatki niso
          obvezni, vendar močno priporočljivi."
        </CardDescription>
      </CardHeader>
      <Separator className="mb-2" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center p-6">
          <Label htmlFor="avatar">Prikazana slika</Label>
          <ImageUpload
            onChange={(value) => {
              setValue("avatar", value);
            }}
            value={imageValue}
          />
          <span className="text-sm opacity-70 mt-2">
            Kliknite na avatar, da naložite svojega.
          </span>
        </div>
        <Separator className="my-2" />
        <div className="flex w-full gap-6 px-6">
          <div className="w-1/2">
            <Label htmlFor="ime">Ime</Label>
            <Input id="ime" placeholder={user.ime} {...register("ime")} />
            {errors.ime && (
              <span className="text-red-500 text-xs">{errors.ime.message}</span>
            )}
          </div>
          <div className="w-1/2">
            <Label htmlFor="priimek">Priimek</Label>
            <Input
              placeholder={user.priimek}
              id="priimek"
              {...register("priimek")}
            />
            {errors.priimek && (
              <span className="text-sm text-red-700">
                {errors.priimek.message}
              </span>
            )}
          </div>
        </div>
        <span className="text-sm opacity-70 px-6">
          Vnesite svoje ime in priimek
        </span>
        <Separator className="my-2" />
        {/* TODO : SELECT PRAZNO MESTO, MOGOČE TUDI CHECKBOX DA OZNAČI DA NE ŽELI PRIKAZAT KRAJA */}
        <div className="overflow-hidden px-6">
          <Label htmlFor="mesto">Mesto</Label>
          <SelectMesto
            id="mesto"
            onChange={(value) => {
              setValue("mesto", value);
            }}
            value={mestoValue}
          />
        </div>
        <span className="text-sm opacity-70 px-6">
          Vnesite mesto prebivanja
        </span>
        <Separator className="my-4" />
        <div className="px-6">
          <Label htmlFor="bio">Socialna omrežja</Label>
          <div className="relative group mb-3 ">
            <Input
              placeholder="https://www.facebook.com/"
              id="fb_url"
              className="pl-10 group-hover:border-blue-500 group-focus:border-blue-500 "
              {...register("facebookLink")}
            />
            <Facebook className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 stroke-blue-500" />
          </div>
          <div className="relative group ">
            <Input
              placeholder="https://www.instagram.com/"
              id="fb_url"
              className="pl-10 group-hover:border-rose-500 group-focus:border-rose-500 "
              {...register("instagramLink")}
            />
            <Instagram className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 stroke-rose-500" />
          </div>
          <span className="text-sm opacity-70">
            Dodaj svoja socialna omrežja
          </span>
        </div>
        <Separator className="my-4" />
        <div className="px-6">
          <Label htmlFor="bio">Kratek opis</Label>
          <Textarea
            id="Opis"
            className="resize-none h-auto"
            placeholder={user.bio}
            {...register("bio")}
          />
          {errors.bio && (
            <span className="text-sm text-red-700">{errors.bio.message}</span>
          )}
        </div>
        <span className="text-sm opacity-70 px-6">
          Vnesite kratek opis sebe
        </span>

        <CardFooter className="border-secondary bg-secondary flex justify-end rounded-b-lg border-t p-3 mt-3">
          <Button disabled={isLoading} type="submit">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Shrani
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
