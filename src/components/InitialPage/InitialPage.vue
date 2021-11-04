<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" lg="8" md="12">
                <v-text-area  solo>Trabalho de Conclusão de Curso de graduação de Sistemas de Informação da Universidade Federal Fluminense (UFF) 
                Repositório referente a API que processa políticas de privacidade (tanto em PDF quanto em HTML) indicando a finalidade, declarações 
                de dados coletados e se a política analisada é genérica.
Título: Um analisador para a avaliação de políticas de privacidade de acordo com a LGPD para proteção aos dados pessoais</v-text-area> 
            </v-col>
        </v-row>   
        <v-row justify="center">
            <v-col cols="9" lg="6" md="6">
                <v-text-field  label="Cole sua Url" solo></v-text-field> 
            </v-col>
            <v-col cols="2"  lg="2" md="6" >
                    <v-btn elevation="2" color="swamp_green" class="white--text" large> 
                    Analisar
                    </v-btn>
            </v-col>
        </v-row>
        <v-row  justify="center">
            <v-col cols="2" lg="2" md="2" >
                <v-text-area style="font-size:20px" >COMO USAR?</v-text-area> 
            </v-col>
        </v-row> 
        <v-row  justify="center">
            <v-col cols="4" lg="3" md="6" >
                <v-row  justify="center">
                    <v-col  cols="2" lg="2" md="2" >
                        <p class="dot">1</p>
                    </v-col>
                    <v-col cols="6" lg="9" md="2" >
                       <v-text-area >  Cole ou escreva a URL da política na barra indicada </v-text-area>
                    </v-col>
                </v-row> 
            </v-col>
            <v-col cols="4" lg="3" md="2" >
                <v-row  justify="center">
                    <v-col cols="2" lg="2" md="2" >
                       <p class="dot"> 2</p>
                    </v-col>
                    <v-col cols="2" lg="9" md="2" >
                        Clique no botão analisar e é só esperar um pouquinho a análise acabar
                    </v-col>
                </v-row> 
            </v-col>
            <v-col cols="4" lg="3" md="2" >
                <v-row  justify="center">
                    <v-col cols="2" lg="2" md="2" >
                       <p class="dot">3</p>
                    </v-col>
                    <v-col cols="2" lg="9" md="2" >
                        Depois clique no botão ver Resultados e voilá, sua política estará analisada

                    </v-col>
                </v-row> 
            </v-col>
        </v-row> 
  </v-container>
</template>
<style src="../../assets/css/style.css"></style>
<script src="./InitialPage.js">
</script>