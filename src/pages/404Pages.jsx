import { Link } from 'react-router-dom';
import Illustration404 from '../assets/404-illustration.svg';
import { FaHome } from 'react-icons/fa';

export default function Pages404() {
	return (
		<div className='py-5 text-center'>
			<h1 className='text-xl font-bold text-center'>HeNotes</h1>
			<div className='flex flex-col items-center justify-center gap-10 my-32'>
				<img src={Illustration404} alt='' />
				<div className='flex flex-col items-center justify-center gap-5'>
					<h2 className='text-xl font-bold capitalize'>Ooops! page not found</h2>
					<p className='text-sm leading-7 text-center text-secondary'>
						Sorry, we couldn&apos;t find the page <br /> you where looking for
					</p>
				</div>
				<Link to='/' className='inline-flex items-center gap-2 px-5 py-2 text-white duration-300 rounded-full bg-dark-green'>
					<FaHome className='text-xl'/>
					<p className='font-bold'>Go Back</p>
				</Link>
			</div>
		</div>
	);
}
