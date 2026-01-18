import React from "react";

const Card = ({ elem }) => {
  return (
    <a
      href={elem.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="rounded-2xl overflow-hidden bg-zinc-900 shadow-lg hover:shadow-amber-400/20 transition">
        <div className="h-44 overflow-hidden">
          <img
            src={elem.download_url}
            alt={elem.author}
            className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
          />
        </div>
        <div className="p-3">
          <h2 className="text-sm font-semibold truncate">{elem.author}</h2>
          <p className="text-xs text-gray-400">View on Picsum</p>
        </div>
      </div>
    </a>
  );
};

export default Card;