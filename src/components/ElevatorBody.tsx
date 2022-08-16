import { useEffect, useState } from "react";
import ButtonElevator from "./ButtonElevator";

type Props = {
  currentFloorNumber: number;
  arrNumberFloors: number[];
  numberElevator: number;
  elevatorButtonDataToElevator?: (elevatorButtonDataValue: number) => void;
};

const ElevatorBody = ({
  currentFloorNumber,
  arrNumberFloors,
  numberElevator,
  elevatorButtonDataToElevator
}: Props) => {

  const elevatorButtonDataToElevatorBody = (elevatorButtonDataValue: number) => {
    elevatorButtonDataToElevator?.(elevatorButtonDataValue);
  }

  return (
    <div
      className="body-elevator"
      style={
        currentFloorNumber === numberElevator
          ? { backgroundColor: "#0f766e" }
          : {}
      }
    >
      <p className="elevator-number">{numberElevator}</p>
      {currentFloorNumber === numberElevator && (
        <div className="elevator-buttons">
          {arrNumberFloors?.map((i) => {
            return <ButtonElevator key={i} id={i} elevatorButtonDataToElevatorBody={elevatorButtonDataToElevatorBody} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ElevatorBody;
