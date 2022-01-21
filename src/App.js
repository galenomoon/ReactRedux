import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Exercise React-Redux (Simple)</h1>
      <div className="line">
        <Card title="#01 - Card" color="red">
          W
        </Card>
      </div>
      <div className="line">
        <Card title="#02 - Card" color="green">X</Card>
        <Card title="#03 - Card" color="blue">
          Y
        </Card>
        <Card title="#04 - Card" color="purple">
          Z
        </Card>
      </div>
    </div>
  );
}

export default App;
