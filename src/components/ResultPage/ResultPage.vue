<template>
    <v-container>
        <v-row class="section center-text">
            <h1 class="title-section-principal">
                Analisador de políticas de privacidade 
            </h1>
            <span class="sp-text">
                Analise finalizada para a política de privacidade indicada, informações são retiradas diretamente da política de privacidade
            </span>
        </v-row>
 
        <v-row class="section center-text">
            <h1 class="title-section-secondary">
                Resultado da análise
            </h1>
            <span class="sp-text">
                Informação de politíca genérica aqui
            </span>
                <div class="result-review">
                    <v-card color="divght_grey" elevation="18" shaped>
                        <v-card-title class="text-h5 dados-marker">
                            Sobre dados coletados:
                        </v-card-title>
                        <v-card-subtitle class="subtitle-result" id="dados_subtitle">
                            Carregando dados...
                        </v-card-subtitle>
                    </v-card>
                </div>
                <div class="result-review">
                    <v-card color="divght_grey" elevation="18" shaped>
                        <v-card-title class="text-h5 finalidade-marker">
                            Sobre finalidade de tratamento:
                        </v-card-title>
                        <v-card-subtitle class="subtitle-result" id="finalidade_subtitle">
                            Carregando dados...
                        </v-card-subtitle>
                    </v-card>
                </div>   
        </v-row>

        <v-row class="section center-text">
            <h1 class="title-section-secondary">
                Continue com outra análise
            </h1>
            <v-col class="search-section">
                <button class="btn-confirm" @click="redirect()">REALIZAR OUTRA ANÁLISE</button>
            </v-col>  
        </v-row>

    </v-container>
</template>

<style src="../../assets/css/style.css"></style>

<script src="./ResultPage.js"></script>