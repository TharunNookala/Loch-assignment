import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import LoginPanel from "./components/LoginPanel/LoginPanel";

function App() {
  return (
    <section className="flex flex-col sm:flex-row w-screen h-screen overflow-y-scroll">
      <div className="sm:w-3/5">
        <HomePage />
      </div>
      <div className="hidden sm:block sm:w-2/5">
        <LoginPanel />
      </div>
    </section>
  );
}

export default App;
