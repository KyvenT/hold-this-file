import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";

export const Header = () => {
  const { isLightMode, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
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
  );
};
