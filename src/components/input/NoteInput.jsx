import { useContext, useState } from 'react';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LocaleContext } from '../../contexts';
import PropTypes from 'prop-types';
import { localeTitleChange } from '../../utils';

export default function NoteInput({ addNote }) {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const { locale } = useContext(LocaleContext);

	const onTitleChangeHandler = (event) => {
		setTitle(event.target.value);
	};

	const onBodyChangeHandler = (event) => {
		setBody(event.target.innerHTML);
	};

	const onSaveHandler = (event) => {
		event.preventDefault();

		if (!title || !body) {
			const text = localeTitleChange(
				locale,
				'Judul dan isi catatan tidak boleh kosong!',
				'Title and body cannot be empty!',
			);
			return alert(text);
		}

		addNote({
			title,
			body,
		});
	};

	return (
		<div>
			<div className='relative'>
				<Link to='/' className='absolute -top-2'>
					<IoArrowBackCircleSharp className='text-5xl text-x2' />
				</Link>
				<div className='flex flex-col gap-5 my-16'>
					<div className='flex flex-col items-center justify-center mb-5'>
						<h1 className='mb-5 text-3xl font-bold text-center'>
							{localeTitleChange(locale, 'Buat catatan', 'Create note')}
						</h1>
						<div className='w-32 h-1 rounded-full bg-black dark:bg-[#49535e]'></div>
					</div>
					<input
						className='w-full p-5 text-lg bg-transparent border-2 focus:outline-0 rounded-xl  border-[#49535e] '
						type='text'
						placeholder={localeTitleChange(locale, 'Judul', 'Title')}
						onChange={onTitleChangeHandler}
					/>
					<div
						className={`h-auto p-5 pb-24 text-lg border-2 focus:outline-0 border-[#49535e]  rounded-xl ${
							body ? '' : localeTitleChange(locale, 'id-placeholder', 'en-placeholder')
						}`}
						contentEditable
						onInput={onBodyChangeHandler}
					></div>
				</div>
				<button type='submit' title='save' onClick={onSaveHandler}>
					<FaCheckCircle className='fixed text-6xl right-8 2xl:right-28 bottom-10 2xl:bottom-20' />
				</button>
			</div>
		</div>
	);
}

NoteInput.propTypes = {
	addNote: PropTypes.func.isRequired,
};
