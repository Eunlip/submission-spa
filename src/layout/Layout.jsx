import { Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<div className='container h-auto px-5 sm:px-10 lg:px-52 font-display'>
			<Outlet />
		</div>
	);
}
