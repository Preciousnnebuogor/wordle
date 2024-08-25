import { useState } from "react";

export default function useWordle(solution: any) {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guess, setGuess] = useState([...Array(6)]);
  const [history, setHistory] = useState<string[]>();
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log("formatting the guess -", currentGuess);
    let solutionArray = [...solution];
    let formatedGuess = [currentGuess].map((l) => {
      return { key: l, color: "gray" };
    });
    formatedGuess.forEach((val, i) => {
      if (solutionArray[i] === val.key) {
        formatedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    formatedGuess.forEach((val, i) => {
      if (solutionArray.includes(val.key) && val.color !== "green") {
        formatedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(val.key)] = null;
      }
    });

    return formatedGuess;
  };

  const addNewGuess = (
    formatedGuess: {
      key: string;
      color: string;
    }[]
  ) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuess((prevGuess) => {
      let newGuess = [...prevGuess];
      newGuess[turn] = formatedGuess;
      return newGuess;
    });
    setHistory((prevHistory) => {
      return [...prevHistory!, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setCurrentGuess("");
  };

  const handleKeyup = (props: { key: any }) => {
    console.log(props.key);
    if (props.key === "Enter") {
      if (turn < 5) {
        console.log("you used all your guess");
        return;
      }
      if (history!.includes(currentGuess)) {
        console.log("you already used it all");
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("word must be 5 characters");
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    if (props.key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (/^[A-Za-z]$/.test(props.key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + props.key;
        });
      }
    }
  };

  return { turn, currentGuess, guess, isCorrect, handleKeyup };
}
