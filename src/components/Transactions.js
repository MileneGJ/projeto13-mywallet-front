import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Transactions() {
    return(
    <Container>
        <Header>
            <h1>Olá, Fulano</h1>
            <ion-icon name="log-out-outline"></ion-icon>
        </Header>
        <History>Não há registros de <br/> entrada ou saída</History>
        <AddTransaction>
            <Link to="/income">
                <ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova entrada</p>
            </Link>
            <Link to="/outcome">
                <ion-icon name="remove-circle-outline"></ion-icon>
                <p>Nova saída</p>
            </Link>
        </AddTransaction>
    </Container>
    )
}
const Container = styled.div`
padding:25px;
box-sizing:border-box;
div{
    margin:7px 0;
    box-sizing:border-box;
}
`
const Header = styled.div`
height:44px;
display:flex;
justify-content:space-between;
align-items:center;
ion-icon{
    font-size:34px;
    color:#FFFFFF;
}
`
const History = styled.div`
background-color:#FFFFFF;
border-radius:5px;
height:80vh;
font-size:20px;
color:#868686;
`
const AddTransaction = styled.div`
display:flex;
justify-content:space-between
div{
    height:15vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    color:#FFFFFF;
    background-color:#A328D6;
}
ion-icon{
    font-size:16px;
    color:#FFFFFF;
}
`

export default Transactions