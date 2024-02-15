import type { NextPage } from 'next';
import BlogBox from '../components/BlogBox';


const blogPosts = [
  {
    id: '1',
    title: 'temp1',
    summary: 'summary1',
  },
  {
    id: '2',
    title: 'temp2',
    summary: 'summary2',
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <h1>ブログ記事一覧</h1>
      <div>
        {blogPosts.map((post) => (
          <BlogBox key={post.id} id={post.id} title={post.title} summary={post.summary} />
        ))}
      </div>
    </div>
  );
};

export default Home;
