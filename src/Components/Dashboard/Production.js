import React from 'react';
import '../../Styles/Dashboard/Production.css';
import { VictoryChart, VictoryGroup, VictoryBar } from "victory";

import {ReactComponent as RefreshIcon} from '../../Resources/refresh.svg';
import {ReactComponent as ExpandIcon} from '../../Resources/expand.svg';
import {ReactComponent as ArrowIcon} from '../../Resources/down-arrow.svg';
import {ReactComponent as DownloadIcon} from '../../Resources/download.svg';
import {ReactComponent as PrinterIcon} from '../../Resources/printer.svg';

function Production() {
  return (
    <div className="production_tile_container">
      <div className="production_tile_title_container">
        <h1 className="production_tile_title">PRODUCTION</h1>
        <div className="production_tile_options">
          <RefreshIcon className="production_tile_options_icon"/>
          <ExpandIcon className="production_tile_options_icon"/>
          <ArrowIcon className="production_tile_options_icon"/>
        </div>
      </div>
      <div className="chart_container">
        <VictoryChart height={250} width={900} >
          <VictoryGroup offset={23} colorScale={"qualitative"}>

            <VictoryBar
              data={[{ x: 1, y: 11 }, { x: 1.5, y: 15 }, { x: 2, y: 26 }, { x: 2.5, y: 80 }, { x: 3, y: 25 }]}
            />
            <VictoryBar
              data={[{ x: 1, y: 25 }, { x: 1.5, y: 56 }, { x: 2, y: 14 }, { x: 2.5, y: 70 }, { x: 3, y: 50 }]}
            />
            <VictoryBar
              data={[{ x: 1, y: 39 }, { x: 1.5, y: 84 }, { x: 2, y: 65 }, { x: 2.5, y: 75 }, { x: 3, y: 75 }]}
            />
            <VictoryBar
              data={[{ x: 1, y: 44 }, { x: 1.5, y: 52 }, { x: 2, y: 84 }, { x: 2.5, y: 34 }, { x: 3, y: 92 }]}
            />
            <VictoryBar
              data={[{ x: 1, y: 50 }, { x: 1.5, y: 33 }, { x: 2, y: 45 }, { x: 2.5, y: 85 }, { x: 3, y: 100 }]}
            />
            <VictoryBar
              data={[{ x: 1, y: 63 }, { x: 1.5, y: 44 }, { x: 2, y: 42 }, { x: 2.5, y: 83 }, { x: 3, y: 6 }]}
            />
            
          </VictoryGroup>
        </VictoryChart>
      </div>
      <div className="production_tile_bottom">
        <select className="production_tile_select">
          <option value="2020">June 2020</option>
          <option value="2019">June 2019</option>
          <option value="2018">June 2018</option>
        </select>
        <div className="production_tile_buttons_group">
          <div className="production_tile_button">
            <p>EXPORT</p>
            <div className="production_tile_icon_container">
              <DownloadIcon className="production_tile_options_icon"/>
            </div>
          </div>
          <div className="production_tile_button">
            <p>PRINT</p>
            <div className="production_tile_icon_container">
              <PrinterIcon className="production_tile_options_icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Production;