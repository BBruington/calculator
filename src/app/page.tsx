"use client";
import { useState } from "react";
const calculator = [
  { value: "7", type: "number" },
  { value: "8", type: "number" },
  { value: "9", type: "number" },
  { value: "+", type: "operator" },
  { value: "4", type: "number" },
  { value: "5", type: "number" },
  { value: "6", type: "number" },
  { value: "-", type: "operator" },
  { value: "1", type: "number" },
  { value: "2", type: "number" },
  { value: "3", type: "number" },
  { value: "*", type: "operator" },
  { value: "0", type: "number" },
  { value: "/", type: "operator" },
  { value: "=", type: "equals" },
  { value: "C", type: "clear" },
];
interface input {
  value: string;
  type: string;
}

export default function Home() {
  const [firstValue, setFirstValue] = useState("");
  const [operator, setOperator] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const calculatorInput = `${firstValue} ${operator} ${secondValue}`;
  const calculateSolution = () => {
    if (operator === "+")
        setFirstValue((Number(firstValue) + Number(secondValue)).toString());
      if (operator === "-")
        setFirstValue((Number(firstValue) - Number(secondValue)).toString());
      if (operator === "*")
        setFirstValue((Number(firstValue) * Number(secondValue)).toString());
      if (operator === "/")
        setFirstValue((Number(firstValue) / Number(secondValue)).toString());
      setSecondValue("");
      setOperator("");
      return;
  }
  const handleCalculatorInput = (name: input) => {
    if (name.type === "equals") {
      calculateSolution();
    }
    if (name.type === "clear") {
      setFirstValue("");
      setSecondValue("");
      setOperator("");
      return;
    }
    if (name.type === "operator" && firstValue !== "") {
      if(operator !== '' && secondValue !== '') calculateSolution()
      setOperator(name.value);
      return;
    }
    if (name.type === "number") {
      if (operator === "") {
        setFirstValue(firstValue + name.value);
        return;
      } else {
        setSecondValue(secondValue + name.value);
      }
    }
  };
  return (
    <main className="flex flex-col items-center m-10">
      <input
        className="text-black justify-center text-center"
        value={calculatorInput}
        readOnly
      />
      <div className="grid grid-cols-4">
        {calculator.map((name, index) => (
          <button
            onClick={() => handleCalculatorInput(name)}
            className="w-8 bg-slate-600 m-2"
            key={index}
          >
            {name.value}
          </button>
        ))}
      </div>
    </main>
  );
}
