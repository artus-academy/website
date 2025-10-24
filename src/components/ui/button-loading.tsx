import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "./button";

type ButtonLoadingProps = ButtonProps & {
  loading: boolean;
};

export default function ButtonLoading({
  loading,
  disabled,
  children,
  ...props
}: ButtonLoadingProps) {
  return (
    <Button {...props} disabled={disabled || loading}>
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        children
      )}
    </Button>
  );
}
