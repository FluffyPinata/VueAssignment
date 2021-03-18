# Search Books with Google API
This is the repository for first part of Assignment 2, working with Vue.js. This uses the previous assignment for Vue.js as a backbone and seeks to implement additional functionality in the form of pagination as well as image display. This makes use of the Google Books API.
## File Structure
```
+-- js/
|	+-- components/
|	|	+-- bookDisplay.js
|   +-- script.js
|	+-- main.js
+-- README.md <- You are here
+-- index.html
+-- styles.css
```
## Design Choices
To start with our project uses two buttons for pagination. These next and previous buttons are displayed at the top of the page but only after the user has queried the API. They are both visible at all times afterwards unless the user decides to reset the query which will remove both of the buttons similar to the starting position. The next and previous buttons will increase the index of the query by twenty and decrease the index of the query by twenty respectively. The previous button will do nothing if on index 0 of the query and the next button will simply display nothing if there are no more results to display. The index is reset back to 0 at the start of every new query. All five elements displayed for each book are first checked if they're undefined using v-if, and if so, are not displayed. Authors are converted from JSON to a string list so they display less cluttered.

@CeRaTech (2021 - )
