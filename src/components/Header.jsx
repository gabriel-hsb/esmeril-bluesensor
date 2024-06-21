import BlueCircle from "@/assets/blue-circle.svg?react";
import { ModeToggle } from "./ui/mode-toggle";

const Header = () => {
  return (
    <header className="mx-auto flex h-20 max-w-[75rem] items-center justify-between px-3 sm:px-6">
      <div className="animate-spin-entrance">
        <BlueCircle />
      </div>
      <div>
        <h1 className="text-center text-xl font-bold">
          Especificação de Motoesmeril NR12
        </h1>
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
