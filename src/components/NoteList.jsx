import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import { noteItemPropTypes } from '../utils';

export default function NoteList({ notes }) {
	return (
		<div className='grid gap-5 my-10 place-self-start sm:grid-cols-2 2xl:grid-cols-3 grid-cols'>
			{notes.map((note) => (
				<NoteItem key={note.id} id={note.id} title={note.title} createdAt={note.createdAt} body={note.body}/>
			))}
		</div>
	);
}

NoteList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
};
