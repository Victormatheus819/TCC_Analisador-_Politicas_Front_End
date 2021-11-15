
export default {
	name: 'InicialPage',
	data: () => ({
		flag: true,
		valid: true,
		url: undefined
	}),
	methods: {
		validate() {
			if (this.$refs.form.validate()) {
				if(this.url == "" || this.url == undefined){
					return;
				}
				this.$router.push({ name: 'LoadingPage', params: { url: this.url } })
			}
		},

	}
}