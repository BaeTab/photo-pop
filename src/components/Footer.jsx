import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full bg-white/80 border-t-2 border-black mt-12 py-8 px-4 text-center font-sans tracking-tight">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4 font-bold text-gray-700">
                <Link to="/" className="hover:text-pop-pink transition-colors">홈 (Home)</Link>
                <Link to="/terms" className="hover:text-pop-pink transition-colors">이용약관</Link>
                <Link to="/privacy" className="hover:text-pop-pink transition-colors">개인정보처리방침</Link>
            </div>

            <p className="text-sm text-gray-500 mb-2">
                © 2025 Photo Pop. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">
                Photo Pop is a free online photo booth service. <br />
                We do not store your photos on our servers without permission.
            </p>
        </footer>
    );
}
