import { useQuery } from "react-query";
import axiosInstance from "./axiosInstance";
const useGetScraps = () => {
  return useQuery(
    "scraps",
    async () => {
      const response = await axiosInstance.get("/scrap/get-all", {
        headers: {
            "Authorization" : "Bearer " + localStorage.getItem("token")
        }
      });
      const data = response.data;
      return data;
    },
  );
};
export default useGetScraps;
