import { useEffect, useState } from "react";
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

  const [going, setGoing] = useState<string>("");

  const NumberOfFloorsData = (numberFloors: number = 6) => {
    setArrNumberFloors(Array.from(Array(numberFloors).keys()));
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setSelectedFloorsAfter(selectedFloors);
    }, 1500);
    return () => clearTimeout(delay);
  }, [selectedFloors]);

  useEffect(() => {
    if (selectedFloors.length !== 0) {
      selectedFloors
        .sort((a, b): number => {
          if (currentFloorNumber > a) {
            return a - b;
          }
          return b - a;
        })
        .map((floor) => {
          console.log(selectedFloors);
          if (currentFloorNumber !== floor) {
            floor > currentFloorNumber ? setGoing("up") : setGoing("down");
            setCurrentFloor("moving the elevator to floor " + floor);
            const delay = setTimeout(() => {
              setCurrentFloor("You are at floor " + floor);
              setGoing("");
              setCurrentFloorNumber(floor);
              setSelectedFloors(
                selectedFloors.filter((removeFloor) => removeFloor !== floor)
              );
            }, 1500);
            return () => clearTimeout(delay);
          } else {
            setCurrentFloor("You are already at floor " + floor);
          }
        });
    }
  }, [selectedFloorsAfter]);

  return (
    <div className="elevator">
      <h2>There are {numberFloors} floors</h2>
      <NumberOfFloors NumberOfFloorsData={NumberOfFloorsData} />
      <p>{currentFloor}</p>
      <ElevatorBody currentFloorNumber={currentFloorNumber} going={going} />
      {arrNumberFloors?.map((i) => {
        return (
          <button
            key={i}
            className="elevator-button"
            value={i}
            id={`button-${i}`}
            onClick={(e) => {
              e.preventDefault();
              const inputValue: number = parseInt(
                (e.currentTarget as HTMLInputElement).value
              );
              setSelectedFloors((selectedFloors) => [
                ...selectedFloors,
                inputValue,
              ]);
            }}
          >
            {i}
          </button>
        );
      })}
    </div>
  );
};

export default Elevator;
