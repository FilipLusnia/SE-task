import React from 'react';
import '../../Styles/Dashboard/DataTile.css';

function DataTile({amount, percent, title, isGreen, Icon}) {
    return (
        <div className="data_tile_container">
            <p className="data_tile_amount">{amount}</p>
            <div className="info_subcontainer">
                <p className="data_tile_title">{title}</p>
                <p className="data_tile_percent" style={isGreen ? {color: 'green'} : {color: 'red'}}>{percent}</p>
            </div>
            <div className="select_subcontainer">
                <select className="data_tile_select">>
                    <option value="monthly">MONTHLY STATS</option>
                    <option value="daily">DAILY STATS</option>
                    <option value="yearly">YEARLY STATS</option>
                </select>
                <div className="data_tile_icon_container">
                    <Icon className="data_tile_icon"/>
                </div>
            </div>
        </div>
    );
  }
  
export default DataTile;