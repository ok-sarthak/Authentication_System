import { Outlet } from "react-router-dom"
import FloatingShape from "./components/FloatingShape.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore.js";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

function App() {
  const {isCheckingAuth, checkAuth}=useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // console.log("isauthenticated", isAuthenticated);
  // console.log("user", user);

  if(isCheckingAuth){
    return <LoadingSpinner />;
  }

  
  return (
    <div
      className='relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900'
    >
      <FloatingShape color="bg-purple-500" size="w-64 h-64 rounded-full" top='-5%' left="10%" delay={0} />
<FloatingShape color="bg-pink-500" size="w-48 h-48 rounded-full" top='70%' left="80%" delay={5} />
<FloatingShape color="bg-indigo-500" size="w-32 h-32 rounded-full" top='40%' left="-10%" delay={2} />
      <Outlet />
      <Toaster />
    </div>
  );
}

export default App;