import axios from 'axios';
import { ApiUrls } from '../../../utils/ApiUrls';


//signin a user

const login = async (userData) => {
    try{
        const { data } = await axios.post(ApiUrls.login, userData);
    }
    catch(error){
        console.log(error);
    }
}



//register a user

const register = async (userData) => {
    try{
        const { data } = await axios.post(ApiUrls.register, userData);
    }
    catch(error){
        console.log(error);
    }
}



const AuthService = {
    login,  
    register
}

export default AuthService;