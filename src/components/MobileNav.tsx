import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500 " />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome to Mr_Vitalii_Food.com</span>
          <Separator />
        </SheetTitle>
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-orange-500">Log in</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
