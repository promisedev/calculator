
import './App.css';
import  Buttons from './cac_btn';
import Screen from './cac_screen';

function App() {
  return (
    <div className ='calc_cont'>
    <article className='calc_body'>
  <Screen/>
  <Buttons/>
</article>
  </div>
  );
}

export default App;
