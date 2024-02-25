// liblary

import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

// style
import "./Styles/style-min.css";

//page's
import Nav from "./Controllers/Nav";
import Footer from "./Controllers/Footer";
import Loading from "./Controllers/loading";


//translations
import translations from "./Other/translate.json";

const Main = ({ setloading, git, photos, youtube }) => {
  const Home = lazy(()=> import('./Controllers/Home'));
  const Resume = lazy(()=> import('./Controllers/Resume'));
  const Contact = lazy(()=> import('./Controllers/Contact'));
  const Portfolio = lazy(()=> import('./Controllers/Portfolio'));


  const [cookies] = useCookies(["dark_mode"]);
  const [language, setLanguage] = useState(
    window.localStorage.getItem("language")
      ? window.localStorage.getItem("language")
      : "en"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //change translation
  const lang = translations[language];
  const personalist = translations.personalist;
  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector(".App--active") == null) {
        document.querySelector(".App").classList.add("App--active");
      }
    }, 50);
  }, []);

  const [darkMode, setDarkMode] = useState(
    cookies.dark_mode === "true" ? true : false
  );
  return (
    <div className="App" id={darkMode ? "dark" : ""}>
      <Nav
        lang={lang}
        setLanguage={setLanguage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setloading={setloading}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <div className="container-main">
        <Routes>
          <Route
            path="/"
            element={
           <Suspense fallback={<Loading setloading={setloading}/>}>
             <Home lang={lang} personalist={personalist} />
           </Suspense>
            }
          />
          <Route
            path="/About"
            element={
              <Suspense fallback={<Loading setloading={setloading}/>}>
                <Resume
                  langg={lang}
                  isMenuOpen={isMenuOpen}
                  personalist={personalist}
                  setloading={setloading}
                />
              </Suspense>
            }
          />
          <Route
            path="/Portfolio"
            element={
              <Suspense fallback={<Loading setloading={setloading}/>}>
                <Portfolio
                  lang={lang.PortfolioContent}
                  isMenuOpen={isMenuOpen}
                  personalist={personalist}
                  setloading={setloading}
                  git={git}
                  photos={photos}
                  youtube={youtube}
                />
              </Suspense>
            }
          />
          <Route
            path="/Contact"
            element={
              <Suspense fallback={<Loading setloading={setloading}/>}>
                <Contact
                  lang={lang.ContactContent}
                  isMenuOpen={isMenuOpen}
                  personalist={personalist}
                  setloading={setloading}
                />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <Footer trans={translations} langg={lang} />
    </div>
  );
};
export default Main;
