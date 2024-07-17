const useCurrentUser = () => {
  const currentUser = JSON.parse(localStorage.getItem("user-info"));
  return currentUser;
};

export default useCurrentUser;
