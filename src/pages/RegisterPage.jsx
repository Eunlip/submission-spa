import { Link } from 'react-router-dom';
import RegisterInput from '../components/input/RegisterInput';
import { useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { localeTitleChange } from '../utils';

export default function RegisterPage() {
	const { locale } = useContext(LocaleContext);
	const navigate = useNavigate();

	async function onRegisterHandler(user) {
		const { error } = await register(user);

		if (!error) {
			alert(locale === 'id' ? 'Register berhasil' : 'Register success');
			navigate('/login');
		}
	}

	return (
		<div className='container flex items-center justify-center mt-20 '>
			<div className='flex flex-col gap-5 p-10'>
				<h1 className='text-2xl font-bold'>
					{localeTitleChange(locale, 'Daftar dulu yuk', "Let's Register First")}
				</h1>
				<RegisterInput register={onRegisterHandler} />
				<span>
					{localeTitleChange(locale, 'Sudah punya akun?', 'Already have an account?')}
					<Link to='/login' className='font-bold underline text-dark-green'>
						{localeTitleChange(locale, 'Masuk', 'Login')}
					</Link>
				</span>
			</div>
		</div>
	);
}
