import React from 'react'
import Database_service from '../appwrite/auth_services/configuration';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div
        className="w-full bg-[#FFFFFF] rounded-xl p-4 hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-shadow duration-300
         ring-1 ring-gray-100"
      >
        <div className="w-full justify-center mb-4">
          <img src={Database_service.GetFilePreview(featuredImage)} alt={"Error in loading"} className="rounded-xl" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard