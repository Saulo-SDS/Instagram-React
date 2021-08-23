import ReactDOM from "react-dom";
import Container from "./components/Container";
import Top from "./components/Top";
      
function App() {
  return (
      <div>
        <Top/>
        <Container/>
      </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
