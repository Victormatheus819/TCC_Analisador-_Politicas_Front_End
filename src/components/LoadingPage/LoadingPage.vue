<template>
	<v-container>

		<v-row class="section center-text">
			<h1 class="title-section-principal">
				Analisando política de privacidade... 
			</h1>
			<span class="sp-text">
				Espere até o carregamento da análise estar concluído
			</span>

			<v-col class="search-section">

				<v-progress-linear color="light-blue" height="56" value="10" striped elevation="18" style="margin-block-end: 10px;">
					<strong class="loading-text">
						{{ Math.ceil(parseInt(increasing_pct, 10)) }}%
					</strong>
				</v-progress-linear>				

				<button class="btn-cancel" @click="validate()" v-if="increasing_pct!=100">CANCELAR</button>
				<button class="btn-confirm" @click="redirect()" v-else>VER RESULTADO</button>
			</v-col>

		</v-row>

		<v-row class="section center-text">

			<v-col>
			
			<v-carousel 
				cycle 
				height="500" 
				hide-delimiter-background 
				show-arrows-on-hover
			>
				<v-carousel-item v-for="(curiosidade) in curiosidades" :key="curiosidade">
					<v-sheet 
						color="light_grey" 
						height="500" 
						tile
					>
						
						<v-row class="fill-height item-center">
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

<style src="../../assets/css/style.css"></style>

<script src="./InitialPage.js"></script>