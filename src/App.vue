<template>
    <v-app>
        <v-app-bar
        app
        color="light-blue darken-4"
        >
        <v-avatar :tile="true">
            <img :src="require('@/assets/logo.png')" alt="logo">
        </v-avatar>
        <v-toolbar-title class="white--text title" style='font-size: 1.6em !important'>Segurindo analisador</v-toolbar-title>
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
    mounted(){
        console.log("There is a cofee is waiting for you")
    },
};
</script>
