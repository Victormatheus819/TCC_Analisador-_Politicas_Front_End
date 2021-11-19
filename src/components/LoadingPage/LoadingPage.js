import io from 'socket.io-client';
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
		socket: undefined,
		result: {},
		isModalConfirmationVisible: false,
		processError:false,
		connected:false, 
		processid:""		
	}),
	methods: {
		redirectResult() {
			this.$router.push({ name: 'ResultPage', params: { result: this.result } });
		},
		redirectInitial() {
			this.$router.push("/")
		},
		async createSocket() {
			this.socket = await io("http://127.0.0.1:8000/");
			this.socket.on("connect", () => {
                this.socket.on("connect_error", (err) => {
					console.log(`connect_error due to ${err.message}`)
					//tratar erro de conexão
				});
				this.socket.on("estconnect", () => {
					console.log("process is begining")
					this.connected = true
					this.processText();
				});
				this.socket.on("mensagem", (data) => {
					this.increasing_pct = data.data
				});
				this.socket.on("disconnect", () => {
					console.log("desconnected")
			});
				
			})
			
	},
		processText() {
			http.post("/api/process", { id: this.socket.id, url: this.url }).then(response => {
					this.result = response.data
					this.socket = null;
	
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

				this.redirectInitial();
			}
			
		},

		async createId(){
			http.post('socket/manual-inclusion').then(response =>{
				
				this.processid = response.data.id
			})
		}

	},
	async mounted() {
		// await this.createId()
		// await this.pr
		this.$nextTick(await this.createSocket())
	}
}