import axios from 'axios'

const Auth = {
    isAuthed: false,

    async login(creds, cb) {

        let email = creds.email
        let password = creds.password

        try {
            const response = await axios.post(
                'http://localhost:3007/users/login',
                {email, password}
            )
            let token = response.data.token
            if(response.status === 200) {
                Auth.isAuthed = true
                localStorage.setItem('token', token)
                cb(response.data.user.name)
            }
        } catch (err) { 
            return err 
        }
    }
}

export default Auth