import React from 'react'
import {Button} from './Button'

const WorkoutPackage = () => {

    const showRazorpay=()=>{
        const script = "https://checkout.razorpay.com/v1/checkout.js";
        document.appendChild(script);
    }

    return (
        <div>
            <h1>workout package will be available here.</h1>
            <Button 
            className="btn-puchase"
            onClick={showRazorpay}
            target="_blank"
            rel="noopener noreferrer"
            >BUY NOW</Button>
        </div>
    )
}

export default WorkoutPackage
