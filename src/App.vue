<template>
    <v-app>
        <v-app-bar
        app
        color="light-blue darken-4"
        >
        <v-avatar :tile="true">
            <img :src="require('@/assets/img/search.png')" alt="logo">
        </v-avatar>
        <v-toolbar-title class="white--text title" @click="goToHome()" style='font-size: 1.6em !important'>Segurindo</v-toolbar-title>
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
    components:{
        VLibras
    },
    data: () => ({
    //
    }),
    methods:{
      goToHome(){
          this.$router.push({name:'InitialPage'});
      }
    },
    mounted(){
        console.log("There is a cofee is waiting for you")
    },
};
</script>
