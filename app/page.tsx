import { observer, Observer,useLocalObservable } from "mobx-react-lite";
export default observer( function Home() {
  const store = useLocalObservable(()=> PuzzleStore)
  return (
    <div>
       <h1>wordle</h1>
       <Guess/>
       <h1>won/lose</h1>
       <Querty/>
    </div>
  );
})
