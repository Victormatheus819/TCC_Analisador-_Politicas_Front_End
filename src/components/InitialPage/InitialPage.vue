<template>
    <v-container>

        <v-row class="section center-text">
            <h1 class="title-section-principal marked">
                Analisador de políticas de privacidade 
            </h1>
            <span class="sp-text">
                Analise para evidenciar a finalidade e dados coletados indicados pelas empresas
            </span>
                <p id="alerText" v-if="alert==true" class="text-alert" >Por favor insira uma url válida Ex: http://seusite.com</p>  
                <v-col class="search-section">
                    <input placeholder="Indique ou cole a URL da política aqui" autocomplete="off" v-model="url" />
                    <button class="btn-confirm" @click="validate()" :disabled='this.url == "" || this.url == undefined'>ANALISAR</button>
                </v-col>
        </v-row>

        <v-row class="section center-text">
            <h1 class="title-section-secondary">
                Como usar?
            </h1>
            <v-col class="steps">
                <div>
                    <span class="dot-number">1</span>
                    <span class="dot-text">Cole ou escreva a URL da política de provacidade na barra indicada</span>
                </div>
                <div>
                    <span class="dot-number">2</span>
                    <span class="dot-text">Clique no botão analisar e espere um pouco a análise acabar</span>
                </div>
                <div>
                    <span class="dot-number">3</span>
                    <span class="dot-text">Depois clique em ver resultados e aprensentará a análise</span>
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
                    <v-card-title class="text-h4 orange-marker">
                        LGPD
                    </v-card-title>
                    <v-card-subtitle class="initial-card-subtitle">
                        divsten to your favorite artists and albums whenever and wherever, ondivne and offdivne.
                    </v-card-subtitle>
                </v-card>
                </div>
                <div>
                    <v-card color="divght_grey" class="box-text" elevation="18" shaped>
                    <v-card-title class="text-h4 yellow-marker">
                        Sobre nós
                    </v-card-title>
                    <v-card-subtitle class="initial-card-subtitle">
                        Trabalho de Conclusão de Curso de graduação de Sistemas de Informação da Universidade Federal Fluminense (UFF) 
                        Repositório referente a API que processa políticas de privacidade (tanto em PDF quanto em HTML) indicando a finadivdade, declarações  de dados coletados e se a política anadivsada é genérica.
                        Títdivo: Um anadivsador para a avadivação de políticas de privacidade de acordo com a LGPD para proteção aos dados pessoais
                    </v-card-subtitle>
                </v-card>
                </div>
            </v-col>
        </v-row>


        <v-dialog
			v-model="isModalVisible"
			transition="dialog-top-transition"
			max-width="600"
		>
			<v-card>
				<v-toolbar color="primary" dark class="title-section-secondary">
					Erro conexão
				</v-toolbar>
				<v-card-text>
					<div class="sp-text justify-center">Erro de conexão! Tente novamente mais tarde.</div>
				</v-card-text>
				<v-card-actions>
					<button class="btn-confirm dialog-btn" @click="cancel()">OK</button>
				</v-card-actions>
			</v-card>
		</v-dialog>

    </v-container>
</template>

<style src="../../assets/css/style.css"></style>

<script src="./InitialPage.js"></script>