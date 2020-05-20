import React from 'react';
import {IPost} from '../../types/post';
import PostCard from '../PostCard';

const NewsBoard: React.FC = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);
  React.useEffect(() => {
    void getPost();
  }, []);

  const getPost = React.useCallback(async () => {
    const respons = await fetch('http://localhost:3000/posts');
    const data = await respons.json();
    setPosts(data);
  }, []);

  return (
    <section className="news-board">
      {posts.map((post, index) => (
        <PostCard key={index} {...post}/>
      ))}
    </section>
  );
};

export default NewsBoard;
