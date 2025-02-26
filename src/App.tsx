import React, { useEffect, useState } from 'react';
import { Rocket, LineChart as ChartLineUp, Wallet, Users, Twitter, MessageCircle, Disc as Discord, Instagram, ArrowRight, Coins, Siren as Fire } from 'lucide-react';
import { Book } from "lucide-react";

function App() {
  
  const [scrollY, setScrollY] = useState(0);
  const [price, setPrice] = useState("0.001");


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white">
      {/* Navbar */}
      

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
          <a
  href="https://skibidi-presale.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-pink-500 to-yellow-500 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
>
  Buy Now
</a>

<a
  href="https://discord.gg/JA8wEAwc"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/10 backdrop-blur px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-colors"
>
  Join Community
</a>
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "Total Supply", amount: "1 Billion Tokens (1,000,000,000)" },
        { title: "Public Sale", amount: "50% (500M)" },
        { title: "Liquidity", amount: "30% (300M)" },
        { title: "Marketing", amount: "10% (100M)" },
        { title: "Airdrop", amount: "5% (50M)" },
        { title: "Team", amount: "5% (50M)" },
      ].map((item, i) => (
        <div key={i} className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
          <p className="text-yellow-400 text-xl">{item.amount}</p>
        </div>
      ))}
    </div>
  </div>
</section>


 {/* Roadmap Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">🚽 Flush Map</h2>
    <div className="max-w-4xl mx-auto">
      {[
        {
          phase: "🚀 Phase 1: Preparation & Development ",
          items: [
            "✅ Development of the token smart contract",
            "🌐 Website & social media launch",
            "📄 Release of Whitepaper & Litepaper",
            "🔍 Third-party smart contract audit",
          ],
        },
        {
          phase: "🔥 Phase 2: Presale & Community Building ",
          items: [
            "🎉 Presale launch on Polygon Network",
            "🎁 Airdrops & giveaways to reward early supporters",
            "📢 Influencer marketing & social media promotions",
            "📚 Creation of educational content (guides, videos, tutorials)",
          ],
        },
        {
          phase: "🌍 Phase 3: Token Launch & DEX Listing ",
          items: [
            "💱 Listing on QuickSwap",
            "📊 Applications for CoinGecko & CoinMarketCap",
            "🔒 Creation & locking of liquidity pool",
            "❤️ First charity donation event",
          ],
        },
        {
          phase: "🚀 Phase 4: Expansion & Ecosystem Growth ",
          items: [
            "🎨 Launch of NFT collection",
            "🛍️ Introduction of Skibidi merchandise store",
            "🤝 Strategic partnerships with influencers & content creators",
            "💰 Launch of staking platform",
            "🗳️ Governance portal for community voting",
          ],
        },
      ].map((phase, i) => (
        <div key={i} className="flex gap-4 mb-12">
          {/* Timeline Marker */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold">
              {i + 1}
            </div>
            {i < 3 && <div className="w-0.5 h-full bg-yellow-400/30 mt-2"></div>}
          </div>
          {/* Phase Content */}
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
              { icon: <Twitter />, name: "x", link: "https://x.com/SkibidiPolygon" },
              { icon: <Book />, name: "GitBook", link: "https://skibidis-organization.gitbook.io/skibidi" },
              { icon: <Discord />, name: "Discord", link: "https://discord.gg/JA8wEAwc" },
              { icon: <Instagram />, name: "Instagram", link: "https://www.instagram.com/skibidipolygon/?hl=en" }
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
