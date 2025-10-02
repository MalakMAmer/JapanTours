import React from "react";

function IncludeCard({ icon: Icon, title, description }) {
  return (
    <div className="flex justify-center">
      <div className="bg-white/10 bg-opacity-30 backdrop-blur-3xl p-12 rounded-xl text-white w-72 border border-white/60">
        <div className="flex items-center gap-3 mb-3">
          {Icon && <Icon className="text-2xl text-yellow-400" />}
          <h4 className="text-lg font-bold">{title}</h4>
        </div>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
}

export default IncludeCard;
