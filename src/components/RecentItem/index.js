import './index.css'

const RecentItem = props => {
    const {content, author, publishedAt} = props.data

    const contentText = content.slice(0, 200) 
    return(
        <li className='each-recent-item'>
            <div className='item-recent'>
                <hr className='hr'/>
                <div>
                    <p className='recent-date'> {publishedAt}</p>
                    <p className='recent-author'>{author}</p>
                    <p className='recent-content'>{contentText}</p>
                </div>
            </div>
            
        </li>
    )
}

export default RecentItem