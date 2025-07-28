import { ReactNode } from 'react';
import Logo from './Logo';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left section with branding and features */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <Logo size="large" />
          
          <div className="mt-8 mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h1>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>

          <div className="space-y-6">
            <FeatureItem 
              title="Avaliação Estruturada"
              description="Critérios organizados em quatro eixos principais para uma análise completa."
              icon="clipboard-list"
            />
            <FeatureItem 
              title="Colaboração"
              description="Trabalhe com outros especialistas para melhorar a qualidade dos objetos de aprendizagem."
              icon="users"
            />
            <FeatureItem 
              title="Fundamentação Pedagógica"
              description="Base epistemológica construtivista para uma análise educacional abrangente."
              icon="book-open"
            />
          </div>
        </div>
      </div>

      {/* Right section with form */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full text-center text-gray-500 text-sm">
        © 2023 Recursiva. Todos os direitos reservados.
      </div>
    </div>
  );
};

const FeatureItem = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  const getIcon = () => {
    switch (icon) {
      case 'clipboard-list':
        return (
          <div className="p-2 bg-blue-100 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <path d="M12 11h4" />
              <path d="M12 16h4" />
              <path d="M8 11h.01" />
              <path d="M8 16h.01" />
            </svg>
          </div>
        );
      case 'users':
        return (
          <div className="p-2 bg-blue-100 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
        );
      case 'book-open':
        return (
          <div className="p-2 bg-blue-100 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-start gap-4">
      {getIcon()}
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AuthLayout;