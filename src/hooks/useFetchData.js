import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/getData";

export const useFetchData = ({ collectionName, userId }) => {
  return useQuery({
    queryKey: [collectionName],
    queryFn: () => getData(collectionName, userId),
    enabled: !!collectionName,
  });
};
