
export default {
	name: 'ResultPage',
	props: { result: { type: Object, required: true } },
	data: () => ({
		texto_finalidade: "finalidade",
		texto_dados: "coleta dados",
		browserEvent: true
	}),
	methods: {
		redirect() {
			this.browserEvent = false;
			this.$router.push("/")
		}
	},
	mounted() {

		if(this.result.politica_generica){
			document.getElementById("generic_flag").innerHTML="O sistema considerou essa política de privacidade genérica, tenha atenção ao avaliar a politica de privacidade"
			document.getElementById("generic_flag").style.color ="#FFC947"
		}else{
			document.getElementById("generic_flag").innerHTML="Informações extraidas diretamente da politica de privacidade o sistema apenas resumiu as mesmas. "
		}
		document.getElementById("dados_subtitle").innerHTML = this.result.coleta
		document.getElementById("finalidade_subtitle").innerHTML = this.result.finalidade
	},
	beforeRouteLeave(to, from, next) {
		if(this.browserEvent){
			next(false);
		}else{
			next();
		}
	}
}