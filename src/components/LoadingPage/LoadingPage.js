import io from 'socket.io-client';
import http from '../config/Http'
export default {
	name: 'LoadingPage',
	props: {
		url: { type: String, required: true }
	},
	data: () => ({
		curiosidades: ["fato 1", "fato 2"],
		increasing_pct: 0,
		socket: undefined,
		result: {},
		isModalConfirmationVisible: false,
		browserEvent: true
	}),
	methods: {
		redirectResult() {
			this.browserEvent = false;
			this.$router.push({ name: 'ResultPage', params: { result: this.result } });
		},
		redirectInitial(error) {
			this.browserEvent = false;
			if(error){
				this.$router.push({ name: 'InitialPage', params: { errorConnect: true, urlProps: this.url } });
			}else{
				this.$router.push("/");
			}
		},
		async createSocket() {

			this.socket = io("http://127.0.0.1:8000/")
			
			await this.socket.on("connect", () => {});
			
			await this.socket.on("connect_error", () => {
				//this.socket.disconnect();
				//this.redirectInitial(true);
			});
			await this.socket.on("estconnect", () => {
				this.processText();
			});
			await this.socket.on("mensagem", (data) => {
				this.increasing_pct = data.data
			});
		},
		processText() {
			http.post("/api/process", { id: this.socket.id, url: this.url }).then(response => {
				this.result = response.data

				this.socket = null;
			})
		},
		async cancel() {
			try
			{   
				//acessar endpoint para cancelar análise
				console.log("cancelada análise")
			}
			finally
			{
				//desconecar socket
				console.log("socket desconectado")

				this.isModalConfirmationVisible = false;

				this.redirectInitial(false);
			}
			
		}

	},
	async mounted() {

		if(!this.url){
			this.redirectInitial(false);
		}

		this.$nextTick(async function(){
			await this.createSocket();
		});

		window.onbeforeunload = function(){
			return '';
		}
	},
	beforeRouteLeave(to, from, next) {
		if(this.browserEvent){
			next(false);
			this.isModalConfirmationVisible = true;
		}else{
			next();
		}
	}
}