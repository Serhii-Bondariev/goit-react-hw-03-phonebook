import React from 'react';
import Phonebook from './Phonebook/Phonebook';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#61a4f7',
        backgroundColor: '#c8d7f4',
      }}
    >
      <Phonebook />
    </div>
  );
};
