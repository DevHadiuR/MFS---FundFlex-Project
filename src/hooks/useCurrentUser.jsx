import { useState, useEffect } from "react";

const useCurrentUser = () => {
  const [runningUser, setRunningUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user-info"));
    if (currentUser) {
      setRunningUser(currentUser);
    }
  }, []);

  return { runningUser, setRunningUser };
};

export default useCurrentUser;
