import { Link } from 'react-router-dom';
import illustration from '../assets/illustration-2.svg';

export default function WelcomePage() {
	return (
		<div className='py-5 text-center'>
			<h1 className='text-xl font-bold text-center'>HeNotes</h1>
			<div className='flex flex-col items-center justify-center mb-20'>
				<img src={illustration} alt='illustration' />
				<div className='flex flex-col items-center justify-center gap-5'>
					<h2 className='text-3xl font-bold capitalize'>keep your notes</h2>
					<p className=' text-secondary dark:text-[#cecece]'>
						Take notes, reminders, set targets, <br /> collect resources, and secure privacy
					</p>
				</div>
			</div>
			<Link
				to='/login'
				className='px-20 py-3 font-bold text-white capitalize rounded-full hover:bg-light-green bg-dark-green'
			>
				get started
			</Link>
		</div>
	);
}


