import React from 'react';

const Phonebook = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Number" />
        <button>Add</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Phonebook;
