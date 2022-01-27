import React from 'react';
import useWalletConnect from '../../services/web3/wallet/useWalletConnect';
import { SUPPORTED_WALLETS } from '../../services/web3/wallet/utils';

const Index = () => {
	const { account, handleWalletConnectButton } = useWalletConnect();

	return (
		<button
			className='px-2 py-1 border rounded-full'
			onClick={handleWalletConnectButton}>
			{account ? account : `Connect Wallet`}
		</button>
	);
};

export default Index;
