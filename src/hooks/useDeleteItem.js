import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem } from "../api/deleteItem";
import { showErrorToast, showSuccessToast } from "../UI/Toasts";

export const useDeleteItem = ({ collectionName, userId, dataId }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => deleteItem({ collectionName, userId, dataId }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      showSuccessToast(`${collectionName} deleted successfully.`);
    },
    onError: () => {
      showErrorToast(`Could not delete ${collectionName}.`);
    },
  });
};
