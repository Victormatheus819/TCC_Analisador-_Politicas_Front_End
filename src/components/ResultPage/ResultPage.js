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

		if(!this.result)
		{
			this.redirect();
		}

		window.onbeforeunload = function()
		{
			return '';
		}

		if(this.result.politica_generica)
		{
			document.getElementById("generic_flag").innerHTML="O sistema considerou essa política de privacidade genérica! Tenha atenção ao avaliar a politica de privacidade."
			document.getElementById("generic_flag").style.color ="#FFFF00"
		}
		else
		{
			document.getElementById("generic_flag").innerHTML="Informações extraidas diretamente da política de privacidade. O sistema apenas resumiu as informações."
			document.getElementById("generic_flag").style.color ="#FFFFFF"
		}
		if(this.result.coleta == []){
			document.getElementById("dados_subtitle").innerHTML = "Essa política de privacidade não indica especificamente sobre dados coletados, por isso não possivel extrair um conteúdo."
		}else{
			document.getElementById("dados_subtitle").innerHTML = this.result.coleta	
		}
		if(this.result.finalidade == []){
			document.getElementById("finalidade_subtitle").innerHTML = "Essa política de privacidade não indica especificamente sobre a finalidade de uso dos dados, por isso não foi possivel extrair um conteúdo."
		}else{
			document.getElementById("finalidade_subtitle").innerHTML = this.result.finalidade
		}
	},
	beforeRouteLeave(to, from, next) {
		if(this.browserEvent)
		{
			next(false);
		}
		else
		{
			next();
		}
	}
}