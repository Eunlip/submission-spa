import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import PropTypes from 'prop-types';

export default function LoginPage({ loginSuccess }) {
	async function onLogin({ email, password }) {
		const { err, data } = await login({ email, password });

		if (!err) {
			loginSuccess(data);
		}
	}

	return (
		<div className='container flex items-center justify-center h-screen'>
			<div className='flex flex-col gap-5 p-10'>
				<h1 className='text-2xl font-bold'>Login</h1>
				<LoginInput login={onLogin} />
				<span>
					Don&apos;t have an account yet?{' '}
					<Link to='/register' className='font-bold text-dark-green'>
						Register
					</Link>
				</span>
			</div>
		</div>
	);
}

LoginPage.propTypes = {
	loginSuccess: PropTypes.func,
};
