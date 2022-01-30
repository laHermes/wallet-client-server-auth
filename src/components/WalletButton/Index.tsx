import React from 'react';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';
import { SUPPORTED_WALLETS } from '../../services/web3/wallet/utils';

const Index = () => {
	const { account, handleWalletConnectButton, handleConnect } =
		useWalletConnect();

	return (
		<>
			{SUPPORTED_WALLETS.map((wallet, index) => {
				return (
					<div key={index}>
						<button
							className='text-indigo-300'
							onClick={() => handleConnect(wallet)}>
							{account ? account : wallet.name}
						</button>
					</div>
				);
			})}
		</>
	);
};

export default Index;
