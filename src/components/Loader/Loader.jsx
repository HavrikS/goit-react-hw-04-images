import { BallTriangle } from  'react-loader-spinner'
import css from 'components/Loader/Loader.module.css'




const Loader = () => {
    
    return (
        <div className={css.loader}>
            <BallTriangle />
        </div>
    )
};


export default Loader;