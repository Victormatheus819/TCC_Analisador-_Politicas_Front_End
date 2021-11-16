import axios from 'axios';

const http = axios.create({
	baseURL: "https://tcc-analise-poli-priv.herokuapp.com/",
	timeout: 90000
});

export default http;