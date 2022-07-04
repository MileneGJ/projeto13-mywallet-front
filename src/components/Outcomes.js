import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Outcomes() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [newTransaction, setNewTransaction] = useState({
        value: "",
        description: "",
        type: "saída"
    })

    function sendNewTransaction(e) {
        e.preventDefault();
        const URL = "https://projeto13-mywallet-back-milene.herokuapp.com/transactions";
        const config = {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        }
        const promise = axios.post(URL, { ...newTransaction }, config);
        promise.then(() => navigate("/transactions"));
        promise.catch(handleError)
    }

    function handleError(error) {
        if(error.response.status===422){
            alert("Campo valor deve vir com R$ e vírgula para casas decimais")
        }
    }

    function showField(field) {
        switch (field) {
            case "valor":
                return newTransaction.value;
            case "descrição":
                return newTransaction.description;
            default:
                return "";
        }
    }

    function modifyField(e, field) {
        switch (field) {
            case "valor":
                setNewTransaction({ ...newTransaction, value: e.target.value })
                break
            case "descrição":
                setNewTransaction({ ...newTransaction, description: e.target.value })
                break
            default:
                break;
        }
    }

    return (
        <Container>
            <h1>Nova saída</h1>
            <form onSubmit={sendNewTransaction}>
                <input type="price" placeholder="Valor" value={showField("valor")} onChange={(e) => modifyField(e, "valor")} required />
                <input type="text" placeholder="Descrição" value={showField("descrição")} onChange={(e) => modifyField(e, "descrição")} required />
                <button type="submit">Salvar saída</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
padding:25px;
box-sizing:border-box;
h1{
    color:#FFFFFF;
    font-size:26px;
    font-weight:bold;
    margin-bottom:20px;
    height:44px;
}
form{
    display:flex;
    flex-direction:column;
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
`


export default Outcomes