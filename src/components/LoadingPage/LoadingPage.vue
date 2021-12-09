<template>
	<v-container>

		<v-row class="section center-text">
			<h1 class="title-section-principal marked">
				Analisando política de privacidade... 
			</h1>
			<span class="sp-text">
				{{subtitle_text}}
			</span>

			<v-col class="search-section">

                <div v-if="connected == 0" class="lds-spinner">
					<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
				</div>
				
				<v-progress-linear v-else color="light-blue lighten-1" height="56" v-model="increasing_pct" striped elevation="18" style="margin-block-end: 10px;">
					<strong class="loading-text">
						{{ Math.ceil(parseInt(increasing_pct, 10)) }}%
					</strong>
				</v-progress-linear>

				<div class="steps">
					<span class="button-info-text" v-if="increasing_pct!=100">
						Para cancelar a análise que está sendo realizada 👉
					</span>
					<span class="button-info-text marked" v-else>
						Para visualizar o resultado da análise 👉
					</span>

					<button class="btn-cancel" @click.stop="isModalConfirmationVisible = true" v-if="increasing_pct!=100">
						CANCELAR
					</button>
					<button class="btn-confirm" @click="redirectResult()" v-else>
						VER RESULTADO
					</button>
				</div>

			</v-col>

		</v-row>

		<v-row class="section center-text">

			<h1 class="title-section-secondary marked-second">
                Aprenda mais...
            </h1>
			<div class="icon-info-siren">
                <img draggable="false" :src="require('@/assets/img/siren.gif')"/>
            </div>

			<v-col>
				<v-carousel 
					height="550" 
					hide-delimiter-background 
					show-arrows-on-hover
				>
					<v-carousel-item v-for="(curiosity, i) in curiosities" :key="i">
						<v-sheet 
							color="light_grey" 
							height="500" 
							tile
						>
							<v-row class="fill-height item-center">
								<div class="steps">
									<div class="img-container">
										<img draggable="false"
											:src="require('@/assets/img/' + curiosity.img)"
										>
									</div>
									<div class="curiosity-text">
										{{curiosity.text}} 
									</div>
								</div>
							</v-row>

						</v-sheet>
					</v-carousel-item>
				</v-carousel>
			</v-col>
		
		</v-row>

	<!-- MODAL CANCELAMENTO DE PROCESSAMENTO -->
		<v-dialog
			v-model="isModalConfirmationVisible"
			persistent
			transition="dialog-top-transition"
			max-width="600"
		>
			<v-card>
				<v-toolbar color="orange darken-3" dark class="title-section-secondary">
					Cancelar análise?!
				</v-toolbar>

				<v-card-text>
					<div class="sp-text justify-center dialog-text-end">Deseja realmente cancelar a análise da política de privacidade?</div>
				</v-card-text>

				<v-card-actions>
					<button class="btn-confirm dialog-btn" @click="cancel()">
						SIM
					</button>
					<button class="btn-cancel dialog-btn" @click.stop="isModalConfirmationVisible = false">
						NÃO
					</button>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<!-- MODAL ERRO -->
		<v-dialog
				v-model="processError"
				transition="dialog-top-transition"
				persistent
				max-width="600"
			>
				<v-card>
					<v-toolbar color="red darken-3" dark class="title-section-secondary">
						{{modalTitle}}
					</v-toolbar>
			
					<v-card-text>
						<div class="sp-text justify-center">{{errorMessage}}</div>
						<div class="sp-text justify-center dialog-text-end">Por favor, volte a página inicial!</div>
					</v-card-text>

					<v-card-actions>
						<img class="dialog-img" draggable="false" :src="require('@/assets/img/sad.png')"/>
						<button class="btn-confirm dialog-btn one-btn" @click="redirectInitial(true)">
							VOLTAR
						</button>
					</v-card-actions>
				</v-card>
		</v-dialog>
		
		<audio id ="notifi" src="@/assets/sounds/notification.mp3"></audio>

	</v-container>
</template>

<style src="../../assets/css/style.css"></style>

<script src="./LoadingPage.js"></script>