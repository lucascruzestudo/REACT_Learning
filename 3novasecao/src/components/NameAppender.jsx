import React, { useState } from 'react';

const NameAppender = () => {
  const [nameList, setNameList] = useState([]);
  const [name, setName] = useState('');

  const handleNewName = () => {
    if (name !== '') {
      setNameList([...nameList, name]);
      setName('');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleNewName}>Adicionar</button>
      </div>
      <div>
        <ul>
          {nameList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NameAppender;
