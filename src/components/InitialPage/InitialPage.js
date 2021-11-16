export default {
	name: 'InitialPage',
	props: {
		errorConnect: { type: Boolean, required: false },
		urlProps: { type: String, required: false }
	},
	data: () => ({
		flag: true,
		valid: true,
		url: undefined,
		isModalVisible: false
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
		cancel(){
			this.isModalVisible = false;
		}
	},
	mounted(){
		if(this.errorConnect){
			this.url = this.urlProps;
			this.isModalVisible = true;
		}
	}
}