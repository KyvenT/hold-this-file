import { useState } from "react";

function App() {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  const handleToggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`app-container ${isLightMode ? "theme-light" : "theme-dark"}`}
    >
      <header>
        <div className="header-section">
          <h1 className="title">Hold This File</h1>
        </div>
        <div className="header-section">
          <button
            className={`theme-toggle-button ${isLightMode ? "active" : ""}`}
            aria-label="Toggle theme"
            aria-pressed={isLightMode}
            onClick={handleToggleTheme}
          >
            <span className="slider"></span>
          </button>
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default App;
