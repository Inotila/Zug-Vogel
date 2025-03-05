// frontend/src/components/footer.tsx
import React from 'react';
import './assets/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer text-center mt-3">
      {/* Row 1: Links to Facebook and Instagram */}
      <div className="row">
        <div className="col">
          <div className='mt-3'>
            <a className='mx-3' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a className='mx-3' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>

        </div>
      </div>
      {/* Row 2: Privacy Policy, Terms & Conditions, and Copyright */}
      <div className="row">
        <div className="col">
          <div className='footter-copy-right-container mt-3'>
            <a href="/privacy-policy">Privacy Policy</a>
            <p className='mx-3'>&copy; {new Date().getFullYear()} Zug Vogel Namibia</p>
            <a href="/terms-conditions">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
