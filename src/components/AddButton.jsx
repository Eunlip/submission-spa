import { Link } from 'react-router-dom';
import { FaCirclePlus } from 'react-icons/fa6';
import PropTypes from 'prop-types';

export default function AddButton({ path }) {
	return (
		<Link to={path} className='text-3xl bg-black'>
			<FaCirclePlus />
		</Link>
	);
}

AddButton.propTypes = {
	path: PropTypes.string,
};
