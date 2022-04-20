import React ,{useState}from 'react'

function Convert(){

    const[c,setC] = useState()
    const[f,setF] = useState()
    const[k,setK] = useState()

    function update(e){
        let name = e.target.name
        let tv = e.target.value;
        if(name==='c'){
            if(tv===""){
                setC("")
                setF("")
                setK("")
            }
            else{
            setC(tv)
            setF(tv*(9/5)+32)
            setK(tv*1+(273))
        }
        }
        else if(name==='f'){
            if(tv===""){
                setC("")
                setF("")
                setK("")
            }
            else{
            setC(((tv-32)/9)*5)
            setF(tv)
            setK(((tv-32)/9)*5+273)
        }
        }
        else if(name==='k'){
            if(tv==="" || tv<0){
                setC("")
                setF("")
                setK("")
            }
            else{
            setC((tv)-273)
            setF(((tv)-273)*(9/5)+32)
            setK(tv)
        }
        }
       
    }
    return(
        <>
            <div className='main'>
               <label>Celcius:-
               <input type="number" name='c' value={c} onChange={update}/>
               </label> 
               <label>Ferhenite:-
               <input type="number" name='f' value={f} onChange={update}/>
               </label> 
               <label>Kelvin:-
               <input type="number" name='k' value={k} onChange={update}/>
               </label> 
               
            </div>
        </>
    )
}

export default Convert;