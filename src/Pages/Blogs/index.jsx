import React, { useState, useEffect } from 'react';
import BlogCard from './components/BlogCard';
const articlesData = [
  // No Diabetes Category
  {
    id: 1,
    category: "no-diabetes",
    title: "Maintaining a Healthy Lifestyle",
    url: "https://www.who.int/philippines/news/feature-stories/detail/20-health-tips-for-2020",
  },
  {
    id: 2,
    category: "no-diabetes",
    title: "Understanding Prediabetes",
    url: "https://m.youtube.com/watch?v=TYINyqyp8xE",
  },
  {
    id: 3,
    category: "no-diabetes",
    title: "Healthy Eating on a Budget",
    url: "https://www.verywellfit.com/meal-plans-6386423",
  },
  {
    id: 4,
    category: "no-diabetes",
    title: "The Importance of Physical Activity",
    url: "https://www.cdc.gov/physicalactivity/basics/adults/index.htm",
  },
  {
    id: 5,
    category: "no-diabetes",
    title: "Managing Stress Levels",
    url: "https://www.wltx.com/article/news/health/stress-heart-health/101-97a14024-ed3a-488b-95ab-d09c57ac743f",
  },

  // Have a Risk of Diabetes Category
  {
    id: 6,
    category: "have-a-risk-of-diabetes",
    title: "Understanding Type 2 Diabetes",
    url: "https://www.niddk.nih.gov/health-information/diabetes",
  },
  {
    id: 7,
    category: "have-a-risk-of-diabetes",
    title: "Dietary Changes for Diabetes Prevention",
    url: "https://diabetes.org/",
  },
  {
    id: 8,
    category: "have-a-risk-of-diabetes",
    title: "Weight Loss and Diabetes Prevention",
    url: "https://bmcwomenshealth.biomedcentral.com/articles/10.1186/s12905-019-0864-5",
  },
  {
    id: 9,
    category: "have-a-risk-of-diabetes",
    title: "The Benefits of Exercise for Diabetes Prevention",
    url: "https://www.cdc.gov/diabetes/data/statistics-report/index.html",
  },
  {
    id: 10,
    category: "have-a-risk-of-diabetes",
    title: "Managing Prediabetes with Lifestyle Changes",
    url: "https://www.webmd.com/diabetes/video/reverse-prediabetes",
  },

  // Have Diabetes Category
  {
    id: 11,
    category: "have-diabetes",
    title: "Living Well with Diabetes",
    url: "https://www.cdc.gov/diabetes/basics/index.html",
  },
  {
    id: 12,
    category: "have-diabetes",
    title: "Managing Blood Sugar Levels",
    url: "https://my.clevelandclinic.org/departments/endocrinology-metabolism/depts/diabetes",
  },
  {
    id: 13,
    category: "have-diabetes",
    title: "Healthy Meal Planning for Diabetes",
    url: "https://diabetes.org/food-nutrition/meal-planning",
  },
  {
    id: 14,
    category: "have-diabetes",
    title: "Importance of Medication Adherence",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8037733/",
  },
  {
    id: 15,
    category: "have-diabetes",
    title: "Diabetes Complications and Prevention",
    url: "https://www.mayoclinic.org/diseases-conditions/peripheral-neuropathy/symptoms-causes/syc-20352061",
  },
];

const Blogs = () => {
  const [category, setCategory] = useState(null);
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);

  useEffect(() => {
    setArticles(articlesData.filter((article) => article.category === category));
  }, [category]);

  const handleCategoryChange = (predictedCategory) => {
    setCategory(predictedCategory);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <div className="py-16 px-4 text-center lg:text-left">
      <div className="container mx-auto flex flex-row items-center">
        <div className="border border-primary w-8/12 h-20  rounded-2xl flex items-center mr-24">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-md mr-8"></div>
            <h2 className="text-primary text-3xl font-bold">Stay Informed: Explore Articles Related to Your Health</h2>
          </div>
        </div>
      </div>

      {category && (
        <div className="container mx-auto">
          {/* Pagination section */}
          {articles.length > articlesPerPage && (
            <div className="pagination flex justify-center mb-8">
              {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }, (_, i) => (
                <button
                  key={i + 1}
                  className={`px-4 py-2 mr-2 rounded-md text-white shadow-md hover:bg-blue-700 focus:outline-none ${
                    currentPage === i + 1 ? 'bg-blue-500' : ''
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}

          {/* Displayed articles section */}
          {displayedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedArticles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
          ) : (
            <p className="text-center text-white">No articles found in this category.</p>
          )}
        </div>
      )}

      {/* Conditional rendering for when category is null */}
      {!category && (
        <div className="container mx-auto">
          {/* Display all articles using BlogCard component */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articlesData.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;