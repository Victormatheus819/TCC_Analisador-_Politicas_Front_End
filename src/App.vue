<template>
  <v-app>
    <v-app-bar
      app
      color="lighter_blue"
    
    >
      <v-toolbar-title class="white--text title">Analisador de políticas de privacidade</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      
    </v-main>
    <VLibras />
  </v-app>
</template>

<script>
import { VLibras } from '@vue-a11y/vlibras'
export default {
  name: 'App',
  components:{VLibras},
  data: () => ({
    //
  }),
   mounted(){
     console.log("There is a cofee is waiting for you")
   },
};
</script>
