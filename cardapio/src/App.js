import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import Global from "./GlobalStyle";


function App() {
  return (
    <div>
      <Global/>
      <Header/>
      <Main/>
      <Footer/>
    </div>  
    
  )
}

export default App;
