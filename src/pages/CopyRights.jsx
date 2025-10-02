import React from 'react';
import { Link } from 'react-router-dom';

function CopyRights() {
  return (
    <div className="min-h-screen bg-black/80 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-4">© 2025 JapanTours</h1>
      <p className="text-center mb-6">
        All content on this website, including text, images, and design, is protected by copyright laws.
        Unauthorized use or reproduction is prohibited.
      </p>
      <Link to="/" className="text-yellow-400 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}

export default CopyRights;
