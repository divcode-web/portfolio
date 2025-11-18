import { Zap, Lock, TrendingUp, DollarSign, Code2, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Web3Expertise() {
  // Scroll animations
  const { elementRef: sectionRef } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2, delay: 100 });
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.2, delay: 200 });
  const { elementRef: blockchainRef, isVisible: blockchainVisible } = useScrollAnimation({ threshold: 0.2, delay: 300 });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2, delay: 400 });

  const expertise = [
    {
      icon: Code2,
      title: 'Smart Contract Integration',
      description: 'Integrate and interact with smart contracts using ethers.js and Web3.js',
    },
    {
      icon: Lock,
      title: 'Wallet Integration',
      description: 'MetaMask, WalletConnect, and other Web3 wallet connections',
    },
    {
      icon: TrendingUp,
      title: 'DeFi Development',
      description: 'Build decentralized finance applications with secure protocols',
    },
    {
      icon: DollarSign,
      title: 'Token Mechanisms',
      description: 'ERC-20, ERC-721, ERC-1155 token standards and implementations',
    },
    {
      icon: Shield,
      title: 'Security Best Practices',
      description: 'Gas optimization, contract auditing, and security considerations',
    },
    {
      icon: Zap,
      title: 'Layer 2 Solutions',
      description: 'Polygon, Arbitrum, Optimism integration and optimization',
    },
  ];

  const blockchains = [
    { name: 'Ethereum', color: 'from-blue-500 to-blue-600' },
    { name: 'Polygon', color: 'from-purple-500 to-purple-600' },
    { name: 'Arbitrum', color: 'from-blue-400 to-blue-500' },
    { name: 'Optimism', color: 'from-red-500 to-red-600' },
    { name: 'Base', color: 'from-blue-600 to-cyan-600' },
    { name: 'Solana', color: 'from-green-500 to-green-600' },
  ];

  return (
    <section 
      id="expertise" 
      ref={sectionRef}
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Web3 & Blockchain Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized knowledge in building secure, scalable, and user-friendly blockchain applications
          </p>
        </div>

        {/* Expertise Grid */}
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-700 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-xl transition-all duration-300 group ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: gridVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Blockchain Networks */}
        <div 
          ref={blockchainRef}
          className={`bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 transition-all duration-700 ${
            blockchainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Blockchain Networks
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {blockchains.map((blockchain, index) => (
              <div
                key={blockchain.name}
                className={`p-6 bg-gradient-to-br ${blockchain.color} rounded-2xl text-white font-semibold text-center transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl ${
                  blockchainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: blockchainVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                {blockchain.name}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div 
          ref={statsRef}
          className={`grid md:grid-cols-3 gap-8 mt-16 transition-all duration-700 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div 
            className={`text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              3-5
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Smart Contracts Deployed
            </p>
          </div>
          <div 
            className={`text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
              2
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Blockchain Networks
            </p>
          </div>
          <div 
            className={`text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              $5k+
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Transaction Volume
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
