import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon, TwitterIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-[#120a09] border-t border-white/10 pt-16 pb-12 text-gray-400 selection:bg-[#D90A14] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Layout matching reference image media_1788792422585.png exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10">
          
          {/* Column 1: Brand Logo, Description & Social Icons (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Logo + Transform Your Body Header */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-sm bg-[#D90A14] flex items-center justify-center font-black text-white text-base">
                  F
                </div>
                <span className="font-extrabold text-2xl text-white tracking-tight font-sans">
                  Fit<span className="text-[#D90A14]">Maker</span>
                </span>
              </div>
              <p className="text-white text-xs font-semibold tracking-wide">
                Transform Your Body
              </p>
            </div>

            {/* Description Paragraph with Red Highlights matching photo */}
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm font-sans">
              Transform Your Body with FitMaker, Your Trusted Partner in Fitness. With Over <span className="text-[#D90A14] font-medium">5 Years</span> of Experience, We Offer Expert Coaching, Tailored Workout Plans, and Comprehensive Nutritional Guidance. <span className="text-[#D90A14] font-medium">Join Our Community</span> and Start Your Journey Towards a Healthier, Stronger You. Ready to Make a Change?
            </p>

            {/* Clean Outline Social Icons matching uploaded picture */}
            <div className="flex items-center gap-5 pt-3">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/30 bg-transparent flex items-center justify-center text-white hover:border-[#D90A14] hover:text-[#D90A14] transition-all group"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5 transition-colors" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/30 bg-transparent flex items-center justify-center text-white hover:border-[#D90A14] hover:text-[#D90A14] transition-all group"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 transition-colors" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/30 bg-transparent flex items-center justify-center text-white hover:border-[#D90A14] hover:text-[#D90A14] transition-all group"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-5 h-5 transition-colors" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/30 bg-transparent flex items-center justify-center text-white hover:border-[#D90A14] hover:text-[#D90A14] transition-all group"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5 transition-colors" />
              </a>
            </div>
          </div>

          {/* Column 2: Company (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#D90A14] font-bold text-sm tracking-wide font-sans">
              Company
            </h4>
            <ul className="space-y-3 text-xs text-gray-400 font-sans">
              <li><a href="#trainers" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#testimonial" className="hover:text-white transition-colors">Testimonial</a></li>
              <li><a href="#signup" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Resources (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#D90A14] font-bold text-sm tracking-wide font-sans">
              Resources
            </h4>
            <ul className="space-y-3 text-xs text-gray-400 font-sans">
              <li><a href="#tools" className="hover:text-white transition-colors">Fitness Tools</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Workout Videos</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Nutrition Guides</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#testimonial" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#plans" className="hover:text-white transition-colors">Membership</a></li>
            </ul>
          </div>

          {/* Column 4: Programs (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#D90A14] font-bold text-sm tracking-wide font-sans">
              Programs
            </h4>
            <ul className="space-y-3 text-xs text-gray-400 font-sans">
              <li><a href="#services" className="hover:text-white transition-colors">Weight Loss</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Building Muscles</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Home Workout</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Gym Plan</a></li>
              <li><a href="#plans" className="hover:text-white transition-colors">Our Plans</a></li>
              <li><a href="#signup" className="hover:text-white transition-colors">Fitness Group</a></li>
            </ul>
          </div>

          {/* Column 5: Contact Us (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#CD4E17] font-bold text-sm tracking-wide font-sans">
              Contact Us
            </h4>
            <ul className="space-y-4 text-xs text-gray-400 font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Usa - Washngton DC</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>1234-56789</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>Fitmakerrr@Gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}
