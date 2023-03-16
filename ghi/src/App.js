import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import "./index.css";
import "./toggle-theme.css";
import { AuthProvider, useToken } from "./Auth";
import LoginForm from "./LoginForm";
import AboutUs from "./AboutUs";
import SignupForm from "./SignupForm";
import LandingPage from "./LandingPage";
import CreateMunch from "./CreateMunchForm";
import HomePage from "./HomePage";
import MunchDetail from "./MunchDetail";
import EditMunch from "./EditMunchForm";
import Logout from "./Logout";
import EditUser from "./EditUser";
import AllMunches from "./AllMunches";
import UserPage from "./UserPage";
import GetAccount from "./AccountView";
import Resources from "./Resources";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const ThemeContext = createContext(null);

function GetToken() {
  useToken();
  return null;
}

const images = [
  "https://media.cntraveler.com/photos/58e8001ebee9e923ad1a88f1/master/w_2048,h_1536,c_limit/best-restaurants-chicago-monteverde-2017.jpg",
  "https://media.cntraveler.com/photos/5ad50992905ac70f030603ae/master/pass/Le-Farfalle_Andrew-Cebulka_2018_Andrew-Cebulka-1994.jpg",
  "https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1",
  "https://media.cntraveller.com/photos/611bf47d24f18e2bd3cbedf2/4:3/pass/charcuterie-board-with-mignorelli-farm-snap-peas-and-ricotta-at-lafayette-restaurant-new-york-conde-nast-traveller-4sept14-annie-schlechter.jpg",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1498588747262-0f2241707d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://cdn.discordapp.com/attachments/1048126003530186752/1079904744090370168/food-photographer-jennifer-pallian-8Jg4U4xHu-o-unsplash.jpg",
  "https://images.unsplash.com/photo-1563245739-fa3a4a274aad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  "https://o2bbq.com/wp-content/uploads/2019/12/o2-bbq-all-you-can-eat-korean-bbq-new-york-bayside-guttenberg-new-jersey-interior-food-00035.png",
  "https://cdn.shopify.com/s/files/1/0509/0541/5846/articles/image.jpg?v=1652910601",
  "https://www.tokyo.grand.hyatt.co.jp/en/restaurants/wp-content/uploads/2017/03/Dim-sum-above2-1400C-min.jpg",
  "https://images.squarespace-cdn.com/content/v1/52d3fafee4b03c7eaedee15f/c523fb53-2812-4cf3-8ef6-9b8036d04914/after-7576.jpg",
  "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2021/03/vietnamese-restaurants-in-singapore.png",
  "https://cdn.discordapp.com/attachments/1048126003530186752/1079921712130424833/mae-mu-LgnE31R9PGc-unsplash.jpg",
  "https://images.deliveryhero.io/image/fd-ph/LH/qe3v-hero.jpg",
  "https://images.unsplash.com/photo-1517499414974-3b42addf2d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
];

function getRandomImage(images) {
  return images[Math.floor(Math.random() * images.length)];
}

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const [backgroundImage, setBackgroundImage] = useState(() => {
    const storedImage = localStorage.getItem("backgroundImage");
    return storedImage ? storedImage : getRandomImage(images);
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }

    const storedImage = localStorage.getItem("backgroundImage");
    const storedTime = localStorage.getItem("backgroundImageTime");
    const now = Date.now();
    if (storedImage && storedTime && now - storedTime < 30 * 60 * 1000) {
      setBackgroundImage(storedImage);
    } else {
      localStorage.clear();
      const randomImage = getRandomImage(images);
      setBackgroundImage(randomImage);
      localStorage.setItem("backgroundImage", randomImage);
      localStorage.setItem("backgroundImageTime", now);
    }

    const intervalId = setInterval(() => {
      const now = Date.now();
      const storedTime = localStorage.getItem("backgroundImageTime");
      if (storedTime && now - storedTime >= 30 * 60 * 1000) {
        localStorage.clear();
      }
      const randomImage = getRandomImage(images);
      setBackgroundImage(randomImage);
      localStorage.setItem("backgroundImage", randomImage);
      localStorage.setItem("backgroundImageTime", now);
    }, 30 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <BrowserRouter basename={basename}>
            <AuthProvider>
              <GetToken />
              <Nav backgroundImage={backgroundImage} />
              <Routes>
                <Route
                  path="/"
                  element={<LandingPage backgroundImage={backgroundImage} />}
                />
                <Route path="about-us" element={<AboutUs />} />
                <Route
                  path="login"
                  element={<LoginForm backgroundImage={backgroundImage} />}
                />
                <Route path="logout" element={<Logout />} />
                <Route
                  path="signup"
                  element={<SignupForm backgroundImage={backgroundImage} />}
                />
                <Route path="resources" element={<Resources />} />
                <Route path="home" element={<HomePage />} />
                <Route path="munch/edit/:id" element={<EditMunch />} />
                <Route path="munchbunch" element={<AllMunches />} />
                <Route path="munch/:id" element={<MunchDetail />} />
                <Route path="munches/:userName" element={<UserPage />} />
                <Route path="munch/create" element={<CreateMunch />} />
                <Route path="accounts" element={<GetAccount />} />
                <Route path="accounts/:id" element={<EditUser />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
          <div
            className="dark-mode-switch-container"
            style={{
              position: "fixed",
              top: "15px",
              right: "21px",
              padding: "10px",
              width: "50px",
              height: "55px",
              background: "none",
            }}
          >
            <DarkModeSwitch
              checked={theme === "dark"}
              onChange={toggleTheme}
              size={35}
            />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
