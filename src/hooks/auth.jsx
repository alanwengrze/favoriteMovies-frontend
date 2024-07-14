import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({email, password}){
    try {
      const response = await api.post(
        "/sessions", 
        {email, password},
        {
          withCredentials: true
        }
      );
      const { user } = response.data;

      setData({user});

      localStorage.setItem("@favoritemovies:user", JSON.stringify(user));

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

    setData({});
  }

  async function updateProfile({ user, avatarFile }){
    try{

      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@favoritemovies:user", JSON.stringify(user));
      setData({
        user
      })
      alert("Seu perfil foi atualizado");
    }catch(error){
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível atualizar o perfil.");
      }
    }
  }

  useEffect(()=>{
    const user = localStorage.getItem("@favoritemovies:user");

    if(user){

      setData({
        user: JSON.parse(user),
      });
    }

  }, []);

  return(
    <AuthContext.Provider value={{
      signIn,
      user: data.user,
      signOut,
      updateProfile,
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