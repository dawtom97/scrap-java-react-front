import { toaster } from "../components/ui/toaster";

const useLogout = () => {
    localStorage.removeItem("token");
    toaster.create({
        title:"Pomyślnie wylogowano",
        type:"success"
    })
}


export default useLogout;