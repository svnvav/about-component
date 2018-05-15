import React from 'react';
import './about.css';

import BackHeader from './header-with-backbutton.jsx';
import AboutItem from './about-item.jsx';

export default class About extends React.Component {

    constructor(props) {
      super(props);
      this.list = props.list;
      this.keyCount = 0;
    }

    render() {
        return(<div>
            <BackHeader headerText={"Product information"}/>
            <div className="about-list">
                {
                    (this.list && Array.isArray(this.list)) && this.list.map((item) => {
                        if(!item.values || !Array.isArray(item.values))
                            return;
                        return (<AboutItem
                                headerText={item.headerText || ''}
                                values={item.values || []}
                                key={++this.keyCount}
                            />);
                    })
                }
            </div>
        </div>);
    }
}
