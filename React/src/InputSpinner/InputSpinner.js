import React, {useState} from 'react';

import './InputSpinner.css';


const InputSpinner = ({start}) => {

    const [count, setCount] = useState(start)

    /*const onIncrement = ()=>{
        setCount(count + 1);
    };

    const onDecrement = ()=>{
        if (count<=0) {
            count = 0;
        }else{
            setCount(count - 1);
        }
    };*/

    const onUpdate = (x) => {
        setCount(count + x )
    };

    return (

        <div className="InputSpinner horizontal">
            
            <img onClick={ () => onUpdate(-1)} src="https://alikinvv.github.io/stepper/build/img/arrow.svg"  className="arrow top" alt="" />
            <div className="box">
                <div className="numbers1"> { count } </div>
            </div>
            <img onClick={ () => onUpdate(1)} src="https://alikinvv.github.io/stepper/build/img/arrow.svg"  className="arrow bottom" alt="" />
        </div>
    );
};






export default InputSpinner;

