
export default {
	name: 'ResultPage',
	props: { result: { type: Object, required: true } },
	data: () => ({
		texto_finalidade: "finalidade",
		texto_dados: "coleta dados"
	}),
	methods: {
		redirect() {
			this.$router.push("/")
		}
	},
	mounted() {

		if(this.result.politica_generica){
			document.getElementById("generic_flag").innerHTML="O sistema considerou essa política de privacidade genérica"
			document.getElementById("generic_flag").style.color ="#FFC947"
		}else{
			document.getElementById("generic_flag").innerHTML="O sistema não encontrou nenhuma irregularidade nessa politica de privicidade"
		}
		document.getElementById("dados_subtitle").innerHTML = this.result.coleta
		document.getElementById("finalidade_subtitle").innerHTML = this.result.finalidade
	}
}