import React from 'react';
import '../../Styles/Dashboard/SummaryStripe.css';

import {ReactComponent as RollIcon} from '../../Resources/roll-arrow.svg';

function SummaryStripe({percent}) {
    return (
        <div className="summary_stripe_container">
            <div className="summary_stripe">
                <div className="summary_stripe_gray"/>
                <div className="summary_stripe_color"/>
                <p className="summary_stripe_percent">{percent}</p>
            </div>
            <RollIcon className="summary_roll_icon"/>
        </div>
    );
}
  
export default SummaryStripe;