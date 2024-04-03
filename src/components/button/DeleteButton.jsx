import PropTypes from 'prop-types';
import { BsTrash2 } from 'react-icons/bs';

export default function DeleteButton({ id, onDelete }) {
	return (
		<button
			id={id}
			onClick={() => onDelete(id)}
			title='Delete'
			className='fixed p-1 text-5xl text-white bg-black rounded-full bottom-16 right-10 sm:bottom-20 sm:right-20 lg:right-52 2xl:right-56'
		>
			<BsTrash2 />
		</button>
	);
}

DeleteButton.propTypes = {
	id: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
};
