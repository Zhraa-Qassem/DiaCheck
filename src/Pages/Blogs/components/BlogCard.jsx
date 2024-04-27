import React from 'react';

const BlogCard = ({ article }) => {
  return (
    <div className="blog-card relative w-full md:w-80 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="blog-card-image relative overflow-hidden h-48 md:h-64">
        <iframe
          src={article.url}
          className="w-full h-full object-cover absolute top-0 left-0"
          frameBorder="0"
          allowFullScreen
          title="Article Summary"
        />
        <div className="blog-card-image-overlay absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-50 flex items-center justify-center">
          <p className="text-white bg-[#F7931B] text-center font-bold text-lg truncate">{article.title}</p>
        </div>
      </div>
      <div className="blog-card-content p-4">
        {/* Add additional content for the blog card (optional) */}
      </div>
    </div>
  );
};

export default BlogCard;
