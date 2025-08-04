import "./App.css";
import { Birds } from "./Birds";
import { Books } from "./Books";
import headshot from "./assets/headshot.png";
import alert from "./assets/alert.svg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function App() {
  return (
    <div>
      <div className="banner">
        {" "}
        <img src={alert} /> Due to the size of dataset viewports, this website
        is best viewed on screens wider than 900px
      </div>
      <main>
        <div className="bio">
          <img className="headshot" src={headshot} />
          <p>
            I'm Clara Hughes, a data analyst based in Richmond, VA. I am
            interested in the intersection of data and social sciences. <br />
            <br /> I am currently seeking new opportunities. Checkout my{" "}
            <a href="https://github.com/clarameera">github</a> and{" "}
            <a href="">linkedin</a>.
          </p>
        </div>
        <Tabs className="tabs">
          <TabList>
            <Tab>Birds of Magdelena</Tab>
            <Tab>Books on Data</Tab>
          </TabList>

          <TabPanel>
            <Birds />
          </TabPanel>
          <TabPanel>
            <Books />
          </TabPanel>
        </Tabs>
      </main>
    </div>
  );
}

export default App;
