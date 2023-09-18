import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaAward } from 'react-icons/fa';

const UserProfile = () => {
  const socialMediaLinks = [
    { name: 'Facebook', link: 'https://www.facebook.com/yourusername' },
    { name: 'Twitter', link: 'https://twitter.com/yourusername' },
    { name: 'Instagram', link: 'https://www.instagram.com/yourusername' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/yourusername' },
  ];

  const achievements = [
    { title: 'Ambassador of the Month', year: 2022 },
    { title: 'Most Active Ambassador', year: 2021 },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-8 text-white">
      <div className="max-w-xl mx-auto text-center">
        <img
          src="user-avatar.jpg" // Replace with the path to your user's image
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
        />
        <h1 className="text-3xl font-semibold mb-2">Ayush Agarwal</h1>
        <p className="text-lg">Campus Ambassador</p>

        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-4">
          {socialMediaLinks.map((socialMedia, index) => (
            <a
              key={index}
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-gray-300"
            >
              {getSocialMediaIcon(socialMedia.name)}
            </a>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Achievements</h2>
          <ul className="list-disc list-inside">
            {achievements.map((achievement, index) => (
              <li key={index} className="mb-1">
                <span className="text-lg">{achievement.title}</span> - {achievement.year}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const getSocialMediaIcon = (socialMediaName) => {
  switch (socialMediaName.toLowerCase()) {
    case 'facebook':
      return <FaFacebook />;
    case 'twitter':
      return <FaTwitter />;
    case 'instagram':
      return <FaInstagram />;
    case 'linkedin':
      return <FaLinkedin />;
    default:
      return null;
  }
};

export default UserProfile;
