import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Transactions() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    let [userData, setUserData] = useState({})

    useEffect(() => {
        const URL = `http://localhost:5000/transactions/`
        const config = {
            headers:{
                Authorization:`Bearer: ${token}`
            }
        }
        const promise = axios.get(URL,config)
        promise.then(response => {
            console.log(response.data)
            setUserData({ ...response.data })
        })
        promise.catch(error => {
            console.log(error.response.data);
            navigate("/");
        })
    }, [])

    function Transaction({ value, description }) {
        return (
            <li>
                <p>{description}</p>
                <p>{value}</p>
            </li>
        )
    }

    return (
        <Container>
            <Header>
                <h1>Olá, {userData.userName}</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </Header>
            <History>
                {userData.transactions?.length>0?
                    userData.transactions.map(t =>
                        <Transaction value={t.value} description={t.description} type={t.type} />
                    )
                    :
                    "Não há registros de\n entrada ou saída"}
            </History>
            <AddTransaction>
                <Link to="/income" style={{ textDecoration: 'none' }} >
                    <div>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova <br />entrada</p>
                    </div>
                </Link>

                <Link to="/outcome" style={{ textDecoration: 'none' }} >
                    <div>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova <br />saída</p>
                    </div>
                </Link>

            </AddTransaction>
        </Container>
    )
}
const Container = styled.div`
padding:10px 25px;
box-sizing:border-box;
>div{
    margin-bottom:20px;
    box-sizing:border-box;
}
`
const Header = styled.div`
height:44px;
display:flex;
justify-content:space-between;
align-items:center;
h1{
    color:#FFFFFF;
}
ion-icon{
    font-size:34px;
    color:#FFFFFF;
}
`
const History = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#FFFFFF;
border-radius:5px;
height:70vh;
font-size:20px;
color:#868686;
`
const AddTransaction = styled.div`
display:flex;
justify-content:space-between;
a{
    height:15vh;
    width: 48%;
    padding:10px;
    box-sizing:border-box;
    background-color:#A328D6;
}
div{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
}
p{
    color:#FFFFFF;
    font-size:18px;
    font-weight:bold;
}
ion-icon{
    font-size:20px;
    color:#FFFFFF;
}
`

export default Transactions