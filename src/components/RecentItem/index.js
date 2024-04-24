import './index.css'

const RecentItem = props => {
    const {content, author, publishedAt} = props.data

    return(
        <li className='each-recent-item'>
            <div className='item-recent'>
                <hr className='hr'/>
                <div>
                    <p className='recent-date'> {publishedAt}</p>
                    <p className='recent-author'>{author}</p>
                    <p className='recent-content'>{content}</p>
                </div>
            </div>
            
        </li>
    )
}

export default RecentItem