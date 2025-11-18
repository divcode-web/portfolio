import { useState, useEffect } from 'react';
import { Code2, Smartphone, Database, Zap, Shield, GitBranch, Award, GraduationCap } from 'lucide-react';

export function About() {
  const [activeTab, setActiveTab] = useState('bio');
  const [gifLoaded, setGifLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const frontendSkills = [
    { name: 'React', icon: Code2 },
    { name: 'TypeScript', icon: Zap },
    { name: 'Tailwind CSS', icon: Code2 },
    { name: 'Next.js', icon: Smartphone },
  ];

  const web3Skills = [
    { name: 'Solidity', icon: Code2 },
    { name: 'Ethers.js', icon: GitBranch },
    { name: 'Web3.js', icon: Database },
    { name: 'Smart Contracts', icon: Shield },
  ];

  const tools = [
    { name: 'Vite', icon: Zap },
    { name: 'Git', icon: GitBranch },
    { name: 'Hardhat', icon: Database },
    { name: 'VS Code', icon: Code2 },
  ];

  const qualifications = [
    { title: ' React Developer', issuer: '', year: '2025' },
    { title: 'Blockchain Developer ', issuer: '', year: '2025' },
    { title: 'Front End Web Development', issuer: 'Udemy/Teachly', year: '2025' },
    { title: 'Virtual Assistant', issuer: '', year: '2024' },
  ];

  const certificates = [
    { name: 'Front End Web Development', issuer: 'Udemy/Teachly', date: '2025' },
/*     { name: 'Solidity Smart Contracts', issuer: '', date: '2023' },
    { name: 'Web3 Security Best Practices', issuer: 'OpenZeppelin', date: '2023' }, */
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experienced frontend developer with deep expertise in Web3 and blockchain technologies. Passionate about building intuitive user experiences and decentralized applications.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('bio')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'bio'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Bio
            </button>
            <button
              onClick={() => setActiveTab('qualifications')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'qualifications'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Qualifications
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'bio' && (
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Experienced in web development, I've evolved from building traditional web applications to pioneering decentralized solutions. I combine beautiful UI design with robust backend logic.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in Web3 has taught me to write secure, efficient code while maintaining an exceptional user experience. Whether it's a sleek DApp interface or a complex smart contract integration, I approach every project with precision and creativity.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Download Resume
                </a>
                <a
                  href="#"
                  className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                >
                  My Blog
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center overflow-hidden">
                {!isMobile || gifLoaded ? (
                  <img
                    src="/images/my-avatar.gif"
                    alt="Profile Avatar"
                    className="w-48 h-48 rounded-full object-cover"
                    onLoad={() => setGifLoaded(true)}
                    onError={() => setGifLoaded(true)}
                  />
                ) : (
                  <img
                    src="/images/my-avatar.gif"
                    alt="Profile Avatar - Click to animate"
                    className="w-48 h-48 rounded-full object-cover cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                    onClick={() => setGifLoaded(true)}
                    style={{
                      filter: 'grayscale(0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                )}
                {/* Fallback for very slow connections */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-800 dark:to-cyan-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300"
                  style={{ display: gifLoaded ? 'none' : 'flex' }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2 mx-auto">
                      DI
                    </div>
                    <p className="text-sm font-medium">Loading...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'qualifications' && (
          <div className="space-y-12">
            {/* Qualifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <GraduationCap size={24} className="text-blue-600" />
                Professional Qualifications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {qualifications.map((qual, index) => (
                  <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{qual.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{qual.issuer}</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{qual.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Award size={24} className="text-cyan-600" />
                Certificates & Achievements
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                  <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
                    <Award size={32} className="text-cyan-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bio' && (
          /* Skills Grid */
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Code2 size={24} className="text-blue-600" />
                Frontend Skills
              </h3>
              <div className="space-y-3">
                {frontendSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md dark:hover:shadow-md/50 transition-shadow"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Web3 Skills */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Shield size={24} className="text-cyan-600" />
                Web3 & Blockchain
              </h3>
              <div className="space-y-3">
                {web3Skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md dark:hover:shadow-md/50 transition-shadow"
                  >
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Zap size={24} className="text-yellow-600" />
                Tools & Dev
              </h3>
              <div className="space-y-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md dark:hover:shadow-md/50 transition-shadow"
                  >
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
