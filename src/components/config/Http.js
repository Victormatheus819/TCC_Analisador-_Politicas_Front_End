import axios from 'axios';

const http = axios.create({
	baseURL: "https://tcc-analise-poli-priv.herokuapp.com/",
	timeout: 100000
});

export default http;