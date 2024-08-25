"use client";

import Row from "./row";

type IProps = {
  currentGuess: string;
  guess: { color: string; key: string }[];
  turn: number;
};

export default function Grid(props: IProps) {
  return (
    <div>
      {props.guess.map((val, i) => {
        if (props.turn === i) {
            return <Row key={i} currentGuess={props.currentGuess} guess={props.guess} turn={0}/>
        }
        return <Row key={i} guess={props.guess} currentGuess={""} turn={0} />;
      })}
    </div>
  );
}
 