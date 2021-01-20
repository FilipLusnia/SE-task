import React from 'react';
import SummaryStripe from './SummaryStripe';
import '../../Styles/Dashboard/Summary.css';

import {ReactComponent as RefreshIcon} from '../../Resources/refresh.svg';
import {ReactComponent as ExpandIcon} from '../../Resources/expand.svg';
import {ReactComponent as ArrowIcon} from '../../Resources/down-arrow.svg';

function Summary() {
    return (
      <div className="summary_tile_container">
        <div className="summary_tile_title_container">
          <h1 className="summary_tile_title">SUMMARY</h1>
          <div className="summary_tile_options">
            <RefreshIcon className="summary_tile_options_icon"/>
            <ExpandIcon className="summary_tile_options_icon"/>
            <ArrowIcon className="summary_tile_options_icon"/>
          </div>
        </div>    
        <div className="summary_data_container">
          <SummaryStripe percent={'8%'}/>
          <SummaryStripe percent={'15%'}/>
          <SummaryStripe percent={'9%'}/>
          <SummaryStripe percent={'-17%'}/>
        </div>    
      </div>
    );
  }
  
export default Summary;