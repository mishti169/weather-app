import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import ForeCast from './components/ForeCast/ForeCast';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import NoMatch from './components/NoMatch/NoMatch';
import Settings from './components/Settings/Settings';
import { useWeather } from './hooks/useWeather';

function App() {
	const weatherData = useWeather();

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/details' component={() => <Details {...weatherData} />} />
				<Route path='/forecast' component={() => <ForeCast {...weatherData} />} />
				<Route path='/settings' component={() => <Settings {...weatherData} />} />
				<Route path='/location' component={Location} />
				<Route path='/home' component={() => <Home {...weatherData} />} />
				<Route exact path='/' component={() => <Home {...weatherData} />} />
				<Route exact path='*' component={NoMatch} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
