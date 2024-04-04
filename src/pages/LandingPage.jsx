import logoDarkMode from '../assets/images/logo.svg';
import logoLightMode from '../assets/images/logo-light-mode.svg';
import heroImage from '../assets/images/Illustration-hero_1.svg';
import rectangle from '../assets/images/rectangle-10.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts';

export default function LandingPage() {
	const [isLoading, setIsLoading] = useState(false);
	const { theme } = useContext(ThemeContext);
	const navigate = useNavigate();

	const handleClick = () => {
		setIsLoading(!isLoading);
		setTimeout(() => {
			setIsLoading(isLoading);
			navigate('/welcomePage');
		}, 2000);
	};

	return (
		<header>
			<div className='relative z-20'>
				<img
					className='md:mx-0'
					src={theme === 'light' ? logoLightMode : logoDarkMode}
					alt='brand logo'
				/>
			</div>
			<div className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
				<div className='relative z-20 flex flex-col items-center gap-3 mt-10 md:items-start'>
					<h1 className='flex flex-col gap-2 text-4xl font-semibold tracking-wide text-center lg:gap-5 md:text-start lg:text-5xl sm:leading-normal text-neutral-100'>
						Keep Your Ideas <span> with HeNotes </span>
					</h1>
					<p className='md:text-base lg:text-xl pt-5 text-sm font-medium text-[#9ca3af]'>
						Simplifying Note-Taking for You
					</p>
					<Link
						to='/welcomePage'
						className='mt-10 font-medium cursor-pointer rounded-lg py-2 px-6 text-sm sm:text-lg bg-dark-green text-[#F5F5F5] hover:bg-light-green'
						onClick={(e) => {
							e.preventDefault();
							handleClick();
						}}
					>
						Try Now !
					</Link>
					{isLoading && (
						<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
							<div className='flex items-center justify-center h-screen space-x-2 '>
								<span className='sr-only'>Loading...</span>
								<div className='h-3 w-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
								<div className='h-3 w-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
								<div className='w-3 h-3 bg-white rounded-full animate-bounce'></div>
							</div>
						</div>
					)}
				</div>
				<img
					className='relative left-0 z-10 mt-10 sm:right-0 w-96 md:w-80 lg:w-auto'
					src={heroImage}
					alt='hero'
				/>
				<div className='absolute top-0 right-0 z-0'>
					<img src={rectangle} alt='rectangle' />
				</div>
			</div>
		</header>
	);
}
