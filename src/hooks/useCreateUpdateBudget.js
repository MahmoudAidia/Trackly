import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUpdateBudget } from "../api/createUpdateBudget";

export const useCreateUpdateBudget = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createUpdateBudget(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${"budget"}`],
      });
    },
  });
};
