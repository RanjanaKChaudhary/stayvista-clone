import TextField from '@mui/material/TextField';



function About() {
  return (
   <div className="Container" style={{border:"2px solid black", borderRadius:"15px"}}>
    <div className="row padding-5">
        
        <div className='col mt-5' >
            
             <TextField 
          required
          id="outlined-required"
          label="Location/Villas/Landmark"
          defaultValue="Where To?"
          className="myTextField" style={{paddingLeft:"5px"}}
        />
       
        
             <TextField
          required
          id="outlined-required"
          label="Check-in"
          defaultValue="Select Date"
          className="myTextField" style={{paddingLeft:"5px"}}
        />
       
             <TextField
          required
          id="outlined-required"
          label="Check-out"
          defaultValue="Select Date"
          className="myTextField" style={{paddingLeft:"5px"}}
        />
       
             <TextField
          required
          id="outlined-required"
          label="Guests"
          defaultValue="Guests"
          className="myTextField" style={{paddingLeft:"5px"}}
        />

         <button style={{backgroundColor:"black",marginLeft:"7px"}}>Search</button>
        </div>

        <div className='px-5'>
            
                <p style={{background:"linear-gradient(to right, #929dd2, #a85858)"}}>Finding your ideal vacation spot should be easy, we're here to help!</p>
                <span><i className="fa-solid fa-phone me-1"></i>+91 8104 954 254<p>Request Callback</p></span>
            
        </div>
       
    </div>
   </div>
  );
}

export default About;

