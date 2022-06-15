import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Splash from './components/Splash/Splash';
import Location from './components/Location/Location';
import Settings from './components/Settings/Settings';
import Details from './components/Details/Details';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path='/settings' component={Settings} />
				<Route path='/location' component={Location} />
				<Route path='/details' component={Details} />
				<Route path='/home' component={App} />
				<Route exact path='/' component={Splash} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>
);
