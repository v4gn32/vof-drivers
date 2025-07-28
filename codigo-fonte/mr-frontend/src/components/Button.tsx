import { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 flex justify-center items-center";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${
        props.disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <Loader2 className="animate-spin h-4 w-4 mr-2 text-current" />
      )}
      {children}
    </button>
  );
};

export default Button;
