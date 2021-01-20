import React from 'react';
import '../../Styles/Dashboard/Dashboard.css';
import DataTile from './DataTile';
import Production from './Production';
import Map from './Map';
import Summary from './Summary';

import {ReactComponent as ServerIcon} from '../../Resources/server-storage.svg';
import {ReactComponent as UserIcon} from '../../Resources/user.svg';
import {ReactComponent as SuppliesIcon} from '../../Resources/supplies.svg';
import {ReactComponent as MoreIcon} from '../../Resources/more.svg';
import {ReactComponent as DownloadIcon} from '../../Resources/download.svg';
import {ReactComponent as PrinterIcon} from '../../Resources/printer.svg';

function Dashboard() {
    return (
        <div className="mockup_container">
            <div className="dashboard_container">
                <h1 className="dashboard_title">Enterprise Shiny Dashboards</h1>
                <section className="data_tiles_section">
                    <DataTile amount='$ 2 674 862' percent='+4,5%' title='TOTAL PROFIT' isGreen={true} Icon={ServerIcon}/>
                    <DataTile amount='657' percent='+8,5%' title='ACTIVE USERS' isGreen={true} Icon={UserIcon}/>
                    <DataTile amount='245' percent='+3,9%' title='NEW ORDERS' isGreen={true} Icon={SuppliesIcon}/>
                    <DataTile amount='12' percent='-5,9%' title='OPEN COMPLAINTS' isGreen={false} Icon={MoreIcon}/>
                </section>
                <section className="graphic_tiles_section">
                    <div className="graphic_tiles_left_section">
                        <Production/>
                        <Summary/>
                    </div>
                    <Map/>
                </section>
                <section className="dashboard_bottom">
                    <label className="dashboard_range_label">
                        RANGE:
                        <select className="dashboard_range_select">
                            <option value="month">ONE MONTH</option>
                            <option value="day">ONE DAY</option>
                            <option value="year">ONE YEAR</option>
                        </select>
                    </label>
                    <div className="dashboard_bottom_right">
                        <select className="dashboard_year_select">
                            <option value="2020">June 2020</option>
                            <option value="2019">June 2019</option>
                            <option value="2018">June 2018</option>
                        </select>
                        <div className="dashboard_buttons_group">
                            <div className="dashboard_button">
                                <p>EXPORT</p>
                                <div className="dashboard_icon_container">
                                    <DownloadIcon className="dashboard_options_icon"/>
                                </div>
                            </div>
                            <div className="dashboard_button">
                                <p>PRINT</p>
                                <div className="dashboard_icon_container">
                                    <PrinterIcon className="dashboard_options_icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
  }
  
export default Dashboard;
  