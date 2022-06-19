import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './components/Details/Details';
import ForeCast from './components/ForeCast/ForeCast';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import Settings from './components/Settings/Settings';
import NoMatch from './components/NoMatch/NoMatch';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path='/details' component={Details} />
				<Route path='/forecast' component={ForeCast} />
				<Route path='/settings' component={Settings} />
				<Route path='/location' component={Location} />
				<Route path='/home' component={Home} />
				<Route exact path='/' component={Home} />
				<Route exact path='*' component={NoMatch} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>
);
