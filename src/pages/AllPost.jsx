import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

export default function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((newposts) => {
      if (newposts) {
        console.log("newposts:", newposts);
        setPosts(newposts.documents);
      }
      console.log("post:", posts);
    });
  }, []);

  return (
    <div className="">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
