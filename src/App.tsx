import React, { useEffect, useState } from 'react';
import { Rocket, LineChart as ChartLineUp, Wallet, Users, Twitter, MessageCircle, Disc as Discord, Instagram, ArrowRight, Coins, Siren as Fire } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [price, setPrice] = useState("0.0000420");
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to connect wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        setWalletAddress(`${address.slice(0, 6)}...${address.slice(-4)}`);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask to connect your wallet.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur z-20">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <div className="flex items-center gap-2">
            <img
              src="./skibidi-removebg-preview.png"
              alt="Skibidi Toilet Logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              Skibidi Toilet 🚽
            </h1>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#presale" className="hover:text-yellow-400">Presale</a>
            <button
              onClick={connectWallet}
              className="bg-gradient-to-r from-pink-500 to-yellow-500 px-4 py-2 rounded-full font-bold hover:scale-105 transition-transform"
            >
              {walletAddress ? walletAddress : "Connect Wallet"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-bounce mb-8">
            <img 
              src="/skibidi-removebg-preview.png"
              alt="Skibidi Toilet Mascot" 
              className="w-32 h-32 mx-auto rounded-full shadow-2xl"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            Skibidi Toilet Coin 🚽
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Flush Your Way to the Moon! 🌕🚀
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-pink-500 to-yellow-500 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              Buy Now
            </button>
            <button className="bg-white/10 backdrop-blur px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-colors">
              Join Community
            </button>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-4 inline-block">
            <p className="text-sm text-gray-400">Current Price</p>
            <p className="text-2xl font-bold">${price}</p>
          </div>
        </div>
      </header>

      {/* Tokenomics Section */}
      <section id="presale" className="py-20 bg-black/50 backdrop-blur">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Skibidi Tokenomics 🚽</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Coins className="w-12 h-12" />, title: "420 Trillion", desc: "Total Supply" },
              { icon: <Fire className="w-12 h-12" />, title: "69% Burned", desc: "Forever Gone 💥" },
              { icon: <ChartLineUp className="w-12 h-12" />, title: "5/5", desc: "Buy/Sell Tax" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="flex justify-center mb-4 text-yellow-400">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Flush Map 🚽</h2>
          <div className="max-w-4xl mx-auto">
            {[
              { phase: "Phase 1", items: ["Website Flush", "Community Building", "Token Launch"] },
              { phase: "Phase 2", items: ["CEX Listings", "NFT Collection (Toilet Seats)", "Marketing Flush"] },
              { phase: "Phase 3", items: ["Mobile App", "Skibidi DAO", "Metaverse Toilets"] }
            ].map((phase, i) => (
              <div key={i} className="flex gap-4 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  {i < 2 && <div className="w-0.5 h-full bg-yellow-400/30 mt-2"></div>}
                </div>
                <div className="bg-white/5 rounded-xl p-6 flex-1">
                  <h3 className="text-2xl font-bold mb-4">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-yellow-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Join the Skibidi Army 🚽</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Twitter />, name: "Twitter", link: "#" },
              { icon: <MessageCircle />, name: "Telegram", link: "#" },
              { icon: <Discord />, name: "Discord", link: "#" },
              { icon: <Instagram />, name: "Instagram", link: "#" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
                <p className="font-bold">{social.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/80 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">© 2025 Skibidi Toilet Coin. All rights reserved. 🚽</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
