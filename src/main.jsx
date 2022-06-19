import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Splash from './components/Splash/Splash';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import Settings from './components/Settings/Settings';
import Details from './components/Details/Details';
import ForeCast from './components/ForeCast/ForeCast';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path='/forecast' component={ForeCast} />
				<Route path='/settings' component={Settings} />
				<Route path='/location' component={Location} />
				<Route path='/details' component={Details} />
				<Route path='/home' component={Home} />
				<Route exact path='/' component={Splash} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>
);
