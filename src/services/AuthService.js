import axios from 'axios'

axios.defaults.baseURL = 'https://reqres.in/'

class AuthService {
    login = async (email, password)=>{
        try{
            const response = await axios.post('api/login',{
                email,
                password,

            })
            const { token } =response.data

            localStorage.setItem('accessToken',token)
            return true

        }catch(err){
            return false
        }
    }

    logout = () =>{
        localStorage.removeItem('accessToken')
    }
}

export default new AuthService()