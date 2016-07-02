import axios from 'axios';

export default {
	getInfoData: () => {
		return axios.get('/infoData.json');
	},
	editInfoData: (tabIndex, rowIndex, newData) => {
		return axios.post('/infoData.json', {
			tabIndex,
			rowIndex,
			newData
		});
	},
	addInfoData: (tabIndex) => {
		return axios.post('/infoData.json', {
			tabIndex,
			newRow: true
		});
	}
};
