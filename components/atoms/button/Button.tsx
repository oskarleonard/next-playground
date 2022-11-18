import classNames from 'classnames';

export const getButtonStyles = (hasIcon?: boolean) =>
  `inline-flex text-black text-12 py-8 bg-transparent items-center hover:border-silver ${
    hasIcon ? 'px-12' : 'px-24'
  }`;

const Button = ({
  className,
  children,
  hasIcon,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(className, getButtonStyles(hasIcon))}
      disabled={disabled}
      {...rest}
    >
      {children ?? children}
    </button>
  );
};

interface ButtonProps {
  className?: string;
  children: any;
  hasIcon?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default Button;
