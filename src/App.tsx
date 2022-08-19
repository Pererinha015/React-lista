import { useState } from "react";
import { CompItem } from "./components/newItem";


function App() {
  const [Items, setItems] = useState<string[]>([
    'arroz',
    'feijão',
    'leite',
  ]);

  function addItem(){
    console.log('adicionando...');
    let rawName = document.getElementById('input')
    let name = rawName.value
    setItems([...Items, name ])
  };

  return (
    <>
    {Items.map (Item => {
      return <CompItem text={ Item }/>
    })}

    <input id="input" type="text" />
    <button onClick={ addItem }>Aperte</button>
    </>
  )
}

export default App
