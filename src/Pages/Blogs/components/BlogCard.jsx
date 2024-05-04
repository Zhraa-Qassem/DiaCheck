import React from 'react';

const BlogCard = ({ article }) => {
  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer" className="block my-6 w-64 md:w-full bg-primary rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="p-4">
        <h3 className="text-black bg-white text-xl font-bold py-2 px-4 mb-4">{article.title}</h3>
        <div className="blog-card-image relative overflow-hidden h-48 md:h-64">
          <iframe
            src={article.url}
            className="w-full h-full object-cover absolute top-0 left-0"
            frameBorder="0"
            allowFullScreen
            title="Article Summary"
          />
        </div>
      </div>
      <div className="blog-card-content p-4">
        {/* Add additional content for the blog card (optional) */}
      </div>
    </a>
  );
};

export default BlogCard;
