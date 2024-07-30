import { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://codebuddy.review/posts");
        console.log(response.data);
        setPosts(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts: {error.message}</div>;

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="rounded-lg bg-white p-7 shadow-lg">
              <h2 className="text-2xl font-bold">{post.firstName + " " + post.lastName}</h2>
              <p className="text-gray-700">{post.writeup}</p>
            </div>
          ))
        ) : (
          <div>No posts available</div>
        )}
      </div>
    </div>
  );
};

export default Posts;
