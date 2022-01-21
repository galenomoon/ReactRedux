import "./App.css";
import Interval from "./components/Interval";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
  return (
    <div className="App">
      <h1>Exercise React-Redux (Simple)</h1>
      <div className="line">
        <Interval>
        </Interval>
      </div>
      <div className="line">
        <Media title="#02 - Card" color="green">X</Media>
        <Soma title="#03 - Card" color="blue">Y</Soma>
        <Sorteio title="#04 - Card" color="purple">Z</Sorteio>
      </div>
    </div>
  );
}

export default App;
