import axios from "axios";
import authHeader from "./auth-header";

const getGamesData = (userID) => {
    return axios({
        method: "post",
        url: "clientInputs/getClientInputsByUserId",
        data: {user_id:userID},
        headers: authHeader()
    })
};
const postData = (data) => {
        return axios({
            method: "post",
            url: "clientInputs/addEditClientInputs",
            data,
            headers: authHeader()
        })
};

const clientInputService = {
    getGamesData,
    postData,
};
export default clientInputService;
