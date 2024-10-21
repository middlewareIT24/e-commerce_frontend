// custom hook
import { useNavigate } from "react-router-dom";

export function useNavigateTo() {
  const navigate = useNavigate();

  return (url) => {
    navigate(url);
  };
}
