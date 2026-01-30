import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import { Header } from "../../components/Header";

function App() {
  const { isLightMode } = useContext(ThemeContext);

  return (
    <div
      className={`app-container ${isLightMode ? "theme-light" : "theme-dark"}`}
    >
      <Header />
      <main>a</main>
    </div>
  );
}

export default App;
