import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const header = () => {
    return(
        <>
          <div className= "header">
            <div className= "container">
                <div className= "row">
                    <div className= "logowrapper col-sm-3">
                        <Link to={'/'}><img src={Logo} alt ="logo" /></Link>
                    </div>
                    <div className ='col-sm-10 d-flex align-items-center part2'>  
                       <Button className='Countrydrop'>  Select  </Button>
                     </div>

                </div>  
            
            </div>
        </div>
         </>
    )}
    export default header;