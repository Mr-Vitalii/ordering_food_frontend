import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<span>HOME PAge</span>} />
      <Route path="/user-profile" element={<span>User profile page</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
