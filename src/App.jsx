import { Web3Provider } from "./context/Web3Context";
import AppRoutes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";


function App() {
  return (
    <>
      <Web3Provider>
        <GlobalStyles />
        <AppRoutes />
      </Web3Provider>
    </>
  );
}

export default App;
