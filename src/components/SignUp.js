import styled from 'styled-components'
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <Container>
            <h1>MyWallet</h1>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirme a senha" />
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
    font-weight:bold;
}
`


export default SignUp