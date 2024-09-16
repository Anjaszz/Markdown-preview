import { useState } from 'react';
import './App.css';
import { marked } from 'marked';
function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="app">
      <h1 className='title'>Markdown Preview</h1>
      <textarea
        className="mark"
        placeholder='Tulis markdown disini'
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <div 
      className="preview"
      dangerouslySetInnerHTML={{__html: marked(markdown)}}
      />
       
    </div>
  );
}

export default App;
