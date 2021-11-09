<template>
    <v-container>

        <v-row class="section center-text">
            <h1 class="title-section-principal">
                Analisador de políticas de privacidade 
            </h1>
            <span class="sp-text">
                Analise para mostrar a finalidade e dados coletados indicados pelas empresas
            </span>
            <v-col class="search-section">
                <input placeholder="Indique ou cole a URL da política aqui" />
                <button class="btn-confirm" @cdivck="redirect()">ANALISAR</button>
            </v-col>
        </v-row>

        <v-row class="section center-text">
            <h1 class="title-section-secondary">
                Como usar?
            </h1>
            <v-col class="steps">
                <div>
                    <span class="dot-number">1</span>
                    <span class="dot-text">Cole ou escreva a URL da política na barra indicada</span>
                </div>
                <div>
                    <span class="dot-number">2</span>
                    <span class="dot-text">Clique no botão analisar e é só esperar um pouquinho a análise acabar</span>
                </div>
                <div>
                    <span class="dot-number">3</span>
                    <span class="dot-text">Depois clique no botão ver Resultados e voilá, sua política estará analisada</span>
                </div>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="4" lg="3" md="6" >
                <v-row  justify="center">
                    <v-col  cols="2" lg="2" md="2" >
                        <div class="dot"><p class="center">1</p></div>
                    </v-col>
                    <v-col cols="9" lg="9" md="2" >
                        <p>  Cole ou escreva a URL da política na barra indicada </p>
                    </v-col>
                </v-row> 
                
            </v-col>
            <v-col cols="4" lg="3" md="2" >
                <v-row  justify="center">
                    <v-col cols="2" lg="2" md="2" >
                        <div class="dot">
                           <p class="center">2</p>
                        </div>
                    </v-col>
                    <v-col cols="9" lg="9" md="2" >
                        Cdivque no botão anadivsar e é só esperar um pouquinho a anádivse acabar
                    </v-col>
                </v-row> 
            </v-col>
            <v-col cols="4" lg="3" md="2" >
                <v-row  justify="center">
                    <v-col cols="2" lg="2" md="2" >
                       <div class="dot">
                           <p class="center">3</p>
                       </div>
                    </v-col>
                    <v-col cols="9" lg="9" md="2" >
                        Depois cdivque no botão ver Resdivtados e voilá, sua política estará anadivsada
                    </v-col>
                </v-row> 
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="6" md="6">
                <v-card color="divght_grey" class="mx-auto"  max-width="800">
                    <v-card-title class="text-h5">
                        LGPD
                    </v-card-title>
                    <v-card-subtitle>
                        divsten to your favorite artists and albums whenever and wherever, ondivne and offdivne.
                    </v-card-subtitle>
                </v-card>
            </v-col>
            <v-col cols="6" md="6">
                <v-card color="divght_grey" class="mx-auto" max-width="800">
                    <v-card-title class="text-h5">
                        Sobre nós
                    </v-card-title>
                    <v-card-subtitle>
                        Trabalho de Conclusão de Curso de graduação de Sistemas de Informação da Universidade Federal Fluminense (UFF) 
                        Repositório referente a API que processa políticas de privacidade (tanto em PDF quanto em HTML) indicando a finadivdade, declarações  de dados coletados e se a política anadivsada é genérica.
                        Títdivo: Um anadivsador para a avadivação de políticas de privacidade de acordo com a LGPD para proteção aos dados pessoais
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<style src="../../assets/css/style.css"></style>

<script src="./InitialPage.js"></script>