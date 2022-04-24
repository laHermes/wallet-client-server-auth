import { useState } from 'react';
import Account from './Account';
import AccountModal from 'components/Modal/Index';
import { shortenString } from 'utils/pureFunctions';
import useWalletConnect from 'services/web3/wallet/useWalletConnect';

const Index = () => {
	const [open, setOpen] = useState<boolean>(false);
	const { account, handleDisconnect } = useWalletConnect();

	return (
		<>
			<AccountModal
				open={open}
				setOpen={setOpen}
				account={account!}
				handleDisconnect={handleDisconnect}
			/>
			<Account
				title={shortenString(account!)}
				onClick={() => setOpen((state) => !state)}
			/>
		</>
	);
};

export default Index;
