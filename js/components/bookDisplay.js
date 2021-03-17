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
        <li class = "list-group-item">
        	<p>Authors: {{this.bookObj.volumeInfo.authors}}</p>
        </li>
        <li class = "list-group-item">{{this.bookObj.volumeInfo.publisher}}, {{this.bookObj.volumeInfo.publishedDate}}</li>
        <li class = "list-group-item">
        	<p>{{this.bookObj.volumeInfo.imageLinks.thumbnail}}</p>
        	<img src = "" class = "bookThumbnail">
        </li>
        </ul>`,


    computed: {
        bookObj() {

            if (this.book != null) {
            	parsedBook = JSON.parse(this.book);
            	$("#bookThumbnail").attr('src', parsedBook.volumeInfo.imageLinks.thumbnail);
                return parsedBook;
            }
            else {
                return null;
            }

        }
    }


})

