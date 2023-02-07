function findAuthorById(authors, id) {
  return authors.find((authors) => authors.id === id);
 }
 
 function findBookById(books, id) {
   return books.find((books) => books.id === id);
 }
 
 
 function partitionBooksByBorrowedStatus(books) {
   
   const returned = true;
   //borrowed is just the opposite of returned
   const borrowed = !returned;
   //use _filterBorrowed helper function to create filtered arrays of all books that are either borrowed or returned
   const borrowedBooks = _filterBorrowed(books, borrowed);
   const returnedBooks = _filterBorrowed(books, returned);
   //return an array that spreads both of the arrays
   return [[...borrowedBooks], [...returnedBooks]];
 }
 
 function _filterBorrowed(books, status) {
   return books.filter(({ borrows }) => status === borrows[0].returned);
 }
 
 
 
 function getBorrowersForBook({ borrows }, accounts) {
   //array we will populate and return
   const borrowers = [];
   // iterate through each record in borrows
   for (let record in borrows) {
     //find matching account using helper function
     const borrowId = borrows[record].id;
     const matchingAccount = _findElementById(accounts, borrowId);
     borrowers.push({ ...borrows[record], ...matchingAccount });
   }
  
   return borrowers.slice(0, 10);
 }  
 
  
 
 function _findElementById(elements, id) {
   return elements.find((element) => element.id === id);
 }
 
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
