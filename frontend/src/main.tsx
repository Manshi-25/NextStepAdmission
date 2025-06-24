import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './components/AuthContext';
import { ProfileProvider } from './components/ProfileContext';
createRoot(document.getElementById("root")!).render(<AuthProvider>
                                                    <ProfileProvider>  
                                                        <App />
                                                    </ProfileProvider>
                                                    </AuthProvider>);









