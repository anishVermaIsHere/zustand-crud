import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import style from './bookform.module.css';
import { bookSchema } from '../../../shared/validation';
import useCommonStore from '../../../store/common';
import useBookStore from '../../../store/book';


const BookForm = () => {
  const {register,handleSubmit,formState:{errors},setValue}=useForm({resolver:zodResolver(bookSchema)});
  const {book,resetBook,updateBook,addBook}=useBookStore(state=>state);
  const {handleFormToggle}=useCommonStore(state=>state);


  const closeForm=()=>{
    handleFormToggle();
    resetBook();
  }

  const onSubmit=(formData)=>{
      if(book!==null){
        updateBook(book.id,formData);
    } else {
        addBook(formData);
    }
    resetBook();
    handleFormToggle();
  }

  useEffect(()=>{
    if(book!==null){
      const {title,price,pages,publishedYear,author}=book;
      setValue('title',title);
      setValue('author',author);
      setValue('price',price);
      setValue('pages',pages);
      setValue('publishedYear',publishedYear);
    } 

    return;
  },[book])

  
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.head}>
          <h5>Book Manage</h5>
          <i className="fa-solid fa-xmark" onClick={closeForm}/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.formGroup}>
                <div className={style.formInputGroup}>
                  <label htmlFor='title'>Title</label>
                  <input type="text" name="title" id="title" {...register('title')}/>
                  {errors.title && (
                      <p className={style.errorMessage}>{errors.title?.message}</p>
                    )}
                </div>
                <div className={style.formInputGroup}>
                  <label htmlFor='author'>Author</label>
                  <input type="text" name="author" id="author" {...register('author')}/>
                  {errors.author && (
                      <p className={style.errorMessage}>{errors.author?.message}</p>
                    )}
                </div>
                <div className={style.formInputGroup}>
                  <label htmlFor='price'>Price</label>
                  <input type="number" name="price" id="price" {...register('price',{valueAsNumber:true})}/>
                  {errors.price && (
                      <p className={style.errorMessage}>{errors.price?.message}</p>
                    )}
                </div>
                <div className={style.formInputGroup}>
                  <label htmlFor='pages'>Pages</label>
                  <input type="number" name="pages" id="pages" {...register('pages',{valueAsNumber:true})}/>
                  {errors.pages && (
                      <p className={style.errorMessage}>{errors.pages?.message}</p>
                    )}
                </div>
                <div className={style.formInputGroup}>
                  <label htmlFor='publishedYear'>Year</label>
                  <input type="number" name="publishedYear" id="publishedYear" {...register('publishedYear',{valueAsNumber:true})}/>
                  {errors.publishedYear && (
                      <p className={style.errorMessage}>{errors.publishedYear?.message}</p>
                    )}
                </div>

                <div className={style.buttonGroup}>
                  {book!==null?
                  <button type='submit' title='update book' className='btn' id='update'>Update</button>
                  :<button type='submit' title='add book' className='btn' id='submit' >Add</button>}
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default BookForm