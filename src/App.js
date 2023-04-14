import "./App.scss";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import MyProjects from "./components/Projects/MyProjects";
import ContactMe from "./components/Contact/ContactMe";
import { About } from "./components/about/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="App">
      <Header />
      <Home />
      <About />
      <MyProjects />
      <ContactMe />
      <Footer />
    </main>
  );
}

export default App;
