export default {
    name: 'LoadingPage',
    
    data: () => ({
     flag : true 
    }),
   methods:{
    redirect(){
      this.$router.push('Home') 
    }
  }
  }