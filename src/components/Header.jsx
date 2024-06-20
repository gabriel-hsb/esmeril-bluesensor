import BlueCircle from "@/assets/blue-circle.svg?react";
import { ModeToggle } from "./ui/mode-toggle";

const Header = () => {
  return (
    <header className="flex justify-between px-6">
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
