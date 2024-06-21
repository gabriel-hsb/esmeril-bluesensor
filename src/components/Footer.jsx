import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="py-2 text-center dark:bg-zinc-950">
      <TooltipProvider>
        feito por{" "}
        <Tooltip>
          <TooltipTrigger>
            <a
              href="http://github.com/gabriel-hsb"
              target="_blank"
              className="underline"
            >
              gabriel-hsb
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <img
              className="max-w-20 py-2"
              src="https://github.com/gabriel-hsb.png"
            />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </footer>
  );
};

export default Footer;
