import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { sampleBooks } from "../shared/data/mockdata";

const useBookStore = create((set) => ({
  book: null,
  books: sampleBooks,
  bookListForSearch: sampleBooks,
  addBook: (book) =>
    set((state) => ({
      books: [
        ...state.books,
        {
          id: uuidv4(),
          title: book.title,
          author: book.author,
          price: book.price,
          pages: book.pages,
          publishedYear: book.publishedYear,
        },
      ],
    })),
  deleteBook: (id) =>
    set((state) => ({
      books: state.books.filter((book) => book.id !== id),
    })),
  updateBook: (id, data) =>
    set((state) => {
      const newBooks = state.books.map((book) =>
        book.id === id
          ? {
              ...book,
              title: data.title,
              price: data.price,
              publishedYear: data.publishedYear,
              pages: data.pages,
              author: data.author,
            }
          : book
      );
      return { books: newBooks };
    }),
  searchBook:(query)=>set((state)=>{
    if(query){
      const searchList=state.bookListForSearch.filter(item=>{
        return (
          item.title.toLowerCase().includes(query)||
          item.author.toLowerCase().includes(query)
        );
        })
        return {books:searchList}
    } else {
        return {books:state.bookListForSearch}
    }
  }),
  setBook: (book) => set({ book: book }),
  resetBook: () => set({ book: null }),
  setBooks: (books) => set({ books: books }),
}));

export default useBookStore;
