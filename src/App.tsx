import * as post from "./data/post.json";
import PostCard from "./components/PostCard";

function App() {
  return (
    <>
      <PostCard post={post} />
    </>
  );
}

export default App;
