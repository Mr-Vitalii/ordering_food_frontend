import { useUpdateMyUser } from "@/api/MyUserApi";
import { UserProfileForm } from "@/forms/user-profile-form/UserProfileForm";

export const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();
  return <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} />;
};
