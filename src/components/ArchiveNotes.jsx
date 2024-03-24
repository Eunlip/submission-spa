import { Component } from 'react';
import { archiveNote, filterNotes, getArchivedNotes } from '../utils/local-data';
import { Link, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoteList from './NoteList';
import AddButton from './AddButton';
import SearchNote from './SearchNote';

function ArchiveNotesWrapper() {
	const [searchParams, setSearchParams] = useSearchParams();

	const keyword = searchParams.get('keyword');
	function changeSearchParams(keyword) {
		setSearchParams({ keyword });
	}

	return <ArchiveNotes defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class ArchiveNotes extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getArchivedNotes(),
			keyword: props.defaultKeyword || '',
		};

		this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
	}

	onKeywordChangeHandler(keyword) {
		this.setState(() => {
			return {
				keyword,
			};
		});

		this.props.keywordChange(keyword);
	}

	render() {
		const archiveNotes = filterNotes(this.state.notes, this.state.keyword);
		console.log(archiveNotes)
		return (
			<div className='pt-10 text-center '>
				<h1 className='text-xl font-bold'>HeNotes</h1>
				<div className='flex items-center justify-between mb-3 mt-7 sm:mt-5'>
					<Link to='/notes' className={`px-6 py-1 font-bold rounded-md cursor-pointer`}>
						Active
					</Link>
					<h2
						className={`px-6 py-1 font-bold rounded-md cursor-pointer ${
							archiveNote ? 'bg-dark-green text-white ' : 'bg-white text-black'
						}`}
					>
						Archive
					</h2>
				</div>
				<SearchNote keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
				<div className={`flex flex-col items-center justify-center `}>
					{archiveNotes.length ? (
						<NoteList notes={archiveNotes} />
					) : (
						<p className='justify-center font-bold text-center mt-60'>
							You don&apos;t have any active records.
						</p>
					)}
				</div>
				<AddButton path='/notes/new' />
			</div>
		);
	}
}

ArchiveNotes.propTypes = {
	defaultKeyword: PropTypes.string,
	keywordChange: PropTypes.func.isRequired,
};

export default ArchiveNotesWrapper;
