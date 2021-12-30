export default {
	name: 'ResultPage',
	props: { result: { type: Object, required: true }, url: { type: String, required: true } },
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
			document.getElementById("generic_flag").style.color ="#FFFF00"
		}
		else
		{
			document.getElementById("generic_flag").style.color ="#FFFFFF"
		}
		if(this.result.coleta == [])
		{
			document.getElementById("dados_subtitle").innerHTML = "<b class='sinalizer-red'>Essa política de privacidade não indica especificamente sobre dados coletados, por isso não foi possível extrair um conteúdo.</b>"
		}
		else
		{
			document.getElementById("dados_subtitle").innerHTML = this.result.coleta	
		}
		if(this.result.finalidade == [])
		{
			document.getElementById("finalidade_subtitle").innerHTML = "<b class='sinalizer-red'>Essa política de privacidade não indica especificamente sobre a finalidade de uso dos dados, por isso não foi possível extrair um conteúdo.</b>"
		}
		else
		{
			document.getElementById("finalidade_subtitle").innerHTML = this.result.finalidade
		}
	},
	beforeRouteLeave(to, from, next) {
		if(this.browserEvent && to.name!= "InitialPage")
		{
			console.log(to.name)
			next(false);
			
		}
		else
		{
			next();
		}
	}
}