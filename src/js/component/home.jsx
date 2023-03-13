import React, { useEffect, useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {



const [brillo, setBrillo ] = useState({
	red:'',
	yellow:'',
	green:''
});
/*useEffect(() =>{
	setBrillo({red:'selected',yellow:'',green:''})
},[])*/
const [counter, setCounter] = useState(0);
const sumaCounter = () => {
    if (counter === 0) {
      setBrillo({ red: "selected", yellow: "", green: "" });
    } else if (counter === 1) {
      setBrillo({ red: "", yellow: "selected", green: "" });
    } else if (counter === 2) {
      setBrillo({ red: "", yellow: "", green: "selected" });
    }

    setCounter(prevCounter => {
      const newCounter = prevCounter + 1;

      if (newCounter >= 3) {
        return 0;
      }

      return newCounter;
    });
  };

	return ( 
	
	<div className="semaforo" >
		<div className="back">
		<div onClick={()=> setBrillo({red:'selected',yellow:'',green:''})} className={`red  ${brillo.red}`} ></div>
		<div onClick={()=> setBrillo({red:'',yellow:'selected',green:''})} className={`yellow ${brillo.yellow}`}></div>
		<div onClick={()=> setBrillo({red:'',yellow:'',green:'selected'})} className={`green ${brillo.green}`}></div>
		
		</div>
		<button onClick={sumaCounter}>Click</button>
	</div>
		
		
	);
};

export default Home;
