import { useSelector } from "react-redux"

export const userInfor = () =>{
    return useSelector(state => state.auth.userInfor)
}