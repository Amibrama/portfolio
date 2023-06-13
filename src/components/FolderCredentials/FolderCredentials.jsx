import React, { useState } from "react";
import folderImage from "../../assets/folder.png";
import Credential from "./Credential";
import "./FolderCredentials.css";

const FolderCredentials = () => {
  const [showCredentials, setShowCredentials] = useState(false);

  const handleFolderClick = () => {
    setShowCredentials(!showCredentials);
  };

  return (
    <div className="folder-credentials">
      {showCredentials && (
        <div className="credentials">
          <Credential />
        </div>
      )}
      <img
        src={folderImage}
        alt="Folder"
        className="folder-image"
        onClick={handleFolderClick}
      />
      <p> My Credentials</p>
    </div>
  );
};

export default FolderCredentials;
