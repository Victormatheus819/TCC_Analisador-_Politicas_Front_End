
export default {
    name: 'ResultPage',
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
    document.getElementById("dados_subtitle").innerHTML= "<b>sub</b>"
  }
  }