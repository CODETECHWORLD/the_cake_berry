import React from 'react';

const Demo = ({ name, bio, likes, comments, avatar, styleType }) => {
  return (
    <div className="w-64 p-4 bg-white rounded-xl shadow-md text-center">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="w-20 h-20 rounded-full mx-auto object-cover"
      />
      <h2 className="mt-3 text-lg font-semibold text-gray-800 flex items-center justify-center gap-1">
        {name}
        <span className="text-green-500 text-sm">✔</span>
      </h2>
      <p className="text-sm text-gray-600 mt-1">{bio}</p>

      <div className="flex justify-center gap-6 text-sm text-gray-700 mt-3">
        <span>❤️ {likes}</span>
        <span>💬 {comments}</span>
      </div>

      <button
        className={`mt-4 px-4 py-2 rounded-full font-medium text-white ${
          styleType === 'dropdown'
            ? 'bg-green-500 flex items-center justify-center gap-2'
            : 'bg-blue-500'
        }`}
      >
        Follow {styleType === 'dropdown' && <span>▼</span>}
      </button>
    </div>
  );
};

export default Demo;