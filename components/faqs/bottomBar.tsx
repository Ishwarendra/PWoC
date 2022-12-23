export const BottomBar = () => {
	return (
		<div className='bottom-bar glassmorphism bg-[rgba(55,65,81,0.3)] py-8 px-7 rounded-2xl flex flex-col gap-[20px] text-center items-center justify-center'>
			<span className='text-2xl'>Still have questions?</span>
			<p className='text-gray-200'>
				Can’t find the answer you’re looking for? Please chat to our
				friendly team.
			</p>
			<button className='glassmorphism py-3 px-7 w-fit border border-solid border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition'>
				Get in touch
			</button>
		</div>
	);
};
