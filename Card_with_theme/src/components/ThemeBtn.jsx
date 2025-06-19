
import { useContext } from "react";
import { Theme_context } from "../Context/Theme_context";

export default function ThemeBtn() {
    let { toggle,theme } = useContext(Theme_context);

    const Theme_change = () => {
        toggle();
    }
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value={theme} className="sr-only peer" checked = {theme === 'dark'} onChange={Theme_change}/>
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">{theme=='dark'?"DarkMode":"LightMode"}</span>
    </label>
  );
}
// This component is a toggle switch for changing themes.
// It uses a checkbox input styled with Tailwind CSS to create a switch appearance.
