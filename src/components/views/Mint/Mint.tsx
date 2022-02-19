import React from 'react';

const Mint = () => {
	return (
		<div className='flex flex-col justify-between  max-w-screen-sm mx-auto'>
			<div className='bg-zinc-900/95 text-indigo-100 rounded-3xl mt-12 shadow-sm'>
				<div className='flex flex-col gap-3 p-3'>
					<div className='w-full p-3 rounded-xl bg-teal-900/40 text-teal-300/70 font-black'>
						<p> Mint 1 NFT + get 1000 LTK tokens</p>
					</div>
					<div className='w-full p-3 rounded-xl bg-teal-900/20 text-emerald-300/60 font-black text-center'>
						<p> PRICE 0.05 mMATIC</p>
					</div>

					<div className='bg-zinc-800 px-3 py-2 flex flex-row justify-between gap-2 rounded-xl'>
						<input
							type='text'
							className='bg-inherit text-indigo-50 text-2xl font-bold rounded-xl flex-0'
							value={0}
						/>
						<p className='bg-zinc-700/75 px-3 py-2 rounded-xl font-bold'>
							NFT(s)
						</p>
					</div>
					<div className='bg-zinc-800 p-2 flex flex-row gap-2 rounded-xl'>
						<p className='bg-inherit text-indigo-50 text-2xl font-bold rounded-xl flex-1'>
							0
						</p>
						<p className='bg-zinc-700/75 px-3 py-2 rounded-xl font-bold'>
							LTK tokens
						</p>
					</div>
					<div className='flex flex-row justify-between gap-2 '>
						<button className='bg-zinc-800 text-indigo-50 leading-none text-4xl font-black px-3 py-1 rounded-xl flex-1'>
							+
						</button>
						<button className='bg-zinc-800 text-indigo-50 leading-none text-4xl font-black px-3 py-1 rounded-xl flex-1'>
							-
						</button>
					</div>
					<button className='bg-sky-900/40 text-sky-600/70 py-4 font-black w-full rounded-3xl text-lg'>
						Mint
					</button>
				</div>
			</div>
			<div className='flex flex-row p-3 text-indigo-200 font-bold gap-2'>
				<p>OPENSEA</p>
				<p>PolyScan</p>
			</div>
		</div>
	);
};

export default Mint;
