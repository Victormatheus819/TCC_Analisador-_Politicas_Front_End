<template>
    <v-container>
        <v-row class="section center-text">
            <h1 class="title-section-principal marked">
                Política de privacidade analisada
            </h1>
            
            <div class="steps">
                <div class="img-container">
                    <img draggable="false"
                        :src="require('@/assets/img/obg.png')"
                    >
                </div>
                <span class="sp-text-step">
                    Análise finalizada para a política de privacidade indicada. <b class='marked'>As informações apresentadas são retiradas diretamente do documento da URL informado no início do processo.</b>
                </span>
            </div>
        </v-row>
 
        <v-row class="section center-text">
            <h1  class="title-section-secondary" :class="this.result.politica_generica ? 'marked-second' : 'marked-fourth'">
                Resultado da análise
            </h1>
            <div class="icon-info">
                <img draggable="false" :src="require('@/assets/img/normal.png')"/>
            </div>

            <span class="sp-text-generic" id="generic_flag">

                <div v-if="this.result.politica_generica" color="#FFFF00">
                    <img draggable="false" :src="require('@/assets/img/siren.gif')"/>
                    O sistema considerou essa política de privacidade genérica! Tenha atenção ao avaliar a política.
                    <img draggable="false" :src="require('@/assets/img/siren.gif')"/>
                </div>
                
                <div v-else color="#FFFFFF">
                    Informações extraidas diretamente da política de privacidade. O sistema apenas resumiu as informações.
                </div>
                
            </span>
            

                <div class="result-review">
                    <v-card color="divght_grey" elevation="18" shaped>
                        <v-card-title class="text-h5 orange-marker">
                            Sobre dados coletados:
                        </v-card-title>

                        <v-card-subtitle class="subtitle-result" id="dados_subtitle">
                            Carregando dados...
                        </v-card-subtitle>
                    </v-card>
                </div>
                <div class="result-review">
                    <v-card color="divght_grey" elevation="18" shaped>
                        <v-card-title class="text-h5 yellow-marker">
                            Sobre finalidade de tratamento:
                        </v-card-title>
                        
                        <v-card-subtitle class="subtitle-result" id="finalidade_subtitle">
                            Carregando dados...
                        </v-card-subtitle>
                    </v-card>
                </div> 
            <span class="sp-text-step">Link para a politica de privacidade na integra: <a v-bind:href="this.url" target="_blank">{{this.url}}</a></span>      
        </v-row>

        <v-row class="section center-text">
            <h1 class="title-section-secondary marked-third">
                Segurindo informa
            </h1>

            <div class="icon-info">
                <img draggable="false" :src="require('@/assets/img/search.png')"/>
            </div>

            <span class="sp-text">
                Segurindo foi criado tendo como inspiração diretrizes da LGPD (Lei Geral de Proteção de Dados), especificamente em relação a 
                diretriz de <b class="sinalizer">finalidade</b>. Saiba mais informações sobre a lei 
                <a href='http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' target="_blank">clicando aqui</a>. 
            </span>

            <span class="sp-text">
                Se preferir realize outra análise:
            </span>

            <v-col class="search-section">
                <button class="btn-confirm" @click="redirect()">
                    REALIZAR OUTRA ANÁLISE
                </button>
            </v-col>  
        </v-row>

    </v-container>
</template>

<style src="../../assets/css/style.css"></style>

<script src="./ResultPage.js"></script>