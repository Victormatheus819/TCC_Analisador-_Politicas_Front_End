import http from '../config/Http'
import {curiosityList} from './curiosidade.js';

export default {
	name: 'LoadingPage',
	props: {
		url: { type: String, required: true }
	},
	data: () => ({
		curiosities: [],
		increasing_pct: 0,
		id: undefined,
		socket: undefined,
		result: {},
		isModalConfirmationVisible: false,
		connected: 0,		
		browserEvent: true,
		processError:false,
		subtitle_text: "Espere até o carregamento da análise estar concluído",
		errorMessage: "Ocorreu um erro no processamento do texto!",
		modalTitle: "Erro no sistema!"
	}),
	methods: {
		redirectResult() {
			this.browserEvent = false;
			this.$router.push({ name: 'ResultPage', params: { result: this.result } });
		},
		redirectInitial(error) {
			this.browserEvent = false;
			
			
			if(error)
			{
				this.$router.push({ name: 'InitialPage', params: { errorConnect: !this.processError, urlProps: this.url } });
			}
			else
			{
				this.$router.push("/");
			}
		},
		async createSocket() {

			let self = this;

			if(!this.url || this.increasing_pct == 100)
			{
				return;
			}
            
			this.socket = new WebSocket('wss:/tcc-analise-poli-priv.herokuapp.com/ws/connect/');
       
			this.socket.onerror = function()
			{
				self.socket.close();
				self.manualInclusion()
			}

			this.socket.onmessage = function(e)
			{
				let data = JSON.parse(e.data);

				switch (data.message) {
					case 'Pode iniciar processamento':
						self.id = data.id;
						self.connected = 1;
						self.processText();
						break;
					case 'Atualização do processamento':
						self.increasing_pct = data.value;
				}
			}		
		},
		async processText() {
			http.post("/api/process", { id: this.id, url: this.url }).then(
				async response => {

					this.result = response.data;

					await new Promise(resolve => setTimeout(resolve, 3000));
                    
					this.increasing_pct = 100;
					this.subtitle_text = "Seu processamento está completo";
					document.getElementById('notifi').play();
					if(this.socket != undefined)
					{
						this.socket.close();
					}						
				}	
			).catch(
				(error) => 
				{
					if(error.response.data)
					{
						this.errorMessage = error.response.data.error;

						if(error.response.status === 418)
						{
							this.modalTitle = "CAFÉ NÃO!!!"
						}
					}
					this.processError = true;
				}
			)
		},
		async manualInclusion(){
			await http.post("/socket/manual-inclusion").then(
				response=>
				{
					this.id = response.data.id;
					this.connected = 1;
					
					this.processText();

					this.increasing_pct = this.increasing_pct + 50;
				}
			).catch(
				() =>
				{
					this.redirectInitial(true);
				}
			)

		},
		async cancel() {
			try
			{   
				if(this.increasing_pct != 100)
				{
					http.post("/api/cancel", { id: this.socket.id, url: this.url }).then(response=>{console.log("Análise cancelada: " + response.data.success)})
				}
				
			}
			finally
			{
				if(this.socket != undefined)
				{
					this.socket.close();
				}

				this.isModalConfirmationVisible = false;

				this.redirectInitial(false);
			}
		}
	},
	async mounted() {

		if(!this.url || this.increasing_pct == 100)
		{
			this.redirectInitial(false);
		}

		this.curiosities = await curiosityList();

		this.$nextTick(async function()
		{
			await this.createSocket();
		});

		window.onbeforeunload = function()
		{
			return '';
		}
	},
	beforeRouteLeave(to, from, next) {
		if(this.browserEvent)
		{
			next(false);
			this.isModalConfirmationVisible = true;
		}
		else
		{
			next();
		}
	},
	beforeDestroy() {
		if(this.socket != undefined)
		{
			this.socket.close();
		}
	}
}