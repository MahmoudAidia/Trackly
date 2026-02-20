import { useQuery, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../api/loginUser";
import { showErrorToast, showSuccessToast } from "../UI/Toasts";

export const useLoginUser = ({ email, password }) => {
  //   const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["user"],
    queryFn: () => loginUser(email, password),
    // enabled: !!collectionName,
  });
};
export default useLoginUser;
