interface ButtonProps {
  title: string;
  onClick: () => void;
  color: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div
      className={`grid place-content-center rounded-lg ${props.color} h-10 w-44 cursor-pointer text-white`}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
};

export default Button;
