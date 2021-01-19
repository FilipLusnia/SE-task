import React from 'react';
import '../../Styles/Dashboard/Dashboard.css';
import DataTile from './DataTile/DataTile';

import {ReactComponent as ServerIcon} from '../../Resources/server-storage.svg';
import {ReactComponent as UserIcon} from '../../Resources/user.svg';
import {ReactComponent as SuppliesIcon} from '../../Resources/supplies.svg';
import {ReactComponent as MoreIcon} from '../../Resources/more.svg';

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

                </section>
            </div>
        </div>
    );
  }
  
export default Dashboard;
  