import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Job from "./components/Job";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <MySkills />
      <MyProjects />
      <Job />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
