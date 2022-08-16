type Props = {
  currentFloorNumber: number;
  numberElevator: number;
  numberFloors: number;
  elevatorOutsideButtonDataToElevator?: (
    elevatorOutsideButtonDataValue: number,
    direction: string
  ) => void;
};

const ButtonsOutside = ({
  numberElevator,
  numberFloors,
  elevatorOutsideButtonDataToElevator,
}: Props) => {
  return (
    <div className="arrow-buttons">
      <button
        value={numberElevator}
        className="button-elevator-outside"
        disabled={numberElevator === numberFloors - 1 ? true : false}
        style={
          numberElevator === numberFloors - 1 ? { cursor: "not-allowed" } : {}
        }
        onClick={(e) => {
          e.preventDefault();
          const elevatorOutsideButtonValue: number = parseInt(
            (e.currentTarget as HTMLInputElement).value
          );
          console.log(elevatorOutsideButtonValue);
          elevatorOutsideButtonDataToElevator?.(elevatorOutsideButtonValue, "up");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-button"
          viewBox="0 0 512 512"
        >
          <title>Caret Up</title>
          <path
            fill={numberElevator === numberFloors - 1 ? "gray" : "white"}
            d="M414 321.94L274.22 158.82a24 24 0 00-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62z"
          />
        </svg>
      </button>
      <button
        value={numberElevator}
        className="button-elevator-outside"
        disabled={numberElevator === 0 ? true : false}
        style={numberElevator === 0 ? { cursor: "not-allowed" } : {}}
        onClick={(e) => {
          e.preventDefault();
          const elevatorOutsideButtonValue: number = parseInt(
            (e.currentTarget as HTMLInputElement).value
          );
          elevatorOutsideButtonDataToElevator?.(elevatorOutsideButtonValue, "down");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-button"
          viewBox="0 0 512 512"
        >
          <title>Caret Down</title>
          <path
            fill={numberElevator === 0 ? "gray" : "white"}
            d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonsOutside;
