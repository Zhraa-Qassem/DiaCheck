import React, { useState, useEffect } from 'react';
import BlogCard from './components/BlogCard';
import ArticleHeader from './components/ArticleHeader';
import PredictionHeader from '../CheckRisk/component/PredictionHeader';
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
  const urlParams = new URLSearchParams(window.location.search);
  const prediction = urlParams.get('prediction');

  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);


  useEffect(() => {
    // Filter articles based on the prediction
    let filteredArticles = [];
    if (prediction === 0) {
      // No diabetes
      filteredArticles = articlesData.filter((article) => article.category === "no-diabetes");
    } else if (prediction === 1) {
      // Low risk of diabetes
      filteredArticles = articlesData.filter((article) => article.category === "have-a-risk-of-diabetes");
    } else if (prediction === 2) {
      // High risk of diabetes
      filteredArticles = articlesData.filter((article) => article.category === "have-diabetes");
    } else {
      // Default: No prediction or invalid prediction
      filteredArticles = articlesData;
    }

    setArticles(filteredArticles);
  }, [prediction]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <div className="py-16 px-4  ml-8 flex flex-col items-center justify-center text-center lg:text-left">
      {/* Conditional rendering for header */}
      {prediction !== null ? <PredictionHeader prediction={prediction} /> : <ArticleHeader />}

      {/* Pagination section */}
      <div className='w-full flex flex-col text-start items-start justify-start  '>
      {articles.length > articlesPerPage && (
        <div className="pagination flex justify-center mb-8">
          {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }, (_, i) => (
            <button
              key={i + 1}
              className={`px-4 py-2 mr-2 rounded-md text-primary shadow-md hover:bg-white hover:text-primary border hover:border-primary focus:outline-none ${
                currentPage === i + 1 ? 'bg-primary text-white hover:text-primary border hover:border-primary hover:bg-white' : ''
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
      </div>

      {/* Displayed articles section */}
      {displayedArticles.length > 0 ? (
        <div className="container mx-auto">
          <div className="flex flex-col w-full">
            {displayedArticles.map((article) => (
              <div key={article.id} className="flex flex-col">
                <BlogCard article={article} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-white">No articles found.</p>
      )}
    </div>
  );
};

export default Blogs;