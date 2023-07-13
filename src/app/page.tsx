import { allPosts } from 'contentlayer/generated';

import { Grid } from '@/components/Grid';
import { PostCard } from '@/components/PostCard';

export default function Home() {
  const posts = allPosts.map((post) => post);

  return (
    <main className="">
      <div>
        <Grid sm={1} md={2} lg={3}>
          {posts.map((post) => (
            <PostCard key={post._id} />
          ))}
        </Grid>
      </div>
    </main>
  );
}
