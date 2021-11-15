<template>
	<v-container>

		<v-row class="section center-text">
			<h1 class="title-section-principal marked">
				Analisando política de privacidade... 
			</h1>
			<span class="sp-text">
				Espere até o carregamento da análise estar concluído
			</span>

			<v-col class="search-section">

				<v-progress-linear color="light-blue" height="56" v-model="increasing_pct" striped elevation="18" style="margin-block-end: 10px;">
					<strong class="loading-text">
						{{ Math.ceil(parseInt(increasing_pct, 10)) }}%
					</strong>
				</v-progress-linear>				

				<button class="btn-cancel" @click.stop="isModalConfirmationVisible = true" v-if="increasing_pct!=100">CANCELAR</button>
				<button class="btn-confirm" @click="redirectResult()" v-else>VER RESULTADO</button>
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

		<v-dialog
			v-model="isModalConfirmationVisible"
			transition="dialog-top-transition"
			max-width="600"
		>
			<v-card>
				<v-toolbar color="primary" dark class="title-section-secondary">
					Cancelar análise
				</v-toolbar>
				<v-card-text>
					<div class="sp-text justify-center">Deseja realmente cancelar a análise da política de privacidade?</div>
				</v-card-text>
				<v-card-actions>
					<button class="btn-confirm dialog-btn" @click="cancel()">SIM</button>
					<button class="btn-cancel dialog-btn" @click.stop="isModalConfirmationVisible = false">NÃO</button>
				</v-card-actions>
			</v-card>
	</v-dialog>

	</v-container>
</template>

<style src="../../assets/css/style.css"></style>

<script src="./LoadingPage.js"></script>