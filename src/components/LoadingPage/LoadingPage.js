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
		connected:false		
	}),
	methods: {
		redirectResult() {
			this.$router.push({ name: 'ResultPage', params: { result: this.result } });
		},
		redirectInitial() {
			this.$router.push("/")
		},
		async createSocket() {
			this.socket = await io("https://tcc-analise-poli-priv.herokuapp.com/")
			this.socket.on("connect", () => {
                this.socket.on("connect_error", (err) => {
					console.log(`connect_error due to ${err.message}`);
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

				this.redirectInitial();
			}
			
		}

	},
	async mounted() {
		this.$nextTick(await this.createSocket())
	}
}