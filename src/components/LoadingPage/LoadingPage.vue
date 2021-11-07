<template>
  <v-container>
    <v-row justify="center">
            <v-col cols="12" lg="8" md="12">
                <p >something</p> 
            </v-col>
        </v-row> 
    <v-row justify="center">
      <v-col cols="4" lg="7">
      <progress-bar size="massive" val="60" text="60%" ></progress-bar>
      </v-col> 
      <v-col cols="1" lg="1">
          <v-btn elevation="2" color="white" @click="redirect()"  x-large> 
                    Cancelar
          </v-btn>
           <v-btn elevation="2" color="swamp_green" @click="redirect()" class="white--text button" x-large> 
                    Analisar
          </v-btn>
      </v-col> 
    </v-row>  
    <v-row justify="center">
      <v-col cols="4" lg="7">
        <v-carousel >
        <v-carousel-item
          v-for="(curiosidade) in curiosidades"
          :key="curiosidade"
        >
          <v-sheet
            color="light_grey"
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="text-h2">
                {{curiosidade}} 
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      </v-col> 
    </v-row>
  </v-container>     
</template>
<script src="./LoadingPage.js">