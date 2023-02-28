import React,{useState} from 'react'

const Form = (props) => {

const [text, settext] = useState("")
const upperclick =()=>{
    let newtext = text.toUpperCase();
    settext(newtext)

}
const lowerclick =()=>{
    let newtext = text.toLowerCase();
    settext(newtext)
}

const lclick =()=>{
    let newtext = text.split(/[ ]+/)
    settext(newtext.join(" "))
}

const copy =()=>{
    let newtext = document.getElementById("mybox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value)
}
const clearclick =()=>{
    let newtext = "";
    settext(newtext)
}

const [clr, setclr] = useState({
    color:"blue"
})
const click =()=>{
    if (clr.color === "blue") {
        
        setclr({
            color:"green"
        })
    } else{
        setclr({
            color:"blue"
        }) 
    }
}



  return (
    <>
    <div>
        <div className="form-floating container  mt-5">
            <h1>{props.Heading} </h1>
  <textarea className="form-control " style={clr} value={text} id="mybox" onChange={(e)=>{settext(e.target.value)}}
    ></textarea>
  <button className='btn btn-primary mt-3' onClick={upperclick}> convrt to uppercase</button>
  <button className='btn btn-primary mt-3 mx-2' onClick={lowerclick}> convrt to lowercase</button>
  <button className='btn btn-primary mt-3 mx-2' onClick={clearclick}> clear</button>
  <button className='btn btn-primary mt-3 mx-2' onClick={click}>color</button>
  <button className='btn btn-primary mt-3 mx-2' onClick={lclick}>Extra space</button>
  <button className='btn btn-primary mt-3 mx-2' onClick={copy}>Copy text</button>

</div>
    </div>
    <div className="container">
        <h2>Your text summarry</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 *text.split("").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}

export default Form