import illustration from '../assets/illustration-1.svg';

export default function WelcomePages() {
	return (
		<div className='py-5 text-center'>
			<h1 className='text-xl font-bold text-center'>HeNotes</h1>
			<div className='flex flex-col items-center justify-center gap-10 my-32'>
				<img src={illustration} alt='illustration' />
				<div className='flex flex-col items-center justify-center gap-5'>
					<h2 className='text-3xl font-bold capitalize'>keep your notes</h2>
					<p className='text-sm text-center text-secondary'>
						Take notes, reminders, set targets, <br/> collect resources, and secure privacy
					</p>
				</div>
			</div>
      <button className='px-20 py-3 font-bold text-white capitalize rounded-full bg-dark-green'>get started</button>
		</div>
	);
}
