import React from 'react';

//hooks
import useWalletConnect from 'services/web3/wallet/useWalletConnect';

// svgs
import polygonLogo from 'assets/polygon-logo-circle.png';
import meshLogo from 'assets/mesh-second-logo.png';
import Logo from './Logo';

//components
import Links from '../Header/Links';
import WalletButton from 'components/Wallet/WalletButton/Index';
import BaseAccount from 'components/Account/Index';
import NetworkInfo from './NetworkInfo';
import { Button } from 'components/Elements/Button/Button';
import { shortenString } from 'utils/pureFunctions';

const Navigation = () => {
	const { account } = useWalletConnect();

	return (
		<div className='headerTop'>
			<div className='inline-flex gap-12'>
				<Logo />
				<Links />
			</div>
			<div className='flex flex-row gap-2'>
				<NetworkInfo />
				<Account />
			</div>
		</div>
	);
};

export default Navigation;

const withConditionalRendering = (Component: React.FC) => (props: any) => {
	const { account } = useWalletConnect();
	if (!account) return <WalletButton title='Connect Wallet' />;

	return <Component {...props} />;
};
const Account = withConditionalRendering(BaseAccount);
