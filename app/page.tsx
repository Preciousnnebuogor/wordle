"use client";
import { useEffect, useState } from "react";
import Wordle from "./components/wordle";

const List = [
  { id: 1, word: "rooms" },
  { id: 2, word: "nonse" },
  { id: 3, word: "nonso" },
  { id: 4, word: "felixs" },
];
export default function Home() {
  const [solution, setSolution] = useState<{
    id: number;
    word: string;
  }>();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * List.length);
    const randomSolution = List[randomNumber];
    setSolution(randomSolution);
  }, [setSolution]);

  return (
    <div>
      <h1>wordle</h1>
      {solution && <Wordle solution={solution} />}
      
    </div>
  );
}
