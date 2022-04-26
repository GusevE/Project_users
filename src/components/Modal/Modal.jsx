// import styles from '../Modal/Modal.module.css'
import '../Modal/Modal.css'

function Modal ({active, setActive, children}) {


    return(

        <div className={active ? 'modal activ' : 'modal'} onClick={() => setActive(null)}>
                <div className={active ? 'modal__content activ' : 'modal__content'} onClick={(e) =>  e.stopPropagation()}>

                    {children}
                </div>
        </div> 
    )
}
export default Modal