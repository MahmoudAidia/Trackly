import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/getData";

export const useFetchData = (collectionName) => {
  return useQuery({
    queryKey: [collectionName],
    queryFn: () => getData(collectionName),
    enabled: !!collectionName,
  });
};
