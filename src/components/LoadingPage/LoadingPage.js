//import io from 'socket.io-client';
import http from '../config/Http'
export default {
	name: 'LoadingPage',
	props: {
		url: { type: String, required: true }
	},
	data: () => ({
		curiosidades: ["Lembre-se é sempre importante ler as politicas de privacidade de qualquer serviço contratado",
		"Dados criados nos sites de empresas, como login e senha, também são consideradas dados pessoais e estão sob a jurisdição da LGPD",
		"Os dados continuam com a mesma proteção, mesmo após  dissolução da empresa",
		"Nunca tente pedir um café para a aplicação ele pode ficar nervosa"],
		increasing_pct: 0,
		id: undefined,
		socket: undefined,
		result: {},
		isModalConfirmationVisible: false,
		connected: false,		
		browserEvent: true,
		processError:false
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
			this.socket = await io("http://127.0.0.1:8000/");

			let self = this;

			if(!this.id)
			{
				return;
			}

			this.socket = new WebSocket('ws:/127.0.0.1:8000/ws/some_url/');

			this.socket.onerror = function(){
				self.socket.close();
				self.redirectInitial(true);
			}

			this.socket.onmessage = function(e){
				let data = JSON.parse(e.data);

				switch (data.message) {
					case 'Pode iniciar processamento':
						self.id = data.id;
						self.connected = true;
						self.processText();
						break;
					case 'Atualização do processamento':
						console.log(data)
						self.increasing_pct = data.value;
				}
			}		
		},
		processText() {
			console.log("process call")
			http.post("/api/process", { id: this.id, url: this.url }).then(response => {
				this.result = response.data;
				this.increasing_pct = 100;
				this.socket.close();
				}
				
				
			).catch(error=>{
				console.log(error)
				this.processError=true})
		},
		async cancel() {
			try
			{   
				http.post("/api/cancel", { id: this.socket.id, url: this.url }).then(response=>{console.log(response)})
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