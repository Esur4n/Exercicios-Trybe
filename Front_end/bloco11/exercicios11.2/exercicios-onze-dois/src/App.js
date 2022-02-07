 
import React from 'react';
import './App.css';
import Estados from './Estado';
import Morada from './Morada';
 
class App extends React.Component {
render() {
return <form>
           <fieldset>
             <h1> informações Pessoais</h1>
             <label> Nome     <input type="text" maxLength="40" required></input> </label>
             <label> Email    <input type="text" maxLength="50" required></input> </label>
             <label> CPF      <input type="text" maxLength="11" required></input> </label>
             <label> Endereço <input type="text" maxLength="200" required></input> </label>
             <label> Cidade   <input type="text" maxLength="28" required></input> </label>
             <Estados />
             <Morada />
           </fieldset>
           <fieldset>
             <h1> informações Profissionais</h1>
            <label> Resume<textarea maxLength="1000" required></textarea> </label>
            <label> Cargo<textarea maxLength="40" required></textarea></label>
            <label> Description<textarea maxLength="500" required></textarea></label>
           </fieldset>
           <button type="submit"> Enviar </button>
           <button > Limpar </button>
        </form>
}
 
}
 
export default App;
 
