import { createClient } from '@supabase/supabase-js';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// 環境変数の型定義
interface Env {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env as Env;

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const { data, error } = await supabase
    .from('Posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return res.status(500).json({ error: 'Failed to fetch posts' });
  }

  res.status(200).json(data);
};
