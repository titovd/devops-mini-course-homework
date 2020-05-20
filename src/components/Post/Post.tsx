import React from 'react';
import {IPost} from '../../types/post';


const spinningPic = require('../../assets/images/spinning-pic.jpg');
interface IPostProps {
    match: {
        params: {
            postId: string
        }
    }
}

const Post: React.FC<IPostProps> = (props) => {
  React.useEffect(() => {
    void getPost();
  }, []);

  const [post, setPost] = React.useState<IPost>();
  const getPost = React.useCallback(async () => {
    const response = await fetch(
        `http://localhost:3000/posts/${props.match.params.postId}`,
    );

    const data = await response.json();
    setPost(data);
  }, []);

  if (!post) {
    return null;
  }

  const {title, description, text} = post;
  return (
    <section className="news-board">
      <div className="news-board-item">
        <div className="news-board-item-title">
          {title}
        </div>
        <img className="news-board-item-pic" src={spinningPic} alt="Спиннинг"/>
        <div className="news-board-item-content">
          {description}
          <img className="news-board-item-pic" src={spinningPic} alt="Спиннинг"/>
          {text}
          <img className="news-board-item-pic" src={spinningPic} alt="Спиннинг"/>
        </div>
      </div>
    </section>
  );
};

export default Post;
