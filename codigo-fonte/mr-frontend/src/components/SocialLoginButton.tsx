import { ButtonHTMLAttributes, ReactNode } from 'react';

interface SocialLoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon: ReactNode;
}

const SocialLoginButton = ({ children, icon, ...props }: SocialLoginButtonProps) => {
  return (
    <button
      className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default SocialLoginButton;