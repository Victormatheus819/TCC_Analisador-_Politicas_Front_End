
export default {
	name: 'InicialPage',
	data: () => ({
		flag: true,
		valid: true,
		url: undefined,
		alert: false
	}),
	methods: {
		validate() {
            var isUrl = null
			try {
				var url = new URL(this.url);
			} catch (_) {
				this.alert = true;
				
			}
			console.log(isUrl)
			if ((this.url == "" || this.url == undefined) || isUrl == null) {
				this.alert = true;
			} else {
				this.$router.push({ name: 'LoadingPage', params: { url: url } })
			}
		},

	}
}