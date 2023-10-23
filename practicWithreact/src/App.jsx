import imgUno from './assets/images/descarga.jpg';
import PropTypes from "prop-types"
import Mybutton from './components/MyButton';
import WelcomeText from './components/Wlcometext';
import ListFruts from './components/fruts/ListFruts';
import Buttonstate from './components/Buttonstate';




Mybutton.prototype = {
  text: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
};



export default function App(){
  const title = 'mi img'
  const user = false;
  //const pathImg = '../src/assets/images/descarga.jpg'
  const fruts = ['🍐','🍊','🍋','🍌','🍍','🥭','🍎']
  const frutsTwo = ['🍎','🍋','🍌','🍍','🍐','🍊','🥭',]
  return (
    <>
        <Buttonstate/>
        <div>App</div>
        <img src={imgUno} alt={`img-${title}`}/>
        <Mybutton text='boton 1'/>
        <Mybutton text='boton 2'/>
        <Mybutton text='boton 3'/>
        
        <WelcomeText user = {user}/>
        <h3>FRUST</h3>
        <ListFruts fruts = {fruts} />
        <ListFruts fruts = {frutsTwo} />
      
      {/*<Mybutton text='boton 3' edad={10}/>*/}
        
    </>
      
  

  )
}
