import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="loader"
        style={{
          width: '50px',
          aspectRatio: '1',
          display: 'grid',
          border: '4px solid transparent',
          borderRadius: '50%',
          borderRightColor: '#25b09b',
          animation: 'l15 1s infinite linear',
        }}
      >
        <div
          style={{
            gridArea: '1/1',
            margin: '2px',
            border: 'inherit',
            borderRadius: '50%',
            animation: 'l15 2s infinite',
          }}
        ></div>
        <div
          style={{
            gridArea: '1/1',
            margin: '8px',
            border: 'inherit',
            borderRadius: '50%',
            animation: 'l15 3s infinite',
          }}
        ></div>
      </div>

      <style>
        {`
          @keyframes l15 {
            100% { transform: rotate(1turn); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader; 