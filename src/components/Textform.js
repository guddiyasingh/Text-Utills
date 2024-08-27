import React,{useState} from 'react'

export default function Textform(props) {

 const handleUpClick =()=>{
  // console.log("UpperCase was clicked")
  // let newText = text.toLowerCase
  let newText = text.toUpperCase()
  setText(newText)
  }

  const handleLoClick =()=>{
    // console.log("UpperCase was clicked")

    // let newText = text.toUpperCase
    let newText = text.toLowerCase()
    setText(newText)
    }
   
    const handleClearClick =()=>{
      // console.log("UpperCase was clicked")
  
      // let newText = text.toUpperCase
      let newText = ("")
      setText(newText)
    }

const handleOnChange =(event)=>{
  console.log("On change")
setText(event.target.value)
}

  const[text,setText] = useState("")
  const[color,setColor]=useState('')
// text="text change" // wrong way to text change
// SetText("text change") // right way to text change

  return (
   <>
   <div className='container'style={{backgroundColor:color,color:props.mode===`dark` ? `white`:`black`}} >
      <h1>{props.heading}</h1>
    
      {/* <div className="mb-3">
</div> */}
<div className="mb-3">
  {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} 
  style={{backgroundColor:props.mode===`dark` ? `grey`:`white`,color:props.mode===`dark` ? `white`:`black`}}
  id="exampleFormControlTextarea1" rows="8"></textarea>
</div>

<button className="btn btn-primary  mx-2" onClick={handleUpClick}> Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={()=>setColor('pink')}>Color Change</button>
 </div>

    <div className="container my-4" style={{color:props.mode===`dark`?`white`:`black`}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length}words{text.length}</p>
      <p>{0.008*text.split(" ").length}Minutes</p>
      <p></p>
      <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>

    </div>
    </>
  )
}
