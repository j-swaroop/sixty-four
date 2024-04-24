import './index.css'

const CarouselItem = props => {
    const {title, description, imgUrl} = props.data
    
    const descriptionText = description !== null ? description.slice(0, 110): ''
    const titleText = title !== null ? title.slice(0, 45): ''
    return(
        <div className='carousel-item'>
            <img src={imgUrl} alt={title} className='carousel-imgg'/>
            <div className='carousel-text-container'>
                <p className='carousel-text'>{titleText}</p>
                <p className='carousel-description'> {descriptionText} </p>
            </div>
        </div>
    )
}

export default CarouselItem