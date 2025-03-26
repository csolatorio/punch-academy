import React from "react";
import { useState } from "react";
// Replace the import with the actual implementation of useAuthStore
// Removed duplicate declaration of useAuthStore

import { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuthStore();

  // Log user state on every render
  React.useEffect(() => {
    console.log("User state:", { user, isAuthenticated, isLoading });
  }, [user, isAuthenticated, isLoading]);

  return <div>{children}</div>;
};

const useAuthStore = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return { user, isAuthenticated, isLoading };
};

export default AuthProvider;
