/**
 * Created by Administrator on 2017/8/20.
 */
import React, { Component } from 'react';

import Property from './Steward_property';

import Household from '../wuye/zxs_household';




class Steward extends Component {
    render() {
        return (
            <div>
                {/*<Property/>*/}
                <Household/>
            </div>
        );
    }
}

export default Steward;