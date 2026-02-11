import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postData } from "../api/postData";

export const useCreateData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["expense"],
      });
    },
  });
};
