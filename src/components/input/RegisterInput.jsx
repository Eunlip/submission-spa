import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import { useContext } from 'react';
import { LocaleContext } from '../../contexts';

export default function RegisterInput({ register }) {
	const [name, onNameChange] = useInput();
	const [email, onEmailChange] = useInput();
	const [password, onPasswordChange] = useInput();
	const [passwordConfirmation, onPasswordConfirmationChange] = useInput();
	const { locale } = useContext(LocaleContext);

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if (password !== passwordConfirmation) {
			alert(
				locale === 'id'
					? 'Password dan konfirmasi password harus sama'
					: 'Password and password confirmation must be the same!',
			);
			return;
		}

		const form = event.target;
		const formData = new FormData(form);
		register(Object.fromEntries(formData));
	};

	return (
		<form onSubmit={onSubmitHandler} className='flex flex-col gap-5 w-80 sm:w-[30rem]'>
			<div>
				<input
					className='w-full px-4 py-3 border rounded-sm dark:text-black focus:outline-0 focus:bg-input '
					type='text'
					name='name'
					placeholder='name'
					value={name}
					onChange={onNameChange}
					required
				/>
			</div>
			<div>
				<input
					className='w-full px-4 py-3 border rounded-sm dark:text-black focus:outline-0 focus:bg-input'
					type='email'
					name='email'
					placeholder='email'
					autoComplete='username'
					value={email}
					onChange={onEmailChange}
					required
				/>
			</div>
			<div className='relative flex'>
				<input
					className='w-full px-4 py-3 border rounded-sm dark:text-black focus:outline-0 focus:bg-input'
					type='password'
					name='password'
					placeholder='password'
					autoComplete='new-password'
					value={password}
					onChange={onPasswordChange}
					required
				/>
			</div>
			<div className='relative flex'>
				<input
					className='w-full px-4 py-3 border rounded-sm dark:text-black focus:bg-input'
					type='password'
					id='passwordConfirmation'
					name='passwordConfirmation'
					placeholder='confirm password'
					autoComplete='new-password'
					value={passwordConfirmation}
					onChange={onPasswordConfirmationChange}
					required
				/>
			</div>
			<button className='py-3 font-bold text-white rounded-md bg-dark-green hover:bg-light-green'>
				Register
			</button>
		</form>
	);
}

RegisterInput.propTypes = {
	register: PropTypes.func.isRequired,
};
