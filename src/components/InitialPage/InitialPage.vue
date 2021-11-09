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

        <v-row class="section center-text">
            <h1 class="title-section-secondary">
                Saiba mais...
            </h1>
            <v-col class="steps">
                <div>
                    <v-card color="divght_grey" class="box-text" elevation="18" shaped>
                    <v-card-title class="text-h4">
                        LGPD
                    </v-card-title>
                    <v-card-subtitle class="text-body-1">
                        divsten to your favorite artists and albums whenever and wherever, ondivne and offdivne.
                    </v-card-subtitle>
                </v-card>
                </div>
                <div>
                    <v-card color="divght_grey" class="box-text" elevation="18" shaped>
                    <v-card-title class="text-h4">
                        Sobre nós
                    </v-card-title>
                    <v-card-subtitle class="text-body-1">
                        Trabalho de Conclusão de Curso de graduação de Sistemas de Informação da Universidade Federal Fluminense (UFF) 
                        Repositório referente a API que processa políticas de privacidade (tanto em PDF quanto em HTML) indicando a finadivdade, declarações  de dados coletados e se a política anadivsada é genérica.
                        Títdivo: Um anadivsador para a avadivação de políticas de privacidade de acordo com a LGPD para proteção aos dados pessoais
                    </v-card-subtitle>
                </v-card>
                </div>
            </v-col>
        </v-row>


        <v-row>
            
        </v-row>

    </v-container>
</template>

<style src="../../assets/css/style.css"></style>

<script src="./InitialPage.js"></script>