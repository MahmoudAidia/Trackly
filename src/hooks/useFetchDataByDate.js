import { useQuery } from "@tanstack/react-query";
import { getDataByDate } from "../api/getDataByDate";

export const useFetchDataByDate = ({ collectionName, userId }) => {
  return useQuery({
    queryKey: [`${collectionName}ByDate`],
    queryFn: () => getDataByDate(collectionName, userId),
    enabled: !!collectionName,
  });
};
