import "./App.css";
import caret from "./assets/double-down-caret.png"
import { Birds } from "./Birds";

function App() {
  return (
    <main>
      <div className="landing">
        <h1>Clara Hughes</h1>
        <img
            aria-hidden
            src={caret}
            alt="caret icon"
            className="caret-icon"
          />
      </div>
      <Birds/>
    </main> 
  );
}

export default App;
