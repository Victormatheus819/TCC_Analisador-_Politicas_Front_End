<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="7" md="12">
        <p>something</p>
      </v-col>
      <v-col cols="12" lg="7" md="12">
        <p>something</p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="9">
        <v-card color="light_grey" class="my-auto mx-auto" max-width="1000">
          <v-card-title class="text-h5">
            Dados de coleta encontradas na política indicada:
          </v-card-title>
          <v-card-subtitle id="dados_subtitle"> </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <v-card color="light_grey" class="my-auto mx-auto" max-width="1000">
          <v-card-title class="text-h5">
            Finalidade de tratamento de dados encontradas na política indicada:
          </v-card-title>
          <v-card-subtitle id="finalidade_subtitle"> </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="7" md="7">
        <v-btn
          elevation="2"
          color="swamp_green"
          @click="redirect()"
          class="white--text button floater"
          x-large
        >
          Realizar outra análise
        </v-btn>
      </v-col>
    </v-row>
    <VLibras />
  </v-container>
</template>
<script src="./ResultPage.js">