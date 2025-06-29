import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Database_service from "../../appwrite/auth_services/configuration";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { Container, Button } from "../index";
export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.UserData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      Database_service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    Database_service.RemovePost(post.$id).then((status) => {
      if (status) {
        Database_service.DeleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-6">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl ">
          <img src={Database_service.GetFilePreview(post.featuredImage)} alt={post.title} className="rounded-xl object-cover" />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3 font-semibold hover:bg-green-700">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost} className="font-semibold hover:bg-red-700">
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{typeof post.content === "string" ? parse(post.content) : null}</div>
      </Container>
    </div>
  ) : null;
}
