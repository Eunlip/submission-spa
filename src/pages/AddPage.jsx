import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/input/NoteInput';

export default function AddPage() {
	const navigate = useNavigate();

	const onAddNoteHandler = (note) => {
		
		addNote(note);
		navigate('/');
	};

	return (
		<div className='h-full pt-5'>
			<NoteInput addNote={onAddNoteHandler} />
		</div>
	);
}
