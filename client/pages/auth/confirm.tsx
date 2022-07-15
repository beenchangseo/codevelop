import {useRouter} from "next/router";
import axios from "axios";
import {useEffect} from "react";

const Confirm = () => {
    const router = useRouter();
    useEffect(() => {
        if (router.isReady) {
            const { signInVerifyToken } = router.query
            const params = { signInVerifyToken:signInVerifyToken };
            axios.get('/api/user/confirm',{params})
                .then(response => {
                    if (response.status === 200){
                        router.replace('/')
                    }
                }).catch(error => {
                    if (error.response.status === 401){
                         router.replace('/auth/authentication-failed')
                    }
                });
        }
    }, [router.isReady]);

    return <>
    </>
}
export default Confirm