import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
  return <>
<div className='board-container' style={{margin:"0",padding:"0"}}>
  <div className='row' style={{margin:"0",padding:"0",height:50%""}}>
<div className="col-5 d-flex align-items-center justify-content-center" style={{backgroundColor:"green",margin:"0",padding:"0"}}>
<div className="m-5 bg-white">
  <div className="d-flex">
    <div className='greendots'>
      </div>
      <div className='greendots'>
      </div>
    </div>
    <div className="d-flex">
    <div className='greendots'>
      </div>
      <div className='greendots'>
      </div>
    </div>
  </div>
</div>
<div className=" col-2">
  <div className="div row">
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver yellow"></div>
    <div className="div col-4 giveborderver yellow"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver yellow"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver yellow"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver yellow"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver yellow"></div>
    <div className="div col-4 giveborderver"></div>
  </div>
</div>
<div className="col-5 d-flex align-items-center justify-content-center" style={{backgroundColor:"yellow",margin:"0",padding:"0"}}>
<div className="m-5 bg-white">
  <div className="d-flex">
    <div className='yellowdots'></div>
    <div className='yellowdots'></div></div>
    <div className="d-flex">
    <div className='yellowdots'></div>
    <div className='yellowdots'></div></div>
</div>
</div>
  </div>
<div className="row " >
<div className="col-5 ">
<div className="div row">
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder green"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder green"></div>
  <div className="div col-2 giveborder green"></div>
  <div className="div col-2 giveborder green"></div>
  <div className="div col-2 giveborder green"></div>
  <div className="div col-2 giveborder green"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
</div>
</div>
<div className="col-2 px-0 text-center" >
{/* <div className='w-100 h-100' style={{margin:"0",padding:"0",backgroundColor:"pink"}}> */}
<div class="triangle-down"></div>
<div className="d-flex">
<div class="triangle-right"></div>
<div class="triangle-left"></div>
</div>
<div class="triangle-up"></div>
{/* </div> */}
</div>
<div className="col-5 ">

<div className="div row">
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder red"></div>
  <div className="div col-2 giveborder red"></div>
  <div className="div col-2 giveborder red"></div>
  <div className="div col-2 giveborder red"></div>
  <div className="div col-2 giveborder red"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder"></div>
  <div className="div col-2 giveborder red"></div>
  <div className="div col-2 giveborder"></div>
</div> 

</div>
</div>

  <div className='row' style={{margin:"0",padding:"0",height:50%""}}>
<div className="col-5 d-flex align-items-center justify-content-center" style={{backgroundColor:"blue",margin:"0",padding:"0"}}>
   <div className="m-5 bg-white">
    <div className="d-flex">
    <div className='bluedots'>
      </div>
      <div className='bluedots'>
      </div>
    </div>
    <div className="d-flex">
    <div className='bluedots'>
      </div>
      <div className='bluedots'>
      </div>
    </div>
   </div>
</div>
<div className=" col-2">
<div className="div row">
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver blue"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver blue"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver blue"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver blue"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver blue"></div>
    <div className="div col-4 giveborderver blue"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver"></div>
    <div className="div col-4 giveborderver"></div>
  </div>

</div>
<div className="col-5 d-flex align-items-center justify-content-center" style={{backgroundColor:"red",margin:"0",padding:"0"}}>
  <div className="m-5 bg-white">
  <div className="d-flex">
    <div className='reddots'>
      </div>
      <div className='reddots'>
      </div>
    </div>
    <div className="d-flex">
    <div className='reddots'>
      </div>
      <div className='reddots'>
      </div>
    </div>


  </div>
</div>
  </div>



</div>
 </>
  
}

export default App;
