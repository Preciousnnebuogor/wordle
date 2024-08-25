import { useEffect } from "react";
import useWordle from "../hook/useWordle";
import Grid from "./grid";

type IProps = {
  solution: { id: number; word: string };
};

export default function Wordle(props: IProps) {
  const { currentGuess, handleKeyup, guess, isCorrect, turn } = useWordle(
    props.solution
  );
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guess, turn, isCorrect);
  }, [guess, turn, isCorrect]);

  return (
    <div>
      <div>solution - {props.solution.word}</div>
      <div>current guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guess={guess} turn={turn} />
    </div>
  );
}
