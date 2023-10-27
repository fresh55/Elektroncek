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
import { Separator } from "@/components/ui/separator"
import { User } from "@/types";

type Props = {
    user: User;
};


export const UpdateLoginForm: React.FC<Props> = ({ user }) => {
   
    return (



        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Prijavni podatki</CardTitle>
                <CardDescription>Spremenite svoje prijavne podatke.</CardDescription>

            </CardHeader>
            <Separator className="mb-8" />

            <CardContent >
                <div className="space-y-6">
                    <div className="text-sm grid gap-2 md:grid md:grid-cols-12">
                        <div className="flex flex-col space-y-2 col-span-4">
                            <Label className="block text-sm" htmlFor="username">Uporabniško ime</Label>
                        </div>

                        <Input
                            readOnly
                            disabled
                            placeholder={user.userName}
                            id="username"
                            className="col-span-8 shadow-sm disabled:bg-slate-50  disabled:opacity-100"
                        />
                    </div>
                    <div className="text-sm grid gap-2 md:grid md:grid-cols-12">
                        <div className="flex flex-col space-y-2 col-span-4">
                            <Label className="block text-sm" htmlFor="email">Elektronski naslov</Label>
                        </div>

                        <Input
                            readOnly
                            disabled
                            placeholder={user.email}
                            id="email"
                            className="col-span-8 shadow-sm disabled:bg-slate-50  disabled:opacity-100"
                        />
                    </div>





                </div>


            </CardContent>

            <CardFooter className="border-secondary bg-secondary flex justify-end rounded-b-lg border-t p-3">
                <Button>Shrani</Button>
            </CardFooter>
        </Card>

    )

}