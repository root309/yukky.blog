import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import BlogBox from '../components/BlogBox';

interface Post {
  id: string;
  title: string;
  summary: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const response = await fetch('/api/fetchPosts');
      const fetchedPosts: Post[] = await response.json();
      console.log(fetchedPosts);
      setPosts(fetchedPosts);
    };
    loadPosts();
  }, []);

  return (
    <div>
      <h1>ブログ記事一覧</h1>
      <div>
        {posts.map((post) => (
          <BlogBox key={post.id} id={post.id} title={post.title} summary={post.summary} />
        ))}
      </div>
    </div>
  );
};

export default Home;
