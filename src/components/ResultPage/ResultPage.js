
export default {
    name: 'ResultPage',
    props:{result: {type:Object, required:true}},
    data: () => ({
     texto_finalidade:"finalidade",
     texto_dados: "coleta <b>dados</b>"
    }),
   methods:{
    redirect(){
      this.$router.push("/")
    }
  },
  mounted(){
    document.getElementById("dados_subtitle").innerHTML = this.result.coleta
    document.getElementById("finalidade_subtitle").innerHTML = this.result.finalidade
  }
  }