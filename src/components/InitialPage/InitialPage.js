export default {
    name: 'InicialPage',
    
    data: () => ({
     flag : true 
    }),
    
   mounted(){
     console.log("There is a cofee is waiting for you")
   },
   methods:{
    redirect(){
      this.$router.push('/loading-page') 
    }
  }
  }