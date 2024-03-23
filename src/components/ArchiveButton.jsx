import PropTypes from 'prop-types';

export default function ArchiveButton({ id, onArchive, isArchive }) {
	return (
		<button id={id} onClick={() => onArchive(id)} className='p-1 text-xl text-white bg-black rounded-full '>
			{isArchive}
		</button>
	);
}

ArchiveButton.propTypes = {
	id: PropTypes.number.isRequired,
	onArchive: PropTypes.func.isRequired,
	isArchive: PropTypes.bool.isRequired,
};
