import React, { useState } from 'react';

const SetupPage = () => {
  // State to hold the OpenAI key
  const [openAIKey, setOpenAIKey] = useState<string>('');

  // State to hold the list of prompts
  const [prompts, setPrompts] = useState<string[]>([]);

  // Function to handle adding a new prompt
  const addPrompt = (newPrompt: string) => {
    setPrompts([...prompts, newPrompt]);
  };

  // Function to handle removing a prompt
  const removePrompt = (index: number) => {
    setPrompts(prompts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Setup Page</h1>
      <div>
        <label>
          OpenAI Key:
          <input
            type="text"
            value={openAIKey}
            onChange={(e) => setOpenAIKey(e.target.value)}
          />
        </label>
      </div>
      <div>
        <h2>Manage Prompts</h2>
        <ul>
          {prompts.map((prompt, index) => (
            <li key={index}>
              {prompt}
              <button onClick={() => removePrompt(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={() => {
          const newPrompt = prompt('Enter new prompt:');
          if (newPrompt) addPrompt(newPrompt);
        }}>
          Add Prompt
        </button>
      </div>
    </div>
  );
};

export default SetupPage;
