import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featureImage }) {
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4">
          <div className="w-full justify-center mb-4">
            <img
              src={appwriteService.getFilePreview(featureImage)}
              alt={title}
            />
          </div>
          <h2 className="text-xl font-bold"></h2>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
