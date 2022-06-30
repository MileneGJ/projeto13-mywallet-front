import styled from 'styled-components'

function Incomes () {
return (        
<Container>
    <h1>Nova entrada</h1>
    <form>
        <input type="currency" placeholder="Valor" />
        <input type="text" placeholder="Descrição" />
        <button type="submit">Salvar entrada</button>
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

export default Incomes