import SunIcon from '../components/Icons/SunIcon';
import CloudIcon from '../components/Icons/CloudIcon';
import CloudDrizzleIcon from '../components/Icons/CloudDrizzleIcon';
import CloudSnowIcon from '../components/Icons/CloudSnowIcon';
import CloudRainIcon from '../components/Icons/CloudRainIcon';
import CloudLightningIcon from '../components/Icons/CloudLightningIcon';

export const getWeatherIcon = (code) => {
	switch (code) {
		case 1000:
			return SunIcon;
		case 1003:
		case 1006:
		case 1009:
		case 1030:
		case 1135:
		case 1147:
			return CloudIcon;
		case 1063:
		case 1069:
		case 1072:
		case 1150:
		case 1153:
		case 1168:
		case 1171:
		case 1204:
		case 1207:
			return CloudDrizzleIcon;
		case 1066:
		case 1114:
		case 1117:
		case 1210:
		case 1213:
		case 1216:
		case 1219:
		case 1222:
		case 1225:
		case 1237:
		case 1249:
		case 1252:
		case 1255:
		case 1258:
		case 1261:
		case 1264:
			return CloudSnowIcon;
		case 1087:
		case 1273:
		case 1276:
		case 1279:
		case 1282:
			return CloudLightningIcon;
		case 1180:
		case 1183:
		case 1186:
		case 1189:
		case 1192:
		case 1195:
		case 1198:
		case 1201:
		case 1240:
		case 1243:
		case 1246:
			return CloudRainIcon;
		default:
			return SunIcon;
	}
};

export const getHomeScreenDate = (date) => {
	const today = new Date(date);

	// Date Format : Friday, 1st January 2020
	const dateFormat = new Intl.DateTimeFormat('en-GB', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const [{ value: weekday }, , { value: day }, , { value: month }, , { value: year }] = dateFormat.formatToParts(today);
	return `${weekday}, ${day} ${month} ${year}`;
};
// create a function that returns date in the format of '26 Dec'
export const getDate = (date) => {
	const today = new Date(date);
	const dateFormat = new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'short',
	});
	const [{ value: day }, , { value: month }] = dateFormat.formatToParts(today);
	return `${day} ${month}`;
};
