
export default {
    name: 'InicialPage',
    data: () => ({
     flag : true ,
     valid: true,
    }),
   methods:{
    validate(){
      if(this.$refs.form.validate()){
        this.$router.push('/loading-page') 
      }
    }
  }
  }