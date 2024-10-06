type Post = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex w-[300px] flex-col gap-2 rounded-md bg-neutral-800 p-2 text-slate-300">
      <h2 className="text-lg font-semibold">{post.title}</h2>
      <p>{post.content}</p>
      <p className="text-sm text-neutral-400">{post.user.name}</p>
      <div className="flex flex-row gap-2">
        <button className="border-slate-100 border-2 rounded-md px-2">
          Read More
        </button>
        <button className="border-slate-100 border-2 rounded-md px-2">
          Comments
        </button>
      </div>
    </div>
  );
}

export default PostCard;
