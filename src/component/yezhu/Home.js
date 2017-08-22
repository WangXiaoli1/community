
import React, { Component } from 'react';
import Autoplay from './wxl_autoPlay';
import Visitor from './Home_Visitor';
import Parcel from './Home_Parcel';



class Home extends Component {
    render() {
        return (
            <div>
              <Autoplay/>
              <div>
                  <Visitor/>
                  <Parcel/>
              </div>
            </div>
        );
    }
}

export default Home;