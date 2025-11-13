import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'


const container = document.getElementById('root');
if(!container) throw new Error("Root element not found");
const root = ReactDOM.createRoot(container);
root.render(
    <StrictMode>
                <App/>
    </StrictMode>
)
