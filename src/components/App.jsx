import "./App.css";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
//PascalCase or CamelCase
function App() {
  return (
    <>
      <Navbar />
      <h1>This is my first App!</h1>
      <div>
        <p>This is the content of my app</p>
        <section>This is a section</section>
      </div>
      <Footer />
    </>
  );
}

export default App;
