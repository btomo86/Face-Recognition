import "./App.css";
import Navigation from "./components/Navigation";
import "tachyons";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/ImageLinkForm";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLinkForm />
    </div>
  );
}

export default App;
