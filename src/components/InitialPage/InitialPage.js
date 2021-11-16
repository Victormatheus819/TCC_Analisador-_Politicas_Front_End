
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
			
			var isUrl=this.url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
			
			if((this.url == "" || this.url == undefined ) || isUrl==null){
				this.alert = true;
			}else{
				this.$router.push({ name: 'LoadingPage', params: { url: this.url } })
			}
		},

	}
}