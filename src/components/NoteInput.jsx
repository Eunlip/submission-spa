import { Component } from 'react';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NoteInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: '',
		};

		this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
		this.onBodyChangeHandler = this.onBodyInputHandler.bind(this);
		this.onSaveHandler = this.onSaveHandler.bind(this);
	}

	onTitleChangeHandler(event) {
		this.setState({
			title: event.target.value,
		});
	}

	onBodyInputHandler(event) {
		this.setState({
			body: event.target.innerHTML,
		});
	}

	onSaveHandler(event) {
		event.preventDefault();
		this.props.addNote(this.state);
	}

	render() {
		return (
			<div className='relative'>
				<Link to='/notes' className='absolute top-3'>
					<IoArrowBackCircleSharp className='text-5xl text-x2' />
				</Link>
				<h1 className='pt-5 text-xl font-bold text-center'>HeNotes</h1>
				<div className='flex flex-col gap-5 my-16'>
					<div className='flex flex-col items-center justify-center mb-5'>
						<h1 className='mb-5 text-3xl font-bold text-center'>Create Note</h1>
						<div className='w-32 h-1 rounded-full bg-dark-green'></div>
					</div>
					<input
						className='w-full p-5 text-lg bg-transparent border active:outline-2 rounded-xl'
						type='text'
						placeholder='Your Title'
						onChange={this.onTitleChangeHandler}
					/>
					<div
						className={`h-auto p-5 pb-24 text-lg border focus:outline-2  rounded-xl ${
							this.state.body ? '' : 'placeholder'
						}`}
						contentEditable
						onInput={this.onBodyChangeHandler}
					></div>
				</div>
				<button type='submit' title='save' onClick={this.onSaveHandler}>
					<FaCheckCircle className='fixed text-6xl right-8 2xl:right-28 bottom-10 2xl:bottom-20' />
				</button>
			</div>
		);
	}
}

NoteInput.propTypes = {
	addNote: PropTypes.func.isRequired,
};

export default NoteInput;
