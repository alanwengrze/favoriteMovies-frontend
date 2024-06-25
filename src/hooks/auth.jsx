import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({email, password}){
    try {
      const response = await api.post("/sessions", {email, password});
      const { user, token } = response.data;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({user, token});

      localStorage.setItem("@favoritemovies:user", JSON.stringify(user));
      localStorage.setItem("@favoritemovies:token", token);

    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível conectar");
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@favoritemovies:user");
    localStorage.removeItem("@favoritemovies:token");

    setData({});
  }

  useEffect(()=>{
    const user = localStorage.getItem("@favoritemovies:user");
    const token = localStorage.getItem("@favoritemovies:token");

    if(user && token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    setData({
      user: JSON.parse(user),
      token,
    });
  }, []);

  return(
    <AuthContext.Provider value={{
      signIn,
      user: data.user,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export { 
  AuthProvider,
  useAuth
};