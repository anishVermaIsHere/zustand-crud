import { useState } from "react";
import BookList from '../book/BookList';
import BookForm from "../book/form/BookForm";
import AlertBox from ".././alert/AlertBox";
import useBookStore from "../../store/book";
import useCommonStore from "../../store/common";


const BookSection = () => {
  const [search, setSearch] = useState("");
  const { isFormOpen, isAlert, handleFormToggle } = useCommonStore((state) => state);
  const { searchBook } = useBookStore((state) => state);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    searchBook(query);
  };

  return (
    <section className="container" style={{ padding: "1rem" }}>
      <h3 style={{ marginBottom: "2rem", textAlign: "center" }}>
        Book Manage App with Zustand
      </h3>
      <div className="flexBetween input-container">
        <button
          type="button"
          id="addBook"
          className="btn"
          onClick={handleFormToggle}
        >
          Add Book
        </button>

        <div className="search-wrapper">
          <span className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            className="searchbox"
            type="search"
            name="search"
            placeholder="Search by title and author..."
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
      {isAlert && <AlertBox />}
      {isFormOpen && <BookForm />}
      <BookList />
    </section>
  );
};

export default BookSection;
