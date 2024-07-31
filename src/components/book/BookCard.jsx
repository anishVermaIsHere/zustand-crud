import style from './book.module.css';
import useBookStore from '../../store/book';
import useCommonStore from '../../store/common';

const BookCard = (book) => {
    const {handleFormToggle,handleAlertToggle}=useCommonStore(state=>state);
    const {books,setBook}=useBookStore(state=>state);
    const {title,pages,price,author,publishedYear,id}=book;

    const deleteAlert=()=>{
        setBook(book);
        handleAlertToggle();
    }
    const handleEdit=(id)=>{
        const list=books.filter(item=>item.id===id);
        setBook(list[0]);
        handleFormToggle();
    }
    
    return (
        <div className={` ${style.bookListItem}`}>
            <div>
                <img src='./defaultbookimage.jpg' alt={title} />
            </div>

            <div style={{marginLeft:'0.8rem',width:'100%'}}>
                <div className={`${style.bookLabel} ${style.bTitle}`}>
                    <span style={{marginRight:'0.5rem'}}>
                        <i className="fa-solid fa-book" title={title}></i>
                    </span>
                    {title}
                </div>
                <div className={`${style.bookLabel} ${style.bAuthor}`}>
                    <span style={{marginRight:'0.5rem'}}>
                        <i className="fa-regular fa-user"></i>
                    </span>
                    {author}
                </div>
                <div className={`${style.bookLabel} ${style.bPrice}`}>${price}</div>
                <div className={`${style.bookLabel} ${style.bPages}`}>Pages: {pages}</div>
                <div className={`${style.bookLabel} ${style.bPubYear}`}>Year: {publishedYear}</div>
            </div>

            <div style={{display:'flex', gap:'0.5rem'}}>
                <span onClick={deleteAlert}>
                    <i className={`fa-solid fa-trash ${style.delete}`}></i> 
                </span>
                <span onClick={()=>handleEdit(id)}>
                    <i className={`fa-regular fa-pen-to-square ${style.edit}`}></i>
                </span>
            </div>
        </div>
    )
}

export default BookCard