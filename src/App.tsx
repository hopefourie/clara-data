import cn from 'classnames'

import { useState } from "react";
import "./App.css";
import caret from "./assets/double-down-caret.png";
import { Birds } from "./Birds";
import { Books } from "./Books";

function App() {
  const [isBirdsSelected, setIsBirdsSelected] = useState<boolean>(true);
  const [isBooksSelected, setIsBooksSelected] = useState<boolean>(false);
  const [isThirdSelected, setIsThirdSelected] = useState<boolean>(false);

  return (
    <main>
      <div className="landing">
        <h1>Clara Hughes</h1>
        <img aria-hidden src={caret} alt="caret icon" className="caret-icon" />
        <div className="button-container">
        <div
          className={cn("project", isBirdsSelected && "selected")}
          onClick={() => {
            setIsBirdsSelected(true);
            setIsBooksSelected(false);
            setIsThirdSelected(false);
          }}
        >
          Birds of Magdelena
          {/* test */}
        </div>
        <div
          className={cn("project", isBooksSelected && "selected")}
          onClick={() => {
            setIsBooksSelected(true);
            setIsThirdSelected(false);
            setIsBirdsSelected(false);
          }}
        >
          Dont Judge a Book
        </div>
        <div
          className={cn("project", isThirdSelected && "selected")}
          onClick={() => {
            setIsThirdSelected(true);
            setIsBooksSelected(false);
            setIsBirdsSelected(false);
          }}
        >
          A Third Thing
        </div>
      </div>
      </div>
      
      <div className={!isBirdsSelected ? "hidden" : ""}>
        <Birds />
      </div>
      <div className={!isBooksSelected ? "hidden" : ""}>
        <Books />
      </div>
      <div className={!isThirdSelected ? "hidden" : ""}>Placeholder</div>
    </main>
  );
}

export default App;
