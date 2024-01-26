import React from 'react';

const NotFoundPage = () => {
  const handleGoBack = () => {
    window.location.href = '/';
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '10px',
        alignItems: 'center',
        height: '100vh',
      }}
      className="NotFoundContainer">
      <h1 style={{ fontSize: '60px' }}>Error</h1>
      <h2>Страница не найдена</h2>
      <p>Кажется, вы попали на несуществующую страницу.</p>
      <button
        style={{
          backgroundColor: 'red',
          border: 'none',
          outline: 'none',
          padding: '7px 10px',
          fontSize: '20px',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        onClick={handleGoBack}>
        Вернуться назад
      </button>
    </div>
  );
};

export default NotFoundPage;
