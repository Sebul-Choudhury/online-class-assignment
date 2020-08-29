import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import './Subject.css'
import { Button } from 'react-bootstrap';
const Subject = (props) => {
   const {img, name, price, instructor} = props.subject;
    return (
        <div className = "subject">
    <div>
<img src={img} alt=""/>
    </div>
    <div>
    <h4 className = "subject-name"><b>{name}</b></h4>
    <br/>
    <small>Course price only @ {price}</small>
    <p> Coures instructor by : {instructor}</p>
    <Button  onClick={() => props.handleAddProduct(props.subject)}><FontAwesomeIcon icon={faPlus} /> Enroll now </Button>

   

    </div>
        </div>
    );
};

export default Subject;