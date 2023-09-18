import React from 'react';
import s1 from '../Assets/s1.jpeg';
import s2 from '../Assets/s2.jpg';
import s3 from '../Assets/s3.jpg';
import s4 from '../Assets/s4.jpg';
import s5 from '../Assets/s5.jpg';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const pastSpeakersData = [
  {
    name: 'Prof. Dhruv Nath',
    title: 'CEO, Startup Inc.',
    image: s1,
    linkedin: 'https://www.linkedin.com/in/example1',
    twitter: 'https://twitter.com/example1',
    instagram: 'https://www.instagram.com/example1',
    facebook: 'https://www.facebook.com/example1',
  },
  {
    name: 'Mr. Ashneer Grover',
    title: 'CEO, Startup Inc.',
    image: s2,
    linkedin: 'https://www.linkedin.com/in/example2',
    twitter: 'https://twitter.com/example2',
    instagram: 'https://www.instagram.com/example2',
    facebook: 'https://www.facebook.com/example2',
  },
  {
    name: 'Dadashaheb Bhagat',
    title: 'CEO, Startup Inc.',
    image: s3,
    linkedin: 'https://www.linkedin.com/in/example3',
    twitter: 'https://twitter.com/example3',
    instagram: 'https://www.instagram.com/example3',
    facebook: 'https://www.facebook.com/example3',
  },
  {
    name: 'Ramana Telidevara',
    title: 'CEO, Startup Inc.',
    image: s4,
    linkedin: 'https://www.linkedin.com/in/example4',
    twitter: 'https://twitter.com/example4',
    instagram: 'https://www.instagram.com/example4',
    facebook: 'https://www.facebook.com/example4',
  },
  {
    name: 'Vijay Shekhar Sharma',
    title: 'CEO, Startup Inc.',
    image: s5,
    linkedin: 'https://www.linkedin.com/in/example5',
    twitter: 'https://twitter.com/example5',
    instagram: 'https://www.instagram.com/example5',
    facebook: 'https://www.facebook.com/example5',
  },
  // Add more speaker objects
];

const PastSpeakers = () => {
  return (

    <div id="divider_id" class="website-divider-container-603707">

   <svg xmlns="http://www.w3.org/2000/svg" class="divider-img-603707" viewBox="0 0 1080 137" preserveAspectRatio="none">
  <path d="M 0,137 V 59.03716 c 158.97703,52.21241 257.17659,0.48065 375.35967,2.17167 118.18308,1.69101 168.54911,29.1665 243.12679,30.10771 C 693.06415,92.25775 855.93515,29.278599 1080,73.61449 V 137 Z" style={{opacity:"0.85"}}></path>
  <path d="M 0,10.174557 C 83.419822,8.405668 117.65911,41.78116 204.11379,44.65308 290.56846,47.52499 396.02558,-7.4328 620.04248,94.40134 782.19141,29.627636 825.67279,15.823104 1080,98.55518 V 137 H 0 Z" style={{opacity:"0.5"}}></path>
  <path d="M 0,45.10182 C 216.27861,-66.146913 327.90348,63.09813 416.42665,63.52904 504.94982,63.95995 530.42054,22.125806 615.37532,25.210412 700.33012,28.295019 790.77619,132.60682 1080,31.125744 V 137 H 0 Z" style={{opacity:"0.25"}}></path>
</svg>   


    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-black mb-12">
          Past Speakers and Investers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {pastSpeakersData.map((speaker, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <img
                src={speaker.image}
                alt="User Avatar"
                className="w-40 h-40 rounded-full mx-auto mb-2 bg-white"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{speaker.title}</p>
                <div className="flex items-center justify-center space-x-4">
                  <Link
                    to={speaker.linkedin}
                    className="text-blue-500 hover:underline hover:text-blue-600 transition duration-300"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    to={speaker.twitter}
                    className="text-blue-400 hover:underline hover:text-blue-500 transition duration-300"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    to={speaker.instagram}
                    className="text-red-500 hover:underline hover:text-red-600 transition duration-300"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    to={speaker.facebook}
                    className="text-blue-800 hover:underline hover:text-blue-900 transition duration-300"
                  >
                    <FaFacebook />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default PastSpeakers;
