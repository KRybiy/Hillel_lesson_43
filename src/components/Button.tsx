import ButtonPropsInterface from "../type/ButtonProps.Interface";

const Button = ({children, ...props}: Partial<ButtonPropsInterface>) => {
  return (
    <button {...props} className="button">
      {children}
    </button>
  );
};

export default Button;
