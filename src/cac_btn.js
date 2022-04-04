//  import {useState} from 'react'
import './App.css';
import equal from './equal.ico';
import bracket from './bracket.ico';
import del from './delete.ico';
import division from './division.ico';
import dot from './dot.ico';
import exclama from './exclama.ico';
import minus from './minus.ico';
import multiply from './multiply.ico';
import pie from './pie.ico';
import plus from './plus.ico';
import power from './power.ico';
import percentage from './percentage.ico';
import square from './square.ico';

import {useGlobalContext} from './context_api';

const Cac_btn = () =>{
const {one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
     nine,
      zero,
     point,
     Remove,
     Sum,
     clear,
     Setone,
      Settwo,
      Setthree,
      Setfour,
      Setfive,
      Setsix,
      Setseven,
      Seteight,
      Setnine,
      Setzero,
      Setpoint,
      Setdivision,
      Setminus,
      Setpercentage,
      Setplus,
      Setmultiply} = useGlobalContext();



    // flex display column

return (
        <article className ='buttons'> 
        <div className='buttons_item'>
        <button className='btn1'>{/*<img src={square} className='icon_opera' alt="square"/>*/}</button>
        <button className='btn1'>{/*<img src={pie} className='icon_opera' alt="pie"/>*/}</button>
        <button className='btn1'>{/*<img src={power} className='icon_opera' alt="power"/>*/}</button>
        <button className='btn1'>{/*<img src={exclama} className='icon_exclema' alt="exclama"/>*/}</button>
        <button className='btn1'></button>
        </div>
        <div className='buttons_item'>
        <button className='btn2 reset' onClick={clear}>AC</button>
        <button className='btn2 opera'>{<img src={bracket} className='icon' alt="bracket"/>}</button>
        <button className='btn2 opera'onClick={Setpercentage}>{<img src={percentage} className='icon' alt="percentage"/>}</button>
        <button className='btn2 opera'onClick={Setdivision}>{<img src={division} className='icon_div' alt="division"/>}</button>
        </div>
        {/* /////////////////////////////////////// */}
        <div className='buttons_item'>
        <button className='btn2'onClick={Setseven}>{7}</button>
        <button className='btn2'onClick={Seteight}>{8}</button>
        <button className='btn2'onClick={Setnine}>{9}</button>
        <button className='btn2 opera' onClick={Setmultiply}>{<img src={multiply} className='icon_multi' alt="multiply"/>}</button>
        </div>
        {/* /////////////////////////////////////// */}
        <div className='buttons_item'>
        <button className='btn2'onClick={Setfour}>{4}</button>
        <button className='btn2'onClick={Setfive}>{5}</button>
        <button className='btn2' onClick={Setsix}>{6}</button>
        <button className='btn2 opera'onClick={Setminus}>{<img src={minus} className='icon_minus' alt="minus"/>}</button>
        </div>
        {/* ////////////////////////////////////// */}
        <div className='buttons_item'>
        <button className='btn2'onClick={Setone}>{1}</button>
        <button className='btn2'onClick={Settwo}>{2}</button>
        <button className='btn2'onClick={Setthree}>{3}</button>
        <button className='btn2 opera'onClick={Setplus} >{<img src={plus} className='icon_plus' alt="plus"/>}</button>
        </div>
        {/* ///////////////////////////////////////////// */}
        <div className='buttons_item'>
        <button className='btn2'onClick={Setzero}>{0}</button>
        <button className='btn2'onClick={Setpoint} >{<img src={dot} className='icon_dot' alt="dot"/>}</button>
        <button className='btn2' onClick={Remove}>{<img src={del} className='icon_del' alt="del"/>}</button>
        <button className='btn2 action'onClick={Sum}>{<img src={equal} className='icon_equal' alt="equal"/>}  </button>
        </div> 
        {/*////////////////////////app\src\equal.ico//////  */}
        </article>
    );
}

export default Cac_btn;

