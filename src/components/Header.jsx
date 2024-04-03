import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { LocaleContext } from '../contexts';
import { IoLogOutOutline } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';
import ToggleLocale from './ToggleLocale';
import PropTypes from 'prop-types';
import ToggleTheme from './ToggleTheme';
import { localeTitleChange } from '../utils';

export default function Header({ name, logout, authUser }) {
	const [menu, setMenu] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { locale } = useContext(LocaleContext);

	const toggleMenu = () => {
		setMenu(!menu);
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className='relative flex items-center justify-between pt-10'>
			{authUser ? (
				<nav className='flex items-center justify-between w-screen'>
					{''}
					<h1 className='text-xl font-bold'>Henotes</h1>
					<div className='flex items-center gap-5'>
						<ToggleTheme />
						<div className='flex items-center gap-2'>
							<span className='flex items-center'>
								<ToggleLocale />
							</span>
							{localeTitleChange(locale, 'ID', 'EN')}
						</div>
						<div
							onClick={toggleMenu}
							className={` text-2xl cursor-pointer ${
								menu
									? 'rotate-180 transition-all duration-300'
									: 'rotate-0 transition-all duration-100'
							}`}
						>
							{menu ? <IoCloseSharp /> : <FaBars />}
						</div>
					</div>
					{isMenuOpen && (
						<div className='dark:shadow-md dark:shadow-[#1D232A] absolute right-3 z-50 p-3 text-white rounded-md bg-light-green dark:bg-[#2c343e] top-20 dropdown dark:dark-dropdown'>
							<ul className='flex flex-col items-center gap-3 '>
								<li className='flex items-center gap-2'>
									<span>
										<FaUserCircle className='text-2xl' />
									</span>
									{name}
								</li>
								<li>
									<button className='flex items-center gap-1 hover:opacity-85' onClick={logout}>
										{localeTitleChange(locale, 'Keluar', 'Logout')}
										<span>
											<IoLogOutOutline />
										</span>
									</button>
								</li>
							</ul>
						</div>
					)}
				</nav>
			) : null}
		</header>
	);
}

Header.propTypes = {
	logout: PropTypes.func,
	name: PropTypes.string,
	authUser: PropTypes.object,
};
