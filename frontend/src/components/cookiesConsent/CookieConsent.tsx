import React, { useEffect, useState } from 'react';
import './assets/CookieConsent.css';

const CookieConsent: React.FC = () => {
    const consentPropertyName = 'zugvogel_consent';

    const getCookie = (name: string) => {
        const cookies = document.cookie.split(';').reduce((acc: any, cookie) => {
            const [key, value] = cookie.split('=');
            acc[key.trim()] = value;
            return acc;
        }, {});
        return cookies[name];
    };

    const setCookie = (name: string, value: string, days: number) => {
        const now = new Date();
        now.setTime(now.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${now.toUTCString()}; path=/; SameSite=Lax; secure`;
    };

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const consent = getCookie(consentPropertyName);
        if (!consent) {
            setTimeout(() => setShowPopup(true), 500);
        }
    }, []);

    const acceptCookies = () => {
        setCookie(consentPropertyName, 'true', 365);
        setShowPopup(false);
    };

    if (!showPopup) return null;

    return (
        <div id="consent-popup" className="cookie-consent">
            <h5 className="text-center"><i className="fas fa-cookie-bite"></i>Zustimmung zu Cookies:</h5>
            <p className="text-center mt-2">
                Durch die Nutzung dieser Website erklären Sie sich mit unseren <a href="https://www.termsfeed.com/live/6a2ac480-a508-4f63-a4fe-05badda930f4"
                    target="_blank" rel="noreferrer">Datenschutzrichtlinie</a>. Wir geben Ihre Daten nicht weiter.
            </p>
            <div className="text-center mt-2">
                <button id="accept-cookies-btn" className="btn main-btn btn-text card-titl" onClick={acceptCookies}>Akzeptieren</button>
            </div>

        </div>
    );
};

export default CookieConsent;
