import React, { useEffect } from 'react';
import Routes from './routes/Routing';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './services/web3/wallet/utils';
// import { useAutoWalletConnect } from './services/web3/wallet/useAutoConnect';

import { Provider } from 'react-redux';
import { store } from './redux/index';
import { mulitCall } from './services/web3/multicall/multicall';

function App() {
	useEffect(() => {
		mulitCall();
	}, []);

	return (
		<Provider store={store}>
			<Web3ReactProvider getLibrary={getLibrary}>
				<Routes />
			</Web3ReactProvider>
		</Provider>
	);
}

export default App;
