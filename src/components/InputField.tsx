import React, { useRef } from "react";
import { PropertyAccessChain } from "typescript";
import "./styles.css";

interface Props {
  availableCards: string;
  setAvailableCards: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({
  availableCards,
  setAvailableCards,
  handleAdd,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
    }}>
      <input
        ref={inputRef}
        type="input"
        value={availableCards}
        onChange={(e) => setAvailableCards(e.target.value)}
        placeholder="Enter somethinng"
        className="input__box"
      />
      <button className="input_submit">Go</button>
    </form>
  );
};
export default InputField;
