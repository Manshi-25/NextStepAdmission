import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './components/AuthContext';
import { UserProfileProvider } from './components/UserProfileContext.tsx';
createRoot(document.getElementById("root")!).render(<AuthProvider>
                                                    <UserProfileProvider>
                                                     <App />
                                                    </UserProfileProvider>
                                                    </AuthProvider>);









