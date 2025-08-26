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
              I am a data analyst based in Richmond, VA. I am interested in the
              intersection of data and social sciences. <br />
              <br /> I am currently seeking new opportunities. Checkout my{" "}
              <a href="https://github.com/clarameera">github</a> and{" "}
              <a href="https://www.linkedin.com/in/clara-hughes-201657157/">linkedin</a>.
            </p>
          </div>
        </div>
        <div className="project_container">
          <a
            className="project"
            href="https://public.tableau.com/app/profile/clara.hughes/viz/magdelena_birds_2020_2025/BirdsofMagdalena"
          >
            <img className="project_img" src={bird} />
            <h2>Birds of Magdalena</h2>
            <span>
              Magdalena, Colombia is one of the most biodiverse regions in the
              world. For this project, I set out to better understand the
              abundant bird population. After using SQL to filter and
              restructure a raw dataset of 998,000 avian observations from
              EBird, I created an interactive Tableau story to visualize bird
              observation trends. Users can explore observation frequency,
              geospatial heatmaps, and seasonal migration patterns of the
              region’s 500+ bird species.
            </span>
          </a>
          <a
            className="project"
            href="https://github.com/clarameera/Cleaning-with-Python_Books-on-Data/blob/main/books_on_data.ipynb"
          >
            <img className="project_img" src={books} />
            <h2>Books on Data</h2>
            <span>
              A Jupyter Notebook that walks through the comprehensive cleaning
              of messy, web-scraped book sales data: addresses null values,
              resolves a high percentage of incomplete duplicate records (nearly
              50%) with multi-level grouped aggregation, standardizes strings
              with conditional replacement to improve readability. Using
              Seaborn, constructs bar charts, box plots, and histograms to
              visualize buyer and price distribution across product variants and
              identify outliers.
            </span>
          </a>
          <a
            className="project"
            href="https://github.com/clarameera/UFO-Sightings"
          >
            <img className="project_img" src={ufo} />
            <h2>UFO Sightings </h2>
            <span>
              I cleaned and transformed a dataset of 80,000 UFO sightings from
              NUFORC to prepare for accurate trend analysis. Then I filtered and
              cleaned 10,000 row movie dataset, inner joined with the UFO
              dataset, and used common table expressions, window functions, and
              case statements to analyze potential relationships between alien
              movie releases and UFO sightings.
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
