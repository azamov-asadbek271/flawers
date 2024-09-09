import ReactDOM from 'react-dom/client'
import { Toaster } from 'sonner';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster expand={false} position="bottom-center" richColors />
  </>,
);
