app.component('book-display', {

    props: {
        book: {
            type: String,
            required: true,
            default: null, 
            
        }
    },
    template:
        /*html*/
        `<ul class = "col-sm-12 col-md-6 col-xl-4">
        <a class = "list-group-item list-group-item-action active" :href="this.bookObj.selfLink"> {{this.bookObj.volumeInfo.title}}</a>
        <li class = "list-group-item" v-if = "this.bookObj.volumeInfo.authors !== undefined">
        	<p>Authors: {{ (this.bookObj.volumeInfo.authors).toString() }}</p>
        </li>
        <li class = "list-group-item" v-if = "(this.bookObj.volumeInfo.publisher !== undefined) || (this.bookObj.volumeInfo.publishedDate !== undefined)">
        	<p v-if = "this.bookObj.volumeInfo.publisher !== undefined">Publisher: {{this.bookObj.volumeInfo.publisher}}</p>
        	<p v-if = "this.bookObj.volumeInfo.publishedDate !== undefined">Published Date: {{this.bookObj.volumeInfo.publishedDate}}</p>
        </li>
        <li class = "list-group-item" v-if = "(this.bookObj.volumeInfo.imageLinks !== undefined) && (this.bookObj.volumeInfo.imageLinks.thumbnail !== undefined)">
        	<img :src = "this.bookObj.volumeInfo.imageLinks.thumbnail">
        </li>
        <li class = "list-group-item" v-if = "this.bookObj.volumeInfo.averageRating !== undefined">
        	<p>Average Rating: {{ this.bookObj.volumeInfo.averageRating }}</p>
        </li>
        <li class = "list-group-item" v-if = "this.bookObj.volumeInfo.ratingsCount !== undefined">
        	<p>Ratings Count: {{ this.bookObj.volumeInfo.ratingsCount }}</p>
        </li>
        </ul>`,


    computed: {
        bookObj() {

            if (this.book != null) {
            	return JSON.parse(this.book);
            }
            else {
                return null;
            }

        },
    },

})

