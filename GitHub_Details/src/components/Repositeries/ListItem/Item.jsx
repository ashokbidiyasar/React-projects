import React from 'react'

const Item = ({name,url,language,number}) => {
  return (
    <div className="flex  text-gray-900 justify-between items-center">
      <p className="flex gap-3">
        <span>{number}.</span>
        <span>{name}</span>
      </p>

      <p className="cursor-pointer">
        <a href={url} className="underline-none hover:underline cursor-pointer" target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </p>
      
      <p>{language}</p>
    </div>
  );
}

export default Item