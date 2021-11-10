import ProgressBar from 'vue-simple-progress'
import io from 'socket.io-client';
import http from '../config/Http'
export default {
    name: 'LoadingPage',
    components:{ProgressBar}, 
    props:{
    url: {type:String, required:true}
      }, 
    data: () => ({
     curiosidades:["fato 1","fato 2"] ,
     increasing_pct:10,
     socket:{}
    }),
   methods:{
    redirect(){
      this.$router.push('/result-page') 
    },
    async createSocket(){
      this.socket = io("http://127.0.0.1:8000/")
      await this.socket.on("connect", () => {
        console.log(this.socket.id)
      })
      
  }
   
  },
   async mounted(){
   await this.createSocket()
   await http.post("/api/process",{id:this.socket.id ,url:this.url}).then(response=>console.log(response))
  },

  }