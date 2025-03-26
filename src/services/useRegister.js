import { useMutation } from "react-query";
import axiosInstance from "./axiosInstance";

const useRegister = () => {
  return useMutation(
    async (body) => {
      const response = await axiosInstance.post("/auth/register", body);
      return response;
    },
    {
      onSuccess: () => {
        console.log("rejestracja udana");
      },
      onError: () => {
        console.log("błąd rejestracji");
      },
    }
  );
};
export default useRegister;
