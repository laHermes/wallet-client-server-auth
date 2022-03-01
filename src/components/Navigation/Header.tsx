import React from 'react';
import WalletButton from '../WalletButton/WalletButton';
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';

//HEADER COMPONENT FOR NAVIGATION
const Header = () => {
	const { account, balance } = useWalletConnect();
	return (
		<header>
			<div className='py-2 px-4'>
				<div className='flex items-center flex-row justify-between'>
					<div className='inline-flex'>
						<span className='text-indigo-900 text-2xl font-black inter'>
							nft.
						</span>
					</div>

					<div className='flex flex-row gap-2 text-xl'>
						{account && (
							<>
								<div className='backdrop-blur-sm text-indigo-800 text-md font-semibold rounded-md px-4 py-1 bg-white/70'>
									Polygon Mumbai
								</div>
								<div className='backdrop-blur-sm text-indigo-800 text-md font-semibold rounded-md px-4 py-1 bg-white/70'>
									~{balance} mMATIC
								</div>
							</>
						)}
						<WalletButton />
					</div>
				</div>
			</div>
			<div className='w-full py-4'>
				<div className='max-w-md mx-auto'>
					<Tab.Group>
						<Tab.List className='flex p-1 space-x-1 bg-white/50 rounded-xl text-lg'>
							<Tab className='w-full py-2.5 leading-5 font-medium text-blue-700 rounded-lg hover:bg-white/90'>
								<Link to='/mint'>Mint</Link>
							</Tab>
							<Tab className='w-full py-2.5 leading-5 font-medium text-blue-700 rounded-lg hover:bg-white/90'>
								<Link to='/'>Collection</Link>
							</Tab>
							<Tab className='w-full py-2.5 leading-5 font-medium text-blue-700 rounded-lg hover:bg-white/90'>
								<Link to='/mint'>Yield Farming</Link>
							</Tab>
						</Tab.List>
					</Tab.Group>
				</div>
			</div>
		</header>
	);
};

export default Header;
