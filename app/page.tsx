import Counter from "../components/counter";
import Controls from "../components/controls"

export default function Home() {
    
    return (
      <>
        <Counter/>
        <h1 className="text-4xl text-center my-3">the copied part</h1>
        <Counter/>
        <h1 className="text-4xl text-center my-3">controls </h1>
        <Controls/>
      </>
    );
}