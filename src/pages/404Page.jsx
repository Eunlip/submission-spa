import Illustration404 from '../assets/404-illustration2.svg';

export default function Page404() {
	return (
		<div className='text-center'>
			<div className='flex flex-col items-center justify-center gap-10 my-32'>
				<img src={Illustration404} alt='' />
				<div className='flex flex-col items-center justify-center gap-5'>
					<h2 className='text-2xl font-bold capitalize'>Oops! page not found.</h2>
					<p className='text-lg leading-7 text-center text-secondary dark:text-[#cecece]'>
						Sorry, we couldn&apos;t find the page <br /> you where looking for.
					</p>
				</div>
			</div>
		</div>
	);
}
