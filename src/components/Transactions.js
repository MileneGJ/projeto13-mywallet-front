import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Transactions() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    let [userData, setUserData] = useState({});

    useEffect(() => {
        const URL = `http://localhost:5000/transactions/`
        const config = {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        }
        const promise = axios.get(URL, config)
        promise.then(response => {
            setUserData({ ...response.data })
        })
        promise.catch(error => {
            console.log(error.response.data);
            navigate("/");
        })
    }, [])

    function Transaction({ value, description, type, date }) {
        return (
            <li>
                <div>
                    <p>{date}</p>
                    <p className='description'>{description}</p>
                </div>
                <p className={type}>{value}</p>
            </li>
        )
    }

    function currencyFormatted(number){
        let output = `R$${number.toFixed(2)}`.replace(/\./,",")
        return output
    }

    return (
        <Container>
            <Header>
                <h1>Olá, {userData.userName}</h1>
                <Link to="/">
                    <ion-icon name="log-out-outline"></ion-icon>
                </Link>
            </Header>
            <History 
            balance={userData.balance}
            listing={userData.transactions?.length > 0 ? "Y" : "N"}>
                <ul>
                    {userData.transactions?.length > 0 ?
                        userData.transactions.map((t, index) =>
                            <Transaction
                                key={index}
                                date={t.date}
                                value={t.value}
                                description={t.description}
                                type={t.type} />
                        )
                        :
                        <p>Não há registros de<br/> entrada ou saída</p>}
                </ul>
                {userData.transactions?.length > 0 ?
                    <span>
                        <p>SALDO</p>
                        <p>{currencyFormatted(userData.balance)}</p>
                    </span>
                    : ""
                }
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
    font-size:30px;
    font-weight:700;
}
ion-icon{
    font-size:34px;
    color:#FFFFFF;
}
`
const History = styled.div`
display:flex;
width:100%;
overflow-y: scroll;
flex-direction:column;
justify-content:${({ listing }) => listing === "Y" ? "space-between" : "center"};
align-items:center;
background-color:#FFFFFF;
padding:20px;
box-sizing:border-box;
border-radius:5px;
height:70vh;
font-size:20px;
color:#868686;
ul{
    width:100%;
    ${({listing})=>listing==="N"?
    `display:flex;
    flex-direction:column;
    text-align:center;
    line-height:30px;
    align-items:center;`
    :""}
}
li{
    display:flex;
    width:100%;
    height:45px;
    justify-content:space-between;
}
li>div{
    display:flex;
}
.description{
    color:#000000;
    margin-left:10px;
}
.entrada{
    color:#03AC00;
}
.saída{
    color:#C70000;
}
span{
    width:100%;
    display:flex;
    justify-content:space-between;
}
span>p:first-child{
    color:#000000;
    font-weight:700;
}
span>p:last-child{
    color:${({balance})=>balance>=0?"#03AC00":"#C70000"}
}
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
    height:100%;
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