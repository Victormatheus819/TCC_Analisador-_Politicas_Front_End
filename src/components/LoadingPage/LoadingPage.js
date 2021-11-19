//import io from 'socket.io-client';
import http from '../config/Http'
export default {
	name: 'LoadingPage',
	props: {
		url: { type: String, required: true }
	},
	data: () => ({
		curiosidades: ["Lembre-se é sempre importante ler as politicas de privacidade de qualquer serviço contratado", "fato 2","Nunca tente pedir um café para a aplicação ele pode ficar nervosa"],
		increasing_pct: 0,
		id: undefined,
		socket: undefined,
		result: {},
		isModalConfirmationVisible: false,
		connected: false,		
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

			let self = this;

			this.socket = new WebSocket('ws:/127.0.0.1:8000/ws/some_url/');

			this.socket.onmessage = function(e){
				let data = JSON.parse(e.data);

				console.log(data)

				switch (data.message) {
					case 'Pode iniciar processamento':
						self.id = data.id;
						self.connected = true;
						self.processText();
						break;
					case 'Atualização do processamento':
						self.increasing_pct = data.value;
						console.log('att: ' + data)
				}
				
			}		
		},
		processText() {
			console.log("process call")
			http.post("/api/process", { id: this.id, url: this.url }).then(response => {
				this.result = response.data
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