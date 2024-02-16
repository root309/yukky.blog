const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
  try {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.error('Environment variables SUPABASE_URL or SUPABASE_ANON_KEY are not defined.');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const { data, error } = await supabase
      .from('Posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      return res.status(500).json({ error: 'Failed to fetch posts', details: error.message });
    }

    console.log('Fetched posts:', data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Unhandled error in fetchPosts:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' });
  }
};
