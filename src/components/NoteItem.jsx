import { IoOpenOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { noteItemPropTypes, showFormattedDate } from '../utils';
import NoteBodyParse from './NoteBodyParse';
import { useContext } from 'react';
import { LocaleContext, ThemeContext } from '../contexts';

export default function NoteItem({ id, title, body, createdAt }) {
	const { locale } = useContext(LocaleContext);
	const { theme } = useContext(ThemeContext);
	const formattedDate = showFormattedDate(createdAt, locale);
	return (
		<div
			className={`p-5 text-left ${
				theme === 'light' ? 'shadow-md' : 'shadow-xl'
			} border-t-8 w-auto border-t-light-green bg-notes dark:bg-[#2c343e] dark:border-t-[#A6ADBB] rounded-xl`}
		>
			<div className='flex items-center justify-between pb-5'>
				<div>
					<h3 className='text-xl font-bold dark:text-[#dddddd]'>{title}</h3>
					<p className='text-xs text-secondary dark:text-[#d3d3d3]'>{formattedDate}</p>
				</div>
				<Link to={`/notes/${id}`}>
					<IoOpenOutline className='text-xl' />
				</Link>
			</div>
			<NoteBodyParse className='text-sm dark:text-[#d7d7d7]' body={body} />
		</div>
	);
}

NoteItem.propTypes = noteItemPropTypes;
