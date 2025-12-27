import { Link, useNavigate } from "react-router-dom";
import { Container, PixelButton } from "../../styles/Home.styles";
import lgoCobrinha from "../../assets/img/kobrinhaLogo.png"
import Fox3D from "../../components/foxLook";
import { useContext } from "react";
import { Web3Context } from "../../context/Web3Context";


export default function Home() {

  const navigate = useNavigate();
  const { account, connect } = useContext(Web3Context);

  return (
    <Container>
        <img className="logo" src={lgoCobrinha} alt="" />
        <PixelButton onClick={()=>navigate("/game")}>
          Try the Game
        </PixelButton>
        <button onClick={connect} className="metamasck">
        <Fox3D/>
        {account ? `Connected: ${account.slice(0,6)}...${account.slice(-4)}` : "Connect MetaMask"}
        </button>
    </Container>
  );
}