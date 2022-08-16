import { useState } from "react";

type Props = {
    NumberOfFloorsData?: (floors: number) => void;
};

const NumberOfFloors = ({ NumberOfFloorsData }: Props) => {
  const handleSubmit  = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const inputValue: number = parseInt(
      (e.currentTarget[0] as HTMLInputElement).value
    );
    NumberOfFloorsData?.(inputValue);
    
  };
  

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form-elevator">
      <label htmlFor="number-floors">Number of floors</label>
      <div>
        <input
          type="number"
          name="number-floors"
          id="number-floors"
          required
          min="2"
          max="6"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NumberOfFloors;
