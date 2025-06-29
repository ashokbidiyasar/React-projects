import React,{useState,useEffect} from 'react'
import { Container,PostForm } from   '../index'
import { useParams,useNavigate } from 'react-router-dom';
import Database_service from '../../appwrite/auth_services/configuration';
const EditPost = () => {
    const [post, setpost] = useState({});
    const navigate = useNavigate();
    const {slug} = useParams();// Very Important because at first i was using slug so use Params gives here a object so it was creating problems

    useEffect(() => {
      if (slug) {
        Database_service.getPost(slug).then((post) => {
          if (post) {
            setpost(post);
          }
        });
      } else {
        navigate("/");
      }
    }, [slug, navigate]);

  return (
    <Container>
        <PostForm post={post} />
    </Container>
  )
}

export default EditPost