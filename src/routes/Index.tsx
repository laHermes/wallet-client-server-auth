import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// PAGES
import Board from '../components/views/BoardView/BoardView';
import Navigation from 'components/Navigation/Index';
import Collections from 'components/views/MintView/MintView';
import Mint from 'components/views/MintView/MintView';

const Index = () => {
	return (
		<Router>
			<Navigation>
				<Routes>
					<Route path='/' element={<Board />} />
					<Route path='/mint' element={<Mint />} />
					<Route path='/collections' element={<Collections />} />
				</Routes>
			</Navigation>
		</Router>
	);
};

export default Index;