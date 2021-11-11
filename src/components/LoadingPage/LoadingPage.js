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
      increasing_pct:0,
      socket:{},
      result:{}
    }),
   methods:{
    redirect(){
      this.$router.push({ name: 'ResultPage', params: { result: this.result } })
    },
    async createSocket(){
      this.socket = io("http://127.0.0.1:8000/")
      await this.socket.on("connect", () => {
        
      })
      await this.socket.on("estconnect", () => {
        this.processText();
      })
      await this.socket.on("mensagem", (data) => {
        this.increasing_pct = data.data
      })
  },
    processText(){
     http.post("/api/process",{id:this.socket.id ,url:this.url}).then(response =>{
      console.log(response.data)
      this.result = response.data

      this.socket = null;
    })
   }
   
  },
   async mounted(){
    this.$nextTick(await this.createSocket())
  
  },

  }