import PropTypes from 'prop-types';
import { BsTrash2 } from 'react-icons/bs';

export default function DeleteButton({ id, onDelete }) {
	return (
		<button
			id={id}
			onClick={() => onDelete(id)}
			className='p-1 text-xl text-white bg-black rounded-full '
		>
			<BsTrash2 />
		</button>
	);
} 

DeleteButton.propTypes = {
	id: PropTypes.number.isRequired,
	onDelete: PropTypes.func.isRequired,
};
