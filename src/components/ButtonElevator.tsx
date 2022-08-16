type Props = {
  id: number;
  elevatorButtonDataToElevatorBody?: (elevatorButtonDataValue: number) => void;
};

const ButtonElevator = ({ id, elevatorButtonDataToElevatorBody }: Props) => {
  return (
    <button
      value={id}
      className="elevator-button"
      onClick={(e) => {
        e.preventDefault();
        const elevatorButtonValue: number = parseInt(
          (e.currentTarget as HTMLInputElement).value
        );
        elevatorButtonDataToElevatorBody?.(elevatorButtonValue);
      }}
    >
      {id}
    </button>
  );
};

export default ButtonElevator;
