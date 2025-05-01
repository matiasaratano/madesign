import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add Tally script
const script = document.createElement('script');
script.src = 'https://tally.so/widgets/embed.js';
script.async = true;
document.head.appendChild(script);

createRoot(document.getElementById("root")!).render(<App />);
