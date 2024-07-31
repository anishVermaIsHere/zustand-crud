import style from './alert.module.css';
import useCommonStore from '../../store/common';
import useBookStore from '../../store/book';

const AlertBox = () => {
  const handleAlertToggle=useCommonStore(state=>state.handleAlertToggle);
  const {resetBook,deleteBook,book}=useBookStore(state=>state);

  const handleDelete=()=>{
    deleteBook(book.id);
    handleAlertToggle();
    resetBook();
  }

  return (
    <div className={style.overlay}>
        <div className={`flexCenter ${style.alertBox}`}>
            <p style={{marginBottom:'1.2rem'}}>Are you sure to delete?</p>
            <div className={style.alertActions}>
                <button className={`btn ${style.delete}`} title='delete' onClick={handleDelete}>Delete</button>
                <button className='btn' title='cancel' onClick={handleAlertToggle}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default AlertBox