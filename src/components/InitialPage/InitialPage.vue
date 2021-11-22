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
            <h1 class="title-section-secondary marked-second">
                Como usar?
            </h1>
            <v-col class="steps">
                <div>
                    <span class="dot-number">1</span>
                    <span class="dot-text">Indique URL da política de privacidade desejada na barra indicada</span>
                </div>
                <div>
                    <span class="dot-number">2</span>
                    <span class="dot-text">Clique no botão analisar e espere um pouco a análise acabar</span>
                </div>
                <div>
                    <span class="dot-number">3</span>
                    <span class="dot-text">Depois clique em ver resultados e a análise será apresentada</span>
                </div>
            </v-col>
        </v-row>

        <v-row class="section center-text">
            <h1 class="title-section-secondary marked-third">
                Saiba mais...
            </h1>
            <v-col class="steps">
                <div>
                    <v-card color="divght_grey" class="box-text" elevation="18" shaped>
                    <v-card-title class="text-h4 orange-marker">
                        LGPD
                    </v-card-title>
                    <v-card-subtitle class="initial-card-subtitle">
                        <p>A Lei Geral de Proteção de Dados (13.709/2018) tem como principal objetivo proteger os direitos fundamentais 
                            de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural. Também tem como 
                            foco a padronização de regulamentos e práticas para promover a proteção aos dados pessoais de todo cidadão 
                            que esteja no Brasil ou no exterior.
                        </p>
                        <p>
                            Lei: <a>http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm</a>
                        </p>
                    </v-card-subtitle>
                </v-card>
                </div>
                <div>
                    <v-card color="divght_grey" class="box-text" elevation="18" shaped>
                    <v-card-title class="text-h4 yellow-marker">
                        Sobre nós
                    </v-card-title>
                    <v-card-subtitle class="initial-card-subtitle">
                        <p>Trabalho de Conclusão de Curso de graduação de Sistemas de Informação da Universidade Federal Fluminense (UFF)</p>
                        <p>Realisado por Victor Matheus Pereira de Azevedo (<a>victorazevedo@id.uff.br</a>) e Victor Rodrigues Marques (<a>victorrm@id.uff.br</a>), com a orientação de José Viterbo Filho</p>
                        <p>Intuito</p>
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
				<v-card-text class='card-text'>
					<div class="sp-text justify-center dialog-text-end">Erro de conexão! Tente novamente mais tarde.</div>
				</v-card-text>
				<v-card-actions>
					<button class="btn-confirm dialog-btn one-btn" @click="cancel()">OK</button>
				</v-card-actions>
			</v-card>
		</v-dialog>

    </v-container>
</template>

<style src="../../assets/css/style.css"></style>

<script src="./InitialPage.js"></script>