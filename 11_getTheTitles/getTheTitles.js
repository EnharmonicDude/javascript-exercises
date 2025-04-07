const getTheTitles = function(books) {

/*Receive an array as a parameter that contains two values: book title and book author. Iterate through the array and put the titles into a new array which you return. The array you receive will be of the form: 
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]*/
let titles = []

for (let i = 0; i < books.length; i++){
    titles.push(books[i].title); /*since in the array the property titles: is listed, you can reference it simply with this method. If it did not have the properties, you would code: for (let i = 0; i < books.length; i+=2){
    titles.push(books[i])}*/
}

return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
