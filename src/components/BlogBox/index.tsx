import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

type BlogBoxProps = {
  id: string;
  title: string;
  summary: string;
};

const BlogBox: React.FC<BlogBoxProps> = ({ id, title, summary }) => {
  return (
    <div className={styles.blogBox}>
      <h2 className={styles.title}>{title}</h2>
      <p>{summary}</p>
      <Link href={`/posts/${id}`} passHref>
        <span className={styles.readMore}>Read More</span>
      </Link>
    </div>
  );
};

export default BlogBox;
