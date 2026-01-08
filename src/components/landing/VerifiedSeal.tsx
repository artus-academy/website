import { BadgeCheck, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerifiedSealProps {
  className?: string;
  type: "primary" | "secondary" | "error";
}

const VerifiedSeal = ({ className, type }: VerifiedSealProps) => {
  const borderColors = {
    primary: "border-primary",
    secondary: "border-secondary",
    error: "border-destructive",
  };

  const textColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    error: "text-destructive",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        borderColors[type],
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center border border-dashed p-1 rounded-md",
          borderColors[type]
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center border border-dashed p-2 rounded-md gap-x-1.5 font-medium text-md",
            borderColors[type]
          )}
        >
          <BadgeCheck className={cn(textColors[type])} />{" "}
          <span className={cn(textColors[type])}>Industry Verified</span>
        </div>
      </div>
    </div>
  );
};

export default VerifiedSeal;
