type Props = {
  currentFloorNumber: number;
  going: string;
};

const ElevatorBody = ({ currentFloorNumber, going }: Props) => {
  return (
    <div className="body-elevator">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-going"
        viewBox="0 0 512 512"
        onClick={(e) => {
          e.preventDefault();
          
        }}
      >
        <title>Caret Up</title>
        <path
          fill={`${going === "up" ? "red" : "white"}`}
          d="M414 321.94L274.22 158.82a24 24 0 00-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62z"
        />
      </svg>

      <p>{currentFloorNumber}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-going"
        viewBox="0 0 512 512"
        onClick={() => {
          console.log("abajo");
        }}
      >
        <title>Caret Down</title>
        <path
          fill={`${going === "down" ? "red" : "white"}`}
          d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
        />
      </svg>
    </div>
  );
};

export default ElevatorBody;
