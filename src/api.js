import axios from 'axios';

export default {
	getInfoData: () => {
		return axios.get('/infoData.json');
	}
};
