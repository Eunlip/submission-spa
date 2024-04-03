import { Link } from 'react-router-dom';
import LoginInput from '../components/input/LoginInput';
import { login } from '../utils/network-data';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { localeTitleChange } from '../utils';

export default function LoginPage({ loginSuccess }) {
	const { locale } = useContext(LocaleContext);

	async function onLogin({ email, password }) {
		const { err, data } = await login({ email, password });

		if (!err) {
			loginSuccess(data);
		}
	}

	return (
		<div className='container flex items-center justify-center mt-40'>
			<div className='flex flex-col gap-5 p-10'>
				<h1 className='text-2xl font-bold'>{localeTitleChange(locale, 'Silahkan Masuk', 'Please Login')}</h1>
				<LoginInput login={onLogin} />
				<span>
					{localeTitleChange(locale, 'Belum punya akun?', "Don't have an account yet?")}
					<Link to='/register' className='font-bold underline text-dark-green'>
						{localeTitleChange(locale, 'Daftar', 'Register')}
					</Link>
				</span>
			</div>
		</div>
	);
}

LoginPage.propTypes = {
	loginSuccess: PropTypes.func,
};
