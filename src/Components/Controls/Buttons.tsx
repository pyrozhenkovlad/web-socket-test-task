import Button from "./Button";

interface ButtonsProps {
  start: () => void;
  stop: () => void;
  clear: () => void;
}

const buttonsList = [
  {
    title: "Start",
    color: "bg-green-500",
    onClick: (props: ButtonsProps) => props.start,
  },
  {
    title: "Stop",
    color: "bg-red-500",
    onClick: (props: ButtonsProps) => props.stop,
  },
  {
    title: "Clear",
    color: "bg-orange-500",
    onClick: (props: ButtonsProps) => props.clear,
  },
];

const Buttons = (props: ButtonsProps) => {
  return (
    <div className="flex justify-between">
      {buttonsList.map((button, i) => (
        <Button
          key={i}
          title={button.title}
          color={button.color}
          onClick={button.onClick(props)}
        />
      ))}
    </div>
  );
};

export default Buttons;
