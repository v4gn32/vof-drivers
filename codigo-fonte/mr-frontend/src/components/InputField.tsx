import { forwardRef, InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, id, ...props }, ref) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between">
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          {props.type === 'password' && props.name === 'password' && (
            <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
              Esqueceu a senha?
            </a>
          )}
        </div>
        <input
          ref={ref}
          id={id}
          className={`block w-full px-3 py-2 border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;