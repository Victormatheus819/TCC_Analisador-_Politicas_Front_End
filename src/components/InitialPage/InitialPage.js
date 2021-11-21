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
		alert: false,
		isModalVisible: false
	}),
	methods: {
		validate() {
            var isUrl = null
			try 
			{
				new URL(this.url);
				isUrl = true
			} 
			catch (e) 
			{
				this.alert = true;
				console.log(e)
			}
			
			if ((this.url == "" || this.url == undefined) || isUrl == null) 
			{
				this.alert = true;
			} 
			else 
			{
				this.$router.push({ name: 'LoadingPage', params: { url: this.url } })
			}
		},
		cancel(){
			this.isModalVisible = false;
		}
	},
	mounted(){
		if(this.errorConnect)
		{
			this.url = this.urlProps;
			this.isModalVisible = true;
		}
	}
}