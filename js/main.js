const app = Vue.createApp({

    data() {
        return {
            keyword: ' ',
            result: null,
            startingIndex: 0,
            visible: false
        }
    },

    methods: {
        searchGoogleBooks() {

            if (this.keyword != ' '){
                fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword +"&startIndex="+this.startingIndex +"&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)
                this.visible=true
            }
            
        },

        nextPage() {
			console.log("nextPAGE called")
			this.startingIndex+=20
			
		},
        
		previousPage() {
			
			if(this.startingIndex >=20 ){
			this.startingIndex-=20
			
			
		}	
		},

        resetPage() {
			this.result = null
			this.visible=false
			
			
		}
    }



})