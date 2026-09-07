import React, { useState } from 'react';

export default function Navbar({ onOpenAuth, onSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { label: 'Home', link: '#home', hasDropdown: false },
    { label: 'Programs', link: '#services', hasDropdown: true },
    { label: 'Coaching', link: '#trainers', hasDropdown: true },
    { label: 'Membership', link: '#plans', hasDropdown: false },
    { label: 'About Us', link: '#faq', hasDropdown: false }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (onSearch) onSearch(val);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#120a09]/92 backdrop-blur-md border-b border-white/10 ${isScrolled ? 'py-3 shadow-2xl' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Logo + Search Button Icon */}
        <div className="flex items-center gap-4">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-[6px] bg-[#e8291c] flex items-center justify-center font-black text-white text-base shadow-md">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[18px] leading-tight tracking-tight font-poppins">
                <span className="text-white">Fit</span><span className="text-[#e8291c]">Maker</span>
              </span>
              <small className="text-[9px] text-gray-400 font-medium tracking-wider uppercase leading-none mt-0.5 font-inter">
                TRANSFORM YOUR BODY
              </small>
            </div>
          </a>

          {/* Search Icon Box Button & Input Toggle matching screenshot */}
          <div className="relative flex items-center">
            {searchOpen ? (
              <div className="flex items-center bg-[#241413] border border-[#e8291c] rounded-xl px-3 py-1.5 gap-2 animate-fadeIn">
                <i className="fa-solid fa-magnifying-glass text-[#ff7a1a] text-xs"></i>
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="bg-transparent border-none outline-none text-white text-xs w-32 sm:w-44 font-inter placeholder-gray-400"
                />
                <button 
                  onClick={() => { setSearchOpen(false); setSearchQuery(''); if(onSearch) onSearch(''); }}
                  className="text-gray-400 hover:text-white text-xs"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setSearchOpen(true)}
                title="Search Site"
                className="w-9 h-9 rounded-xl bg-[#241413] border border-white/10 hover:border-[#e8291c] flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm"
              >
                <i className="fa-solid fa-magnifying-glass text-xs"></i>
              </button>
            )}
          </div>
        </div>

        {/* Center: Navigation Links matching exact image */}
        <nav className="hidden md:flex items-center gap-8 xl:gap-10">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              onClick={() => setActiveLink(item.label)}
              className={`text-[14.5px] font-medium transition-colors relative py-1 flex items-center gap-1.5 font-inter ${
                activeLink === item.label ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
              {item.hasDropdown && (
                <i className="fa-solid fa-chevron-down text-[10px] text-[#e8291c]"></i>
              )}
              {activeLink === item.label && (
                <span className="absolute bottom-[-6px] left-0 right-0 h-[2.5px] bg-[#e8291c] rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Right: Auth Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="#signup"
            onClick={() => onOpenAuth && onOpenAuth('login')}
            className="w-[72px] h-[34px] flex items-center justify-center rounded-full border border-[#CD4E17] text-[#ff7a1a] hover:bg-[#CD4E17]/15 font-semibold text-xs transition-all duration-300 font-inter"
          >
            Login
          </a>
          <a 
            href="#signup"
            onClick={() => onOpenAuth && onOpenAuth('signup')}
            className="w-[84px] h-[34px] flex items-center justify-center rounded-full bg-[#e8291c] hover:bg-[#d02316] text-white font-semibold text-xs shadow-md transition-all duration-300 font-inter"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a0f0e] border-b border-white/10 px-6 py-4 space-y-4">
          <nav className="flex flex-col space-y-3 font-inter text-sm">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.link}
                onClick={() => { setActiveLink(item.label); setMobileMenuOpen(false); }}
                className="flex items-center justify-between text-gray-200 hover:text-white"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <i className="fa-solid fa-chevron-down text-xs text-[#e8291c]"></i>}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="#signup" 
              onClick={() => { setMobileMenuOpen(false); if(onOpenAuth) onOpenAuth('login'); }}
              className="flex-1 text-center py-2 rounded-full border border-[#CD4E17] text-[#ff7a1a] text-xs font-semibold"
            >
              Login
            </a>
            <a 
              href="#signup" 
              onClick={() => { setMobileMenuOpen(false); if(onOpenAuth) onOpenAuth('signup'); }}
              className="flex-1 text-center py-2 rounded-full bg-[#e8291c] text-white text-xs font-semibold"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
