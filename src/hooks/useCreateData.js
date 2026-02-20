import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postData } from "../api/postData";

export const useCreateData = ({ collectionName }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ collectionName, data }) =>
      postData({ collectionName, data }),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
