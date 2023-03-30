import React, { useRef } from "react";
import { PropertyAccessChain } from "typescript";
import "./styles.css";

interface Props {
  flightNumber: string;
  setFlightNumber: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({
  flightNumber,
  setFlightNumber,
  handleAdd,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={flightNumber}
        onChange={(e) => {
          e.preventDefault();
          setFlightNumber(e.target.value);
        }}
        placeholder="Enter your flight number (DL1234)"
        className="input__box"
      />

      <button className="input_submit">Go</button>
    </form>
  );
};
export default InputField;
