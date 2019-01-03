import Axios from 'axios';

const KEY = 'AIzaSyAf-45x6fRTL1Epq7mhvOas00gHTbRmQpw';

export default Axios.create({
	baseURL : 'https://www.googleapis.com/youtube/v3',
	params: {
		part:'snippet',
		maxResults: 5,
		key: KEY,
	}
});


