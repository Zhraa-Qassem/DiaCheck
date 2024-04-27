import React from 'react';
import FeatureCard from './component/FeatureCard';
import figWIthi from '../../assets/figWIthi.png'
import website from '../../assets/website.png'
import decision from '../../assets/decision.png'
import predective from '../../assets/predective.png'
import faster from '../../assets/faster.png'
const About = () => {
  const features = [
    {
      title: "Revolutionizing Diabetes Risk Assessment with Machine Learning",
      description:
        "At the core of our innovative approach lies a powerful machine learning model. This sophisticated system analyzes a comprehensive set of your lab results, providing valuable insights into your potential risk for developing diabetes. Unlike traditional methods that can involve lengthy wait times and complex evaluations, our system delivers results quickly and conveniently. This empowers you to take charge of your health and make informed decisions sooner. No more waiting in the dark – our system sheds light on your health status, allowing you to proactively manage your well-being and potentially prevent future health concerns.",
      image: faster,
    },
    {
      description:
        "Our system goes beyond traditional analysis by leveraging the cutting-edge power of machine learning algorithms. These algorithms are trained on massive datasets of health information, allowing them to identify complex patterns and relationships within your lab results. Through this comprehensive analysis, we aim to deliver highly accurate assessments of your health status with a focus on potential diabetes risk. This sophisticated approach has the potential to reduce the need for additional examinations in the future, saving you valuable time and resources.  Furthermore, these insights empower you to take proactive steps towards maintaining your well-being and preventing potential health concerns.",
      title: "Unlocking the Power of Machine Learning for Early Detection",
      image: predective,
    },
    {
      title: "Unparalleled Accessibility: Analyze Your Health Data from Anywhere",
      description:
        "We understand that convenience is key in today's fast-paced world. That's why our user-friendly platform provides seamless accessibility from anywhere with an internet connection. There's no need for complicated software downloads or installations. Simply upload your lab results through our secure interface and receive your analysis within minutes. Additionally, you'll have access to a wealth of relevant educational resources  – all conveniently located in one place. This web-based accessibility empowers both individuals and healthcare professionals to make informed decisions about their health, regardless of their physical location.",
      image: website,
    },
    {
      title: "Actionable Insights: Partnering with You on Your Health Journey",
      description:
        "Our system is more than just a results provider; it's a partner in your health journey. We believe that knowledge is power, and that's why we go beyond simply offering data. Our analysis provides you with actionable insights that can be used to make informed decisions about your health. Early detection of potential diabetes allows for proactive management strategies, such as lifestyle modifications or preventative treatments. With our system's guidance, you'll be empowered to take control of your health and work towards a healthier future. Additionally, healthcare professionals can utilize our insights to personalize treatment plans and patient care, ultimately improving patient outcomes and quality of life.",
      image: decision,
    },
  ];
  


  return (
    <div className=" py-16 px-4 text-center lg:text-left">
      <div className="container mx-auto flex flex-row  items-center">  {/* Container with flexbox */}
      <div className='bg-primary w-8/12 h-20 px-6 rounded-2xl flex items-center mr-24'>
          <div className='flex items-center'>
            <div className='w-10 h-10 bg-white rounded-md mr-8'></div>
            <h2 className="text-white text-3xl font-bold ">About Our Predictive System</h2>
          </div>
        </div>
        <img src={figWIthi} alt="Image description" className="w-60 h-48 " />  {/* Image with adjustments */}
      </div>
      {/* Feature cards section moved here */}
      {features.map((feature) => (
        <FeatureCard
        key={feature.title}
        image={feature.image}
        title={feature.title}
        description={feature.description}
      />
      ))}
    </div>
  );
};

export default About;