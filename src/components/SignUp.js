import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [newUserData, setNewUserData] = useState({
        email: "",
        name: "",
        passwordConfirm: "",
        password: ""
    });

    function sendNewUserData(e) {
        e.preventDefault();
        if(newUserData.password!==newUserData.passwordConfirm){
            alert("A senha confirmada não corresponde à nova senha");
            return
        }
        const URL = "https://projeto13-mywallet-back-milene.herokuapp.com/sign-up";
        const promise = axios.post(URL, {
            name:newUserData.name,
            email:newUserData.email,
            password:newUserData.password
        });
        promise.then(() => navigate("/"));
        promise.catch(handleError);
    }

    function handleError(error) {
        if(error.response.status===422){
            alert("Campo email inválido")
        }
    }

    function showField(field) {
        switch (field) {
            case "email":
                return newUserData.email;
            case "senha":
                return newUserData.password;
            case "nome":
                return newUserData.name;
            case "senhaConfirm":
                return newUserData.passwordConfirm;
            default:
                return "";
        }
    }

    function modifyField(e, field) {
        switch (field) {
            case "email":
                setNewUserData({ ...newUserData, email: e.target.value })
                break
            case "senha":
                setNewUserData({ ...newUserData, password: e.target.value })
                break
            case "nome":
                setNewUserData({ ...newUserData, name: e.target.value })
                break
            case "senhaConfirm":
                setNewUserData({ ...newUserData, passwordConfirm: e.target.value })
                break
            default:
                break;
        }
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={sendNewUserData}>
                <input type="text" placeholder="Nome" value={showField("nome")} onChange={(e) => modifyField(e, "nome")} required />
                <input type="email" placeholder="E-mail" value={showField("email")} onChange={(e) => modifyField(e, "email")} required />
                <input type="password" placeholder="Senha" value={showField("senha")} onChange={(e) => modifyField(e, "senha")} required />
                <input type="password" placeholder="Confirme a senha" value={showField("senhaConfirm")} onChange={(e) => modifyField(e, "senhaConfirm")} required />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/" style={{ textDecoration: 'none' }}><p>Já tem uma conta? Entre agora!</p></Link>
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


export default SignUp