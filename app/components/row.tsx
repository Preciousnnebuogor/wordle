"use client";

type IProps = {
  currentGuess: string;
  guess: { color: string; key: string }[];
  turn: number;
};

export default function Row(props: IProps) {
  if (props.guess) {
    return (<div>
        {props.guess.map((val,i) => (
            <div key={i}></div>
        ))}
    </div>
    )
  }

  if(props.currentGuess) {
    let letters = props.currentGuess.split('')

    return (<div>
        {letters.map((letter,i)=>(
        <div key={i}>{letter}</div>
        ))}
    </div>)
  }

  
  return (
    <div className={`flex items-center justify-center grid-cols-5`}>
      <div
        className={`w-[30px] h-[30px] border-2 border-white border-solid m-2 
            text-center text-transparent leading-[30px] text-2xl font-bold `}
      ></div>
      <div
        className={`w-[30px] h-[30px] border-2 border-white border-solid m-2 
            text-center text-transparent leading-[30px] text-2xl font-bold `}
      >
        hi
      </div>
      <div
        className={`w-[30px] h-[30px] border-2 border-white border-solid m-2 
            text-center text-transparent leading-[30px] text-2xl font-bold `}
      ></div>
      <div
        className={`w-[30px] h-[30px] border-2 border-white border-solid m-2 
            text-center text-transparent leading-[30px] text-2xl font-bold `}
      ></div>
      <div
        className={`w-[30px] h-[30px] border-2 border-white border-solid m-2 
            text-center text-transparent leading-[60px] text-2xl font-bold `}
      ></div>
    </div>
  );
}
