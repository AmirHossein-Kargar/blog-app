import PostCard from "@/components/PostCard";

export default async function PostLIst() {
  // * fetching posts from the APIs
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const data = await res.json();
  const posts = data.data.posts;

  return (
    <div className="grid grid-cols-12 gap-8 mt-4">
      {posts.map((post) => {
        return (
          <div
            key={post._id}
            className=" col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-4"
          >
            <PostCard
              title={post.title}
              coverImage={post.coverImage}
              slug={post.slug}
              author={post.author}
              authorName={post.author.name}
              readingTime={post.readingTime}
            />
          </div>
        );
      })}
    </div>
  );
}