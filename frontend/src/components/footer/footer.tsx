// frontend/src/components/footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './assets/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer text-center mt-3">
      {/* Row 1: Links to Facebook and Instagram */}
      <div className="row">
        <div className="col">
          <div className='mt-3'>
            <a className='mx-3' href="https://www.facebook.com/share/1GXRoez9NM/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
            <a className='mx-3' href="https://www.instagram.com/zugvogelnamibia/#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
          </div>
        </div>
      </div>
      {/* Row 2: Privacy Policy, Terms & Conditions, and Copyright */}
      <div className="row">
        <div className="col">
          <div className='footer-copy-right-container mt-3'>
            <a href="https://www.termsfeed.com/live/6a2ac480-a508-4f63-a4fe-05badda930f4" target="_blank" rel="noopener noreferrer">Datenschutzrichtlinie</a>
            <p className='mx-3'>&copy; {new Date().getFullYear()} Zug Vogel Namibia</p>
            <p>info@zugvogel.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
