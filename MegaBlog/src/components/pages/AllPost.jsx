import { useState, useEffect } from "react";
import Database_service from "../../appwrite/auth_services/configuration";
import { Container, PostCard } from "../index";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Database_service.GetPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
