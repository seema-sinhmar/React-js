import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const ThemeBtn = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  const changeTheme = () => {
    setTheme(theme==="Light" ? "Dark" : "Light")
  };
  return (
    <div>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
};

export default ThemeBtn;
