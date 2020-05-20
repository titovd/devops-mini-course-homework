import React from 'react'
import { Link } from 'react-router-dom'

const spinningPic = require('../../assets/images/spinning-pic.jpg')

interface IPostCard {
    title: string
    description: string
    id: string
}

const PostCard:React.FC<IPostCard> = (props) => {
    const { title, description, id } = props
    return (
        <div className="news-board-item">
                <Link to={`/post/${id}`}>
                    <div className="news-board-item-title">
                        {title}
                    </div>
                </Link>
                <img className="news-board-item-pic" src={spinningPic} alt="Спиннинг"/>
                <div className="news-board-item-content">
                    {description}
                </div>
            </div>
    )
}

export default PostCard