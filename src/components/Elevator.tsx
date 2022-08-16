import { useEffect, useState } from "react";
import ButtonsOutside from "./ButtonsOutside";
import ElevatorBody from "./ElevatorBody";
import NumberOfFloors from "./NumberOfFloors";

const Elevator = () => {
  const [currentFloor, setCurrentFloor] =
    useState<string>("You are at floor 0");
  const [currentFloorNumber, setCurrentFloorNumber] = useState<number>(0);
  const [arrNumberFloors, setArrNumberFloors] = useState<number[]>(
    Array.from(Array(6).keys())
  );
  const numberFloors: number = arrNumberFloors.length;
  const [selectedFloors, setSelectedFloors] = useState<number[]>([]);
  const [selectedFloorsAfter, setSelectedFloorsAfter] = useState<number[]>([]);

  const NumberOfFloorsData = (numberFloors: number = 6) => {
    setArrNumberFloors(Array.from(Array(numberFloors).keys()));
  };

  const elevatorButtonDataToElevator = (elevatorButtonDataValue: number) => {
    setSelectedFloors((selectedFloors) => [
      ...selectedFloors,
      elevatorButtonDataValue,
    ]);
  };

  const [buttonDirection, setButtonDirection] = useState<string | null>();

  const elevatorOutsideButtonDataToElevator = (
    elevatorOutsideButtonDataValue: number,
    direction: string
  ) => {
    setSelectedFloors((selectedFloors) => [
      ...selectedFloors,
      elevatorOutsideButtonDataValue,
    ]);
    setButtonDirection(direction);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setSelectedFloorsAfter(selectedFloors);
    }, 2000);
    return () => clearTimeout(delay);
  }, [selectedFloors]);

  useEffect(() => {
    if (selectedFloors.length !== 0) {
      selectedFloors
        .sort((a, b): number => {
          if (currentFloorNumber > a || buttonDirection === "down") {
            return a - b;
          } else if(currentFloorNumber < a || buttonDirection === "up") {
            return b - a;
          }
          return b - a;
        })
        .map((floor) => {
          if (currentFloorNumber !== floor) {
            setCurrentFloor("moving the elevator to floor " + floor);
            const delay = setTimeout(() => {
              setCurrentFloor("You are at floor " + floor);
              setCurrentFloorNumber(floor);
              setSelectedFloors(
                selectedFloors.filter((removeFloor) => removeFloor !== floor)
              );
            }, 2000);
            return () => clearTimeout(delay);
          } else {
            setCurrentFloor("You are already at floor " + floor);
          }
        });
    }

    if (selectedFloors.length === 0) {
      setButtonDirection(null);
    }
  }, [selectedFloorsAfter]);

  return (
    <div>
      <h2>There are {numberFloors} floors</h2>
      <NumberOfFloors NumberOfFloorsData={NumberOfFloorsData} />
      <p>{currentFloor}</p>
      <div className="elevator">
        {arrNumberFloors?.map((i) => {
          return (
            <div key={i} className="elevator-floor">
              <ButtonsOutside
                numberFloors={numberFloors}
                numberElevator={i}
                currentFloorNumber={currentFloorNumber}
                elevatorOutsideButtonDataToElevator={
                  elevatorOutsideButtonDataToElevator
                }
              />
              <ElevatorBody
                numberElevator={i}
                currentFloorNumber={currentFloorNumber}
                arrNumberFloors={arrNumberFloors}
                elevatorButtonDataToElevator={elevatorButtonDataToElevator}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Elevator;
