import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import { ShoppingCart, UserIcon, EllipsisVertical } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <div className="space-x-2">
          <ModeToggle />
          <Button variant="ghost">
            <ShoppingCart /> Cart
          </Button>
          <Button>
            <UserIcon /> Sign In
          </Button>
        </div>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button variant="ghost">
              <ShoppingCart /> Cart
            </Button>
            <Button>
              <UserIcon /> Sing In
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
