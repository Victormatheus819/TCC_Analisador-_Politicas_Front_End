<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" lg="8" md="12">
                <p >something</p> 
            </v-col>
        </v-row> 
        <v-row justify="center">
            <v-col cols="7" md="9">
             <v-card color="light_grey" class="mx-auto"  max-width="1000">
                <v-card-title class="text-h5">
                    Dados de coleta encontradas na política indicada:
                </v-card-title>
                 <v-card-subtitle>
                    {{texto_finalidade}}
                     </v-card-subtitle>
            </v-card>
            </v-col>
             <v-col cols="7" md="9">
             <v-card color="light_grey" class="mx-auto" max-width="1000">
                <v-card-title class="text-h5">
                   Finalidade de tratamento de dados encontradas na política indicada:
                </v-card-title>
                 <v-card-subtitle id="dados_subtitle">
                    hei
                     </v-card-subtitle>
            </v-card>
            </v-col>
      
        </v-row>
    </v-container>
</template>
<script src="./ResultPage.js">