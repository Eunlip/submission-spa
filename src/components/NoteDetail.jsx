import PropTypes from 'prop-types';
import NoteBodyParse from './NoteBodyParse';
import { showFormattedDate } from '../utils';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import { BiSolidArchiveIn, BiSolidArchiveOut } from 'react-icons/bi';

export default function NoteDetail({ note, id, onDelete, onArchive }) {
	const { title, createdAt, body, archived } = note;

	return (
		<div className=''>
			<Link to='/notes' className='absolute top-3'>
				<IoArrowBackCircleSharp className='text-5xl text-x2' />
			</Link>
			<h1 className='pt-5 text-xl font-bold text-center'>{archived ? 'Archive' : 'Active'}</h1>
			<div className='flex flex-col px-4 my-16 sm:my-24'>
				<div className='flex flex-col mb-7'>
					<h3 className='text-3xl font-bold'>{title}</h3>
					<p className='text-xs text-secondary'>{showFormattedDate(createdAt)}</p>
				</div>
				<NoteBodyParse className='text-justify ' body={body} />
			</div>
			<DeleteButton id={id} onDelete={onDelete} />
			<ArchiveButton id={id} onArchive={onArchive}>
				{archived ? <BiSolidArchiveOut /> : <BiSolidArchiveIn />}
			</ArchiveButton>
		</div>
	);
}

NoteDetail.propTypes = {
	note: PropTypes.shape({
		title: PropTypes.string.isRequired,
		createdAt: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
		archived: PropTypes.bool.isRequired,
	}).isRequired,
	id: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
	onArchive: PropTypes.func.isRequired,
};
