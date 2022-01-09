import { useEffect, useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import README from './README.md';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function App() {
    let [ content, setContent] = useState({md: ""});

    useEffect(()=> {
        fetch(README)
            .then((res) => res.text())
            .then((md) => {
                setContent({ md })
            })
    }, [])
  return (
    <ReactMarkdown children={content.md} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} >
      
    </ReactMarkdown>
  );
}

export default App;
