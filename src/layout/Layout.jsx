import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header';
import PropTypes from 'prop-types';

export default function Layout({ onLogout, name, authUser }) {
	return (
		<div className='container h-auto px-5 sm:px-10 lg:px-52 font-display'>
			<Header logout={onLogout} name={name} authUser={authUser} />
			<Outlet />
			<ScrollRestoration />
		</div>
	);
}

Layout.propTypes = {
	onLogout: PropTypes.func,
	name: PropTypes.string,
	authUser: PropTypes.object,
};
