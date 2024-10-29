import "./assets/style/_main.scss";
import Navbar from "./components/layout/Navbar";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <Router />
      <Navbar />
    </>
  );
}

export default App;
