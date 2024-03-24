import { Component } from 'react';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail';
import Page404 from './404Page';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
	const navigate = useNavigate();

	const { id } = useParams();
	return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			note: getNote(props.id),
		};

		this.onDeleteHandeler = this.onDeleteHandeler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
		this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
	}

	onDeleteHandeler() {
		deleteNote(this.props.id);
		const pathPatameter = this.state.note.archived ? '/notes/archive' : '/notes';
		this.props.navigate(pathPatameter);
	}

	onArchiveHandler() {
		if (this.state.note && !this.state.note.archived) {
			archiveNote(this.props.id);
			this.props.navigate('/notes');
		}
	}

	onUnarchiveHandler() {
		if (this.state.note && this.state.note.archived) {
			unarchiveNote(this.props.id);
			this.props.navigate('/notes/archive');
		}
	}

	render() {
		const note = this.state.note;

		return (
			<div className='py-5'>
				{this.state.note ? (
					<NoteDetail
						id={note.id}
						onDelete={this.onDeleteHandeler}
						onArchive={!note.archived ? this.onArchiveHandler : this.onUnarchiveHandler}
						note={note}
					/>
				) : (
					<Page404 />
				)}
			</div>
		);
	}
}

DetailPage.propTypes = {
	id: PropTypes.string.isRequired,
	navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
