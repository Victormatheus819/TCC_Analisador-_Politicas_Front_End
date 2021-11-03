<template>
  <v-app>
    <v-app-bar
      app
      color="lighter_blue"
    
    >
      <v-toolbar-title class="white--text" style="font-size:28px" >Analisador de políticas de privacidade</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <InicialPage/>
    </v-main>
  </v-app>
</template>

<script>
import InicialPage from './components/InitialPage/InitialPage';

export default {
  name: 'App',

  components: {
    InicialPage,
  },

  data: () => ({
    //
  }),
};
</script>
