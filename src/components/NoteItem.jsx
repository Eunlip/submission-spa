import { IoOpenOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { noteItemPropTypes, showFormattedDate } from '../utils';
import NoteBodyParse from './NoteBodyParse';

export default function NoteItem({ id, title, body, createdAt }) {
	const formattedDate = showFormattedDate(createdAt);
	return (
		<div className='p-5 text-left border-2 border-t-8  bg-notes rounded-xl'>
			<div className='flex items-center justify-between pb-5'>
				<div>
					<h3 className='text-xl font-bold'>{title}</h3>
					<p className='text-xs text-secondary'>{formattedDate}</p>
				</div>
				<Link to={`/notes/${id}`}>
					<IoOpenOutline className='text-xl' />
				</Link>
			</div>
			<NoteBodyParse className='text-sm ' body={body} />
		</div>
	);
}

NoteItem.propTypes = noteItemPropTypes;
