import React, { useState, useEffect, useContext, useReducer} from 'react';
import {Reducer} from './reducer'

const AppContext = React.createContext();

const initialState= {}

const AppProvider = ({children}) => {
const [one,setOne] = useState(1)
const [two,setTwo] = useState(2)
const [three,setThree] = useState(3)
const [four,setFour] = useState(4)
const [five,setFive] = useState(5)
const [six,setSix] = useState(6)
const [seven,setSeven] = useState(7)
const [eight,setEight] = useState(8)
const [nine,setNine] = useState(9)
const [zero,setZero] = useState(0)    
let [value,setValue]= useState(0)
let [val,setVal]= useState([])
const[ans,setAns]= useState(0)
const [ctr,setCtr]= useState(0)
const[operator,setOperator]= useState("")
const [point,setPoint] = useState(".")
const [plus,setPlus] = useState("+")
const [minus,setMinus] = useState("-")
const [percentage,setPercentage] = useState("%")
const [division,setDivision] = useState("/")
const [multiply,setMultiply] = useState("x")
let [nums,setNums] = useState([]);
//let [ans, setAns] = useState([]);
useEffect(()=>{setVal(val) },[val]);
useEffect(()=>{setValue(ans) },[ans]);
//console.log(value,val);
let [state, dispatch] = useReducer(Reducer, initialState);
const Setplus = ()=>{
        if(ctr == 0){}else{
         parseInt(setPlus("+"));
         if(nums===[] || ans!==[]){
             setNums(ans); 
             console.log("answer:",ans);
         }
         nums +=plus.toString();
        setNums(nums);
        setOperator("+");
        let y = val;
        let x = ans; 
        let z = x+y;
        setAns(z);
        setVal(0);
    }              
    }

const Setmultiply = ()=>{
        if(ctr == 0){}else{
        parseInt(setMultiply("x"));
        if(nums===[] || ans!==[]){
            setNums(ans); 
            console.log("answer:",ans);
        }
        nums +=multiply.toString();
        setNums(nums);
        setOperator("x");
        let y = val; 
        let x = ans; 
        if(x === 0){x = 1; }
        console.log(val, ans,x)
        let z = y*x;
        console.log(y*x);
        console.log(z)
        setAns(z);
        setVal(0);
    }
                }          
const Setdivision = ()=>{
    if(ctr == 0){}else{
        parseInt(setDivision("/"));
        if(nums===[] || ans!==[]){
             setNums(ans); 
             console.log("answer:",ans);
         }
        nums +=division.toString();
        setNums(nums);
        setOperator("/");
        let y = val; 
        let x = ans;
         let z ;
        if(x === 0){ x=val;
         setAns(x);
        setVal(0);
        }else{
        console.log(val, ans,x)
        z = x/y;
        console.log(y/x);
        console.log(z)
        setAns(z);
        setVal(0);}
    }
    } 

const Setpercentage = ()=>{
    if(ctr == 0){}else{
        parseInt(setPercentage("%"));
        if(nums===[] || ans!==[]){
             setNums(ans); 
             console.log("answer:",ans);
         }
        nums +=percentage.toString();
        setNums(nums);
        setOperator("%");
        let x = val; 
        // let x = ans;
          let z ;
        // if(x === 0){ x=val/100;
        //  setAns(x);
        // setVal(0);
        // }else{
        // console.log(val, ans,x)
        z = x/100;
        //console.log(y/x);
        console.log(z)
        setAns(z);
        setVal(0);
    }
    }  
const Setminus = ()=>{
    if(ctr == 0){}else{
        parseInt(setMinus("-"));
        if(nums===[] || ans!==[]){
            setNums(ans); 
            console.log("answer:",ans);
        }
        nums +=minus.toString();
       setNums(nums);
       setOperator("-");
       let y = val;
       let x = ans; 
       let z ;
       if(x === 0){ x=val;
        setAns(x);
       setVal(0);
       }else{
       console.log(val, ans,x)
       if(x>=y){z = x-y;}else{z = y-x;}
       
       console.log(y-x);
       console.log(z)
       setAns(z);
       setVal(0);}        
       }
  }    
const Remove = ()=>{
//     let oldNums= [...nums];
// oldNums.pop();
// return setNums(oldNums.join(""))
        setNums([]);
        setAns(0);
        setVal(0);
        setCtr(0);
            }
useEffect(Remove,[]);

const Sum = ()=>{
        if(operator === ""){setAns(val); setValue(val)}
       if(operator === "+"){
                 let x = val;
                 let y = ans; 
                 let z = x+y;
                setAns(z);
                value=z;
                setValue(value);
                setOperator([]);
                setNums([]);
                setVal(0);
                setCtr(1);}
     else if(operator === "x"){
                 let y = val;
                 let x = ans; 
                let z = `${x*y}`;
                setAns(z);
                value=z;
                setValue(value);
                setOperator([]);
                setNums([]);
                setVal(0);
                setCtr(1); }   
 else if(operator === "/"){
                 let y = val;
                 let x = ans; 
                let z = `${x/y}`;
                setAns(z);
                value=z;
                setValue(value);
                setOperator([]);
                setNums([]);
                setVal(0);
                setCtr(1); } 
                
    else if(operator === "-"){
                    let x = val;
                    let y = ans; 
                    let z ;
                    if(x>=y){z = x-y;}else{z = y-x;}
                   setAns(z);
                   value=z;
                   setValue(value);
                   setOperator([]);
                   setNums([]);
                   setVal(0);
                   setCtr(1);}
else if(operator === "%"){
                 let x = ans;
                 //let x = ans; 
                //let z = `${y}`;
                setAns(x);
                setOperator([]);
                setNums([]);
                setVal(0);
                setCtr(1); }
                }

const clear = ()=>{
        setNums([]);
        setAns(0);
        setVal([]);
        setCtr(0);
        }

const Setone = ()=>{
        setOne(1);
        nums +=one.toString();
       setNums(nums);
  val +=one.toString();
    val = parseInt(val);
setVal(val);
setCtr(1);
    console.log(val,"val",ans);         
        }

const Settwo = ()=>{
        setTwo(2);
        nums +=two.toString();
        setNums(nums);
        val +=two.toString();
    val = parseInt(val);
setVal(val);
setCtr(1);
    console.log(val,"val",ans);
        }
const Setthree = ()=>{
        setThree(3);
        nums +=three.toString();
        setNums(nums);
        val +=three.toString();
    val = parseInt(val);
setVal(val);
setCtr(1);
    console.log(val,"val",ans);
        }

const Setfour = ()=>{
        setFour(4);
        nums +=four.toString();
        setNums(nums);
        val +=four.toString();
    val = parseInt(val);
setVal(val);
setCtr(1);
    console.log(val,"val",ans);
        }

const Setfive = ()=>{
        setFive(5);
        nums +=five.toString();
        setNums(nums);
        val +=five.toString();
    val = parseInt(val);
setVal(val);
setCtr(1);
    console.log(val,"val",ans);
        }

const Setsix = ()=>{
        setSix(6);
        nums +=six.toString();
        setNums(nums);
        val +=six.toString();
    val = parseInt(val);
setVal(val);
setCtr(1);
    console.log(val,"val",ans);
        }   

const Setseven = ()=>{
        setSeven(7);
        nums +=seven.toString();
        setNums(nums);
        val +=seven.toString();
    val = parseInt(val);
setVal(val);
setCtr(1);
    console.log(val,"val",ans);
        }

const Seteight = ()=>{
        setEight(8);
        nums +=eight.toString();
        setNums(nums);
        val +=eight.toString();
    val = parseInt(val);
setVal(val);
setCtr(1);
    console.log(val,"val",ans);
        }

const Setnine = ()=>{
        setNine(9);
        nums +=nine.toString();
        setNums(nums);
        val +=nine.toString();
    val = parseInt(val);
setVal(val);
setCtr(1);
    console.log(val,"val",ans);
        }    

const Setzero = ()=>{
    if(ctr == 0){}else{
        setZero(0);
        nums +=zero.toString();
        setNums(nums);
        val +=zero.toString();
    val = parseInt(val);
setVal(val);
    console.log(val,"val",ans);
}
        }      

const Setpoint = ()=>{
//         if (nums==="") {   }
//         else{
//         parseInt(setPoint("."));
//         nums +=point.toString();
//         setNums(nums);
//         val +=point.toString();
//     val = parseInt(val);
// setVal(val);
//     console.log(val,"val");}
        }   

    return (   
  <AppContext.Provider value={{
      
      one,
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
      ans,
      nums,
      value,
      Remove,
      Sum,
      setNums,
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
      Setplus,
      Setmultiply,
      Setpercentage
      }}>{children}</AppContext.Provider>
    )
}
 export const useGlobalContext = () =>{
    return useContext(AppContext) 
 }

export  {AppContext, AppProvider}