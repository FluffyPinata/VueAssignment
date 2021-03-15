app.component('book-display', {

	props: {
		book: {
			type: String,
			required: true,
			default: null
		}
	},
	
	template:
		/*html*/
		`<ul class = "col-sm-12 col-md-6 col-xl-4">
        <a class = "list-group-item list-group-item-action active" :href="this.bookObj.selfLink"> {{this.bookObj.volumeInfo.title}}</a>
        <li class = "list-group-item">{{this.bookObj.volumeInfo.authors}}</li>
        <li class = "list-group-item">
        	<p v-if = "this.bookObj.volumeInfo.publisher !== undefined">Publisher: {{this.bookObj.volumeInfo.publisher}}</p>
        	<p v-if = "this.bookObj.volumeInfo.publishedDate !== undefined">Published Date: {{this.bookObj.volumeInfo.publishedDate}}</p>
        </li>
        <li class = "list-group-item" v-if="this.bookObj.volumeInfo.imageLinks.medium !== undefined">
        	<img src="this.bookObj.volumeInfo.imageLinks.medium">
        </li>
        </ul>`,

	computed: {
		bookObj() {
			if (this.book != null) {
				return JSON.parse(this.book)
			} else {
				return null;
			}
		}
	}


})