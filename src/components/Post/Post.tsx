import React from 'react'
import spinningPic from '../../assets/images/spinning-pic.jpg'
import spinningPic1 from '../../assets/images/spinning-pic1.jpg'
import spinningPic2 from '../../assets/images/spinning-pic2.jpg'
import { IPost } from '../../types/post'

interface IPostProps {
    match: {
        params: {
            postId: string
        }
    }
}

const Post: React.FC<IPostProps> = (props) => {
    React.useEffect(() => {
        void getPost()
    }, [])
    
    const [post, setPost] = React.useState<IPost>()
    const getPost = React.useCallback(async () => {
    const response = await fetch(
        `http://localhost:3000/posts/${props.match.params.postId}`
    )
    
    const data = await response.json()
        setPost(data)
    }, [])
    
    if (!post) {
        return null
    }
    
    const { title, description, text} = post
    return (
        <section className="news-board">
            <div className="news-board-item">
                <div className="news-board-item-title">
                    {title}
                </div>
                <img className="news-board-item-pic" src={spinningPic} alt="Спиннинг"/>
                <div className="news-board-item-content">
                {description}
                <img className="news-board-item-pic" src={spinningPic1} alt="Спиннинг"/>
                {text}
                <img className="news-board-item-pic" src={spinningPic2} alt="Спиннинг"/>
                </div>
            </div>
        </section>
    )
}

export default Post;