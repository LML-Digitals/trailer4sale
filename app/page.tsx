'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    // @ts-ignore
    if (typeof window.gtag !== 'undefined') {
      // @ts-ignore
      window.gtag_report_conversion('tel:+14699275990');
    } else {
      window.location.href = 'tel:+14699275990';
    }
  };

  const handleText = () => {
    window.location.href = 'sms:+14699275990';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:support@lmlshops.com';
  };

  return (
    <main className="min-h-screen bg-white">
      <Script id="google-ads-conversion">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            window.gtag('event', 'conversion', {
              'send_to': 'AW-11165567109/6bxpCOD4qtYaEIWRlMwp',
              'value': 1.0,
              'currency': 'USD',
              'event_callback': callback
            });
            return false;
          }
          window.handleCallClick = ${handleCallClick.toString()};
        `}
      </Script>
      <header className="hero">
        <nav>
          <div className="container">
            <div className="logo-container">
              <Image
                src="/logo.svg"
                alt="DFW Food Truck Trailer Logo"
                width={40}
                height={40}
                className="logo"
              />
            </div>
            <div className="nav-links">
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>
        <div className="hero-content">
          <h2>Fully-Equipped Food Truck Trailer For Sale in DFW - Like New!</h2>
          <p className="price">$25,000</p>
          <div className="cta-buttons">
            <button onClick={handleEmail} className="cta-button email-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email Us
            </button>
            <button
              onClick={handleCallClick}
              className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </button>
            <button onClick={handleText} className="cta-button text-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Text Us
            </button>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature">
              <h3>Spacious Design</h3>
              <p>Large, well-organized interior perfect for food preparation and service</p>
            </div>
            <div className="feature">
              <h3>Fully Equipped</h3>
              <p>Ready to operate with all necessary equipment installed</p>
            </div>
            <div className="feature">
              <h3>Like-New Condition</h3>
              <p>Maintained in excellent condition, ready for immediate use</p>
            </div>
            <div className="feature">
              <h3>Perfect for Entrepreneurs</h3>
              <p>Ideal for aspiring food business owners in the DFW area</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image
                src="/pic1.JPG"
                alt="Food truck trailer exterior view"
                width={800}
                height={600}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/pic2.JPG"
                alt="Food truck trailer interior view"
                width={800}
                height={600}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/pic3.png"
                alt="Food truck trailer side view"
                width={800}
                height={600}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="gallery-item video-container">
              <video controls>
                <source src="/video1.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} DFW Food Truck Trailer. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
