import { supabase } from '../utils/supabaseClient'

interface Post {
  id: string; // uuid
  title: string; // text
  summary: string; // text
  content: string; // text
  created_at: Date; // timestamp with time zone
  updated_at: Date; // timestamp with time zone
}

export const fetchPosts = async (): Promise<Post[]> => {
  const { data: posts, error } = await supabase
    .from<Post>('Posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return posts || [];
}

export const createPost = async (title: string, summary: string, content: string) => {
  const { data, error } = await supabase
    .from('Posts')
    .insert([
      { title, summary, content }
    ]);

  if (error) {
    console.error('Error creating post:', error);
    throw new Error('Failed to create post');
  }

  return data;
}
