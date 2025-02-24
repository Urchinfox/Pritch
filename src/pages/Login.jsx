import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState({});

    const [data,setData] = useState({
        username:'',
        password:''
    })


    const handleChange = (e) =>{
        const {name,value} = e.target;
        setData({...data, [name]:value });
    }



    const submit = async() =>{
        try {
            const res = await axios.post(`/v2/admin/signin`,data);
            const {token,expired} = res.data;
            document.cookie = `hexToken=${token}; expires = ${new Date(expired)};`; // save token into cookie
            console.log(res)
            if(res.data.success){
                navigate('/admin/products')
            }

        } catch (error) {
            setLoginState(error.response.data)
            console.log(error)
        }
    }



    return(<>
            <section className="login">
            <div className="container my-12">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="border rounded-5 p-5 border-primary">
                            <form className="row gy-3">
                                <h2 className="col-12 text-center">MY PRITCH ACCOUNT</h2>
                                <div className={`alert alert-danger ${loginState.message ? 'd-block': 'd-none'}`}>{loginState.message}</div>
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="form-label"></label>
                                    <input type="email" name="username" className="outline-0 form-control" id="inputEmail4" required placeholder="Email *" onChange={handleChange}/>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputPassword4" className="form-label"></label>
                                    <input type="password" name="password" className="outline-0 form-control" id="inputPassword4" required placeholder="Password *" onChange={handleChange}/>
                                </div>
                                <div className="col-12">
                                    <button type="button" className="w-100 btn btn-primary" onClick={submit}>登入</button>
                                </div>
    
                                <div className="col-12 text-center my-8">
                                    <p>
                                        <small><a href="reset-password.html"><u>忘記密碼？</u></a> </small>
                                        <br />
                                        <small>還沒註冊嗎？<a href="sign-up.html" className="decoration"><u>使用您的電子郵件註冊</u></a></small>
                                    </p>
                                    <p><small>or</small></p>
                                </div>
                                <div className="col-12">
                                    <button type="button" className="mb-6 w-100 btn btn-primary mb-2">使用google帳號登入</button>
                                    <button type="button" className="w-100 btn btn-primary">使用Facebook帳號登入</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>

    </section>
    
    </>)
}