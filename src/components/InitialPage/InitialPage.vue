<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" lg="8" md="12">
                <p >something</p> 
            </v-col>
        </v-row>
        <v-form  ref="form" v-model="valid" lazy-validation>   
            <v-row justify="center">
                    <v-col cols="9" lg="6" md="6">
                        
                        <v-text-field  :rules="[v => !!v || 'Url é requerida']"  label="Cole sua Url" solo></v-text-field> 
                        
                    </v-col>
                    <v-col cols="2"  lg="2" md="6" >
                            <v-btn elevation="2" color="swamp_green" @click="validate" class="white--text" large> 
                            Analisar
                            </v-btn>
                    </v-col>   
            </v-row>
        </v-form>    
        <v-row  justify="center">
            <v-col cols="2" lg="2" md="2" >
                <p style="font-size:20px" >COMO USAR?</p> 
            </v-col>
        </v-row> 
        <v-row  justify="center">
            <v-col cols="4" lg="3" md="6" >
                <v-row  justify="center">
                    <v-col  cols="2" lg="2" md="2" >
                        <div class="dot"><p class="center">1</p></div>
                    </v-col>
                    <v-col cols="9" lg="9" md="2" >
                       <p >  Cole ou escreva a URL da política na barra indicada </p>
                    </v-col>
                </v-row> 
            </v-col>
            <v-col cols="4" lg="3" md="2" >
                <v-row  justify="center">
                    <v-col cols="2" lg="2" md="2" >
                       <div class="dot"><p class="center">2</p></div>
                    </v-col>
                    <v-col cols="9" lg="9" md="2" >
                        Clique no botão analisar e é só esperar um pouquinho a análise acabar
                    </v-col>
                </v-row> 
            </v-col>
            <v-col cols="4" lg="3" md="2" >
                <v-row  justify="center">
                    <v-col cols="2" lg="2" md="2" >
                       <div class="dot"><p class="center">3</p></div>
                    </v-col>
                    <v-col cols="9" lg="9" md="2" >
                        Depois clique no botão ver Resultados e voilá, sua política estará analisada

                    </v-col>
                </v-row> 
            </v-col>
        </v-row> 
        <v-row>
            <v-col cols="6" md="6">
             <v-card color="light_grey" class="mx-auto"  max-width="800">
                <v-card-title class="text-h5">
                    LGPD
                </v-card-title>
                 <v-card-subtitle>
                     Listen to your favorite artists and albums whenever and wherever, online and offline.
                     </v-card-subtitle>
            </v-card>
            </v-col>
             <v-col cols="6" md="6">
             <v-card color="light_grey" class="mx-auto" max-width="800">
                <v-card-title class="text-h5">
                    Sobre nós
                </v-card-title>
                 <v-card-subtitle>
                     Trabalho de Conclusão de Curso de graduação de Sistemas de Informação da Universidade Federal Fluminense (UFF) 
                Repositório referente a API que processa políticas de privacidade (tanto em PDF quanto em HTML) indicando a finalidade, declarações 
                de dados coletados e se a política analisada é genérica.
Título: Um analisador para a avaliação de políticas de privacidade de acordo com a LGPD para proteção aos dados pessoais
                     </v-card-subtitle>
            </v-card>
            </v-col>
      
        </v-row> 
  </v-container>
</template>
<style src="../../assets/css/style.css"></style>
<script src="./InitialPage.js">
</script>