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
import { cn } from "@/lib/utils";
import { User } from "@/types";
import Slug from "@/components/Shared/Slug"
type Props = {
    user: User;
    className?: string;
};


export const Informations: React.FC<Props> = ({ user,className }) => {
    return (


        <div className={cn("shadow-lg", className)}>
        <Card >
            <CardHeader>
                <CardTitle>Vaši prikazni podatki</CardTitle>
                

            </CardHeader>
            <Separator className="mb-8" />

            <CardContent className="px-8" >
                <div className="space-y-6">
                    
                <Slug
                className="text-scale-1200 text-xl"
          prefix="@"
          slug={user.userName}
          
        />
                    
                        





                </div>
                <Label className="text-scale-500 mb-2 text-md"> {user.ime}</Label>
                            <Label className="text-scale-1200 mb-2 text-md"> {user.priimek}</Label>
                            <Label className="text-scale-1200 mb-2 text-md"> {user.mesto}</Label>
                            <Label className="text-md text-justify break-words"> {user.avatar}</Label>
                            <Label className="text-scale-1200 mb-2 text-md"> {user.bio}</Label>
                            <Label className="text-scale-1200 mb-2 text-md"> {user.facebookLink}</Label>

            </CardContent>


        </Card>
        </div>

    )

}