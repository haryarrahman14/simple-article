import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

export function TooltipContentDisabled({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>
            Sorry, this content is still disabled because <br /> it is outside
            the scope of work
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
