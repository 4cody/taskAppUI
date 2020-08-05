import axios from 'axios'

const Auth = {
    isAuthed: false,
    async logIn(e, p) {
        try {
            const res = await axios.post(
                'http://localhost:3007/users/login',
                {
                    email: e,
                    password: p
                }
            )

            if(res.status === 200) {
                // const user = res.data
                
                this.isAuthed = true;
                
                let authRes = {
                    isAuthed: this.isAuthed,
                    userName: res.data.user.name
                }

                return authRes
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export default Auth