
export default {
    name: 'InicialPage',
    data: () => ({
     flag : true ,
     valid: true,
     url:""
    }),
   methods:{
    validate(){
      if(this.$refs.form.validate()){
        this.url= document.getElementById("url").value;
        this.$router.push({ name: 'LoadingPage', params: { url: this.url } }) 
      }
    },
    
}
}