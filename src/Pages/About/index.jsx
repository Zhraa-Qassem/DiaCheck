import React from 'react';

const About = () => {
  return (
    <div className="about-section bg-gray-100 py-16 px-4 text-center lg:text-left">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Our Predictive System</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Section 1: Faster & Easier Diagnosis */}
          <div className="about-content">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Faster and Easier Diagnosis</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our system streamlines the process of determining diabetes risk. By analyzing various health parameters and lab test results, it provides valuable insights quickly and conveniently, eliminating the need for lengthy traditional evaluations.
            </p>
          </div>

          {/* Section 2: Sophisticated Predictive System */}
          <div className="about-content">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sophisticated Predictive System</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Leveraging advanced machine learning methodologies, our system offers a sophisticated approach to diabetes prediction. Through comprehensive analysis of health data, it aims to provide highly accurate assessments of the likelihood of developing diabetes. This empowers individuals to take a proactive stance towards their health.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {/* Section 3: Web-Based Accessibility */}
          <div className="about-content">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Web-Based Accessibility</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              The system is web-based, ensuring accessibility for both healthcare professionals and individuals alike. This user-friendly platform allows for convenient interaction, enabling upload of health data, retrieval of predictive results, and access to relevant educational resources – all in one place.
            </p>
          </div>

          {/* Section 4: Empowering Decisions */}
          <div className="about-content">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Empowering Decisions</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our system provides actionable insights that empower individuals and healthcare professionals to make informed decisions. Early detection of potential diabetes allows for proactive management strategies, ultimately improving patient outcomes and quality of life.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
