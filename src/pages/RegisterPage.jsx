import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data';

export default function RegisterPage() {
	const navigate = useNavigate();

	async function onRegisterHandler(user) {
		const { error } = await register(user);

		if (!error) {
			navigate('/');
		}
	}

	return (
		<div className='container flex items-center justify-center h-screen '>
			<div className='flex flex-col gap-5 p-10'>
				<h1 className='text-2xl font-bold'>Register</h1>
				<RegisterInput register={onRegisterHandler} />
				<span>
					Have an account?
					<Link to='/login' className='font-bold text-dark-green'>
						Login
					</Link>
				</span>
			</div>
		</div>
	);
}
