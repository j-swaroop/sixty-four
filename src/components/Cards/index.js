import { MdLibraryBooks } from "react-icons/md";
import './index.css'

const Card = props => {
    const {iconColor, title, text} = props.data

    return(
        <li className="card"> 
            <MdLibraryBooks className={iconColor}/>
            <p className='library-text'>{title}</p>
            <p className="library-date">{text}</p>
        </li>
    )
}

export default Card