import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postData } from "../api/postData";

export const useCreateData = ({ collectionName }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => postData({ collectionName, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${collectionName}`],
      });
    },
  });
};
