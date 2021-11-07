import ProgressBar from 'vue-simple-progress'
export default {
    name: 'LoadingPage',
    components:{ProgressBar},   
    data: () => ({
     curiosidades:["fato 1","fato 2"] 
    }),
   methods:{
    redirect(){
      this.$router.push('/result-page') 
    }
  }
  }