<template>
  <v-app>
    <v-app-bar
      app
      color="lighter_blue"
    
    >
      <v-toolbar-title class="white--text" style="font-size:28px" >Analisador de políticas de privacidade</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
   mounted(){
     console.log("There is a cofee is waiting for you")
   },
};
</script>
