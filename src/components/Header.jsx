import BlueCircle from "@/assets/blue-circle.svg?react";
import { ModeToggle } from "./ui/mode-toggle";

const Header = () => {
  return (
    <header className="mx-auto flex h-20 max-w-[75rem] items-center justify-between px-6">
      <div>
        <BlueCircle className="" />
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
