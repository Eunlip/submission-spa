import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ToggleTheme() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button className='text-2xl' onClick={toggleTheme}>
			{theme === 'light' ? <FaMoon /> : <FaSun />}
		</button>
	);
}
