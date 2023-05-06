import "./category-item.styles.scss"

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        //使用map()的位置才能使用key={id}，component內要拿掉
        <div className="category-container">
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`,
            }} />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )

}

export default CategoryItem