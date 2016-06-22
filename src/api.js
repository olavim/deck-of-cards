import axios from 'axios';

export default {
	getInfoData: () => {
		return axios.get("http://localhost:8888/infodata");
	}
}
