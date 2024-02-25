import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import BlogBox from '../components/BlogBox';
import { supabase } from '../lib/supabaseClient';

interface Post {
  id: string;
  title: string;
  summary: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface Props {
  posts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: posts, error } = await supabase
    .from('Posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return { props: { posts: [] } };
  }

  return { props: { posts } };
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <h1>ゆっきーのやりたい放題ブログ</h1>
      <div>
        {posts.map((post) => (
          <BlogBox key={post.id} id={post.id} title={post.title} summary={post.summary} />
        ))}
      </div>
    </div>
  );
};

export default Home;
