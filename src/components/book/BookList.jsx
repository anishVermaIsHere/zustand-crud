import style from './book.module.css';
import BookCard from './BookCard';
import useBookStore from '../../store/book';

const BookList = () => {
  const {books}=useBookStore(state=>state);
      return books.length?<div>
          <div className={style.bookList}>
              {books?.map((book,index)=><BookCard key={index} {...book}/>)}  
          </div>
        </div>
        :<h4 style={{color:'var(--dangerDark)',textAlign:'center'}}>Not found</h4>

}

export default BookList