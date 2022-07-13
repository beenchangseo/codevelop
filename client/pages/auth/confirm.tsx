import {useRouter} from "next/router";
import axios from "axios";
import {useEffect} from "react";

const Confirm = () => {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const { signupVerifyToken } = router.query
            const params = { signupVerifyToken:signupVerifyToken };
            axios.get('/api/user/confirm',{params})
                .then(response => {
                    if (response.status === 200){
                        router.push('/');
                    }
                }).catch(error => {
                    if (error.response.status === 401){
                        router.push('/auth/authentication-failed')
                    }
                });
        }
    }, [router.isReady]);

    return<>
        <div>Confirm Page</div>
    </>
}
export default Confirm