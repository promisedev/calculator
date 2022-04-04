import './App.css';
import {useGlobalContext} from './context_api';

const Cac_screen = () => {
    const {nums,ans} = useGlobalContext();
    //console.log(ans);
    return (
        <article className ='screen'> 
         <div className='equation'>{nums} </div>
         <div className='result'>{ans}</div>
         </article>
    );
}

export default Cac_screen;