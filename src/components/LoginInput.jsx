import { useState } from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export default function LoginInput({ login }) {
	const [email, onEmailChange] = useInput();
	const [password, onPasswordChange] = useInput();
	const [type, setType] = useState('password');
	const [icon, setIcon] = useState(<FaRegEyeSlash />);

	const handleTogglePassword = () => {
		if (type === 'password') {
			setIcon(<FaRegEye />);
			setType('text');
		} else {
			setIcon(<FaRegEyeSlash />);
			setType('password');
		}
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		login({ email, password });
	};

	return (
		<form onSubmit={onSubmitHandler} className='flex flex-col gap-5 w-80 sm:w-96'>
			<div>
				<input
					className='w-full px-4 py-3 border rounded-sm focus:outline-0 focus:bg-input'
					type='email'
					name='email'
					value={email}
					onChange={onEmailChange}
					placeholder='email'
					required
				/>
			</div>
			<div className='relative flex'>
				<input
					className='w-full px-4 py-3 border rounded-sm focus:outline-0 focus:bg-input'
					type={type}
					name='password'
					value={password}
					onChange={onPasswordChange}
					autoComplete='current-password'
					placeholder='password'
					required
				/>
				<span
					className='absolute top-0 bottom-0 flex items-center justify-around text-2xl right-3'
					onClick={handleTogglePassword}
				>
					{type === 'password' ? <FaRegEyeSlash /> : <FaRegEye />}
				</span>
			</div>
			<button className='py-3 font-bold text-white rounded-md bg-dark-green hover:bg-light-green'>
				Login
			</button>
		</form>
	);
}

LoginInput.propTypes = {
	login: PropTypes.func.isRequired,
};
