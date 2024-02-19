import "./App.css";
import Navbar from "./Navbar";
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
    </>
  );
  // const html = "scriv koden här";
  // return html;
}

// const App =() => {
//   return <div>This is the app component</div>
// };
export default App;
