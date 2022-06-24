import axios from 'axios';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import ForeCast from './components/ForeCast/ForeCast';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import NoMatch from './components/NoMatch/NoMatch';
import Settings from './components/Settings/Settings';
import { weather } from './globalAtom';
import { useWeather } from './hooks/useWeather';

function App() {
	const [weatherData, setWeatherData] = useAtom(weather);
	const { data: apiData, loading, error } = useWeather();

	useEffect(() => {
		if (apiData) {
			setWeatherData({ data: apiData, loading, error });
		}
	}, [apiData]);

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/details' component={() => <Details {...weatherData} />} />
				<Route path='/forecast' component={() => <ForeCast {...weatherData} />} />
				<Route path='/settings' component={Settings} />
				<Route path='/location' component={Location} />
				<Route path='/home' component={() => <Home {...weatherData} />} />
				<Route exact path='/' component={() => <Home {...weatherData} />} />
				<Route exact path='*' component={NoMatch} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
