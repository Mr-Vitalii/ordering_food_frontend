import { useParams } from "react-router-dom";

export const SearchPage = () => {
  const { city } = useParams();

  return <div>User search for: {city}</div>;
};
