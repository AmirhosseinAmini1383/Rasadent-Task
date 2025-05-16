const btnType = {
  primary: "bg-secondary-300 hover:bg-secondary-400",
  secondary: "bg-secondary-150",
  outline: "",
};

function Button({
  children,
  onClick,
  variant = "primary",
  className,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-x-2 text-white mt-6 p-3 rounded-xl transition-all duration-150 ease-in ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
