import "./App.css";
import headshot from "./assets/headshot.png";
import bird from "./assets/bird.png";
import ufo from "./assets/ufo.png";
import books from "./assets/books.jpg";



import "react-tabs/style/react-tabs.css";

function App() {
  return (
      <main>
        <div className="container">
        <div className="bio">
          <img className="headshot" src={headshot} />
          <div>
            <h1>Clara Hughes</h1>
          <p>
            I'm a data analyst based in Richmond, VA. I am
            interested in the intersection of data and social sciences. <br />
            <br /> I am currently seeking new opportunities. Checkout my{" "}
            <a href="https://github.com/clarameera">github</a> and{" "}
            <a href="">linkedin</a>.
          </p>
          </div>
        </div>
        <div className="project_container">
          <a className="project" href="https://public.tableau.com/app/profile/clara.hughes/viz/magdelena_birds_2020_2025/BirdsofMagdalena">
            <img className="project_img" src={bird}/>
            <h2>Birds of Magdalena</h2>
            <span>This is a blurb about Birds of Magdalena</span>
          </a>
          <a className="project" href="https://github.com/clarameera/Cleaning-with-Python_Books-on-Data/blob/main/books_on_data.ipynb">
            <img className="project_img" src={books}/>
            <h2>Books on Data</h2>
            <span>This is a blurb about Books on Data</span>
          </a>
          <a className="project" href="https://github.com/clarameera/UFO-Sightings">
            <img className="project_img" src={ufo}/>
            <h2>UFO Sightings </h2>
            <span>This is a blurb about UFO Sightings</span>
          </a>
        </div>
        </div>
      </main>
  );
}

export default App;
