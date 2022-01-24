import "./App.css";
import Interval from "./components/Interval";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";
import Logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <div className="line2">
        <img src={Logo} className="App-logo" />
        <h1>Exercise React-Redux (Simple)</h1>
        <img src={Logo} className="App-logo" />
      </div>
      <div className="line">
        <Interval></Interval>
      </div>
      <div className="line">
        <Media title="#02 - Card" color="green"></Media>
        <Soma title="#03 - Card" color="blue"></Soma>
        <Sorteio title="#04 - Card" color="purple"></Sorteio>
      </div>
    </div>
  );
}

export default App;
