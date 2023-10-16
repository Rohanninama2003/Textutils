import React,{useState} from 'react'



export default function Textarea(props) {
    const [text,setText] = useState('');
    const handleonchange = (event)=> {
        console.log("change");
        setText(event.target.value);

    }

    const handleupclick = ()=> {
        console.log("clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("Converterd to uppercase","success");
       
    }

    const handlelowclick = ()=> {
        console.log("clicked");
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Converterd to lowercase","success");
       
    }
    const handleclearclick = ()=> {
        console.log("clicked");
        let newtext='';
        setText(newtext);
       
    }
  return (
  <>
       <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1 >{props.title}</h1>
            <div class="mb-3">
     {/* <label for="my-box" class="form-label">text area</label> */}
     <textarea class="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}}  onChange={handleonchange} id="my-box" rows="6"></textarea>
      </div>
     
      <button className="btn btn-primary " onClick={handleupclick}>convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handlelowclick}>convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleclearclick}>clear</button>
      
    </div>

    <div className="container"  style={{color:props.mode==='light'?'black':'white'}}>
        <h2>your text summary</h2>
        <p> {text.split(" ").length-1} words {text.length} letters</p>
        <p>{0.008 * (text.split(" ").length-1)} minutes to read</p>
        <h4>preview</h4>
        <p>{text.length>0?text:"enter something to preview it"}</p>
    </div>
  
  
  </>
    
   
  )
}
