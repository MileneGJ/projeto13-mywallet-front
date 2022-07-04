import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const [loginInfo, setloginInfo] = useState({
        email: "",
        password: ""
    })

    function sendUserData(e) {
        e.preventDefault();
        const URL = "https://projeto13-mywallet-back-milene.herokuapp.com/login";
        const promise = axios.post(URL, loginInfo);
        promise.then(goToToday);
        promise.catch(handleError)
    }

    function goToToday(response) {
        localStorage.setItem("token", response.data.token);
        navigate(`/transactions`);
    }

    function handleError(error) {
        if (error.response.status === 401 || error.response.status === 422) {
            alert("E-mail ou senha incorretos");
        } 
    }

    function showField(field) {
        switch (field) {
            case "email":
                return loginInfo.email;
            case "senha":
                return loginInfo.password;
            default:
                return "";
        }
    }

    function modifyField(e, field) {
        switch (field) {
            case "email":
                setloginInfo({ ...loginInfo, email: e.target.value })
                break
            case "senha":
                setloginInfo({ ...loginInfo, password: e.target.value })
                break
            default:
                break;
        }
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={sendUserData}>
                <input type="email" placeholder="E-mail" value={showField("email")} onChange={(e) => modifyField(e, "email")} required />
                <input type="password" placeholder="Senha" value={showField("senha")} onChange={(e) => modifyField(e, "senha")} required />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/sign-up" style={{ textDecoration: 'none' }}><p>Primeira vez? Cadastre-se!</p></Link>
        </Container>
    )
}


const Container = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:25px;
box-sizing:border-box;

h1{
    font-family:'Saira Stencil One', cursive;
    color:#FFFFFF;
    font-size:32px;
    line-height:80px;
}
form{
    display:flex;
    flex-direction:column;
    width:100%;
}
input{
    height:60px;
    font-size:20px;
    font-family: 'Raleway', sans-serif;
    color:#000000;
    margin:8px 0;
    border-radius:5px;
    padding:10px;
    box-sizing:border-box;
    border:none;
}
button{
    height:46px;
    background-color:#A328D6;
    color:#FFFFFF;
    font-weight:bold;
    text-align:center;
    font-size:20px;
    border:none;
    border-radius:5px;
    margin:8px 0;
    box-sizing:border-box;
}
p{
    font-size:15px;
    color:#FFFFFF;
    line-height:60px;
    font-weight:bold;
}
`

export default Login