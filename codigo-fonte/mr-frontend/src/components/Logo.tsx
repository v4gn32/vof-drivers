import { ClipboardCheck } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo = ({ size = 'medium' }: LogoProps) => {
  const sizes = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl'
  };

  const iconSizes = {
    small: 18,
    medium: 24,
    large: 32
  };

  return (
    <div className="flex items-center gap-2">
      <ClipboardCheck size={iconSizes[size]} className="text-blue-600" />
      <span className={`font-bold ${sizes[size]} text-gray-900`}>MRecursiva</span>
    </div>
  );
};

export default Logo;