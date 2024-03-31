import { Component } from 'react';
import PropTypes from 'prop-types';
import { filterNotes, getActiveNotes } from '../utils/local-data';
import SearchNote from '../components/SearchNote';
import NoteList from '../components/NoteList';
import AddButton from '../components/AddButton';
import { Link, useSearchParams } from 'react-router-dom';

function HomePageWrapper() {
	const [searchParams, setSearchParams] = useSearchParams();
	const keyword = searchParams.get('keyword');

	function changeSearchParams(keyword) {
		setSearchParams({ keyword });
	}

	return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getActiveNotes(),
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
		const activeNotes = filterNotes(this.state.notes, this.state.keyword);
		return (
			<div className='pt-10 text-center'>
				<h1 className='text-xl font-bold'>HeNotes</h1>
				<div className='flex items-center justify-between mb-3 mt-7 sm:mt-5'>
					<h2
						className={`px-6 py-1 font-bold rounded-md cursor-pointer ${
							activeNotes ? 'bg-dark-green text-white' : 'bg-white text-black'
						} `}
					>
						Active
					</h2>
					<Link to='/notes/archive' className={`px-6 py-1 font-bold rounded-md cursor-pointer `}>
						Archive
					</Link>
				</div>
				<SearchNote keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
				<div className='flex flex-col items-center justify-center '>
					{activeNotes.length ? (
						<NoteList notes={activeNotes} />
					) : (
						<p className='justify-center font-bold text-center mt-60'>
							You don&apos;t have any active records.
						</p>
					)}
				</div>
				<AddButton path='/notes/new' title='Add note' />
			</div>
		);
	}
}

HomePage.propTypes = {
	defaultKeyword: PropTypes.string,
	keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
