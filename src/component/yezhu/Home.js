
import React, { Component } from 'react';
import Autoplay from './wxl_autoPlay';//轮播图
import Visitor from './Home_Visitor';//访客邀请
import Parcel from './Home_Parcel';//邮包



class Home extends Component {
    render() {
        return (
            <div>
                {/*轮播图组件 start*/}
              <Autoplay/>
                {/*轮播图组件 end*/}
              <div>
                  {/*访客邀请 start*/}
                  <Visitor/>
                  {/*访客邀请 end*/}
                  {/*邮包 start*/}
                  <Parcel/>
                  {/*邮包 end*/}
              </div>
            </div>
        );
    }
}

export default Home;