import React from 'react';
import './about-item.css';

export default class ReviewItem extends React.Component {
    constructor(props) {
      super(props);
      this.headerText = props.headerText;
      this.values = props.values;
      this.keyCount = 0;
    }

    render() {
      return(<div className="about-item">
          <div className="about-item-header">
              {this.headerText}
          </div>
          <div className="about-item-body">
              {this.values.map((item) => {
                  if(!item.label)
                    return;
                  return (<div className="about-item-text" key={++this.keyCount}>
                     <div className="label">{item.label}</div>
                     <div className="value">{item.value || '—'}</div>
                  </div>);
                  }
              )}
          </div>
      </div>);
    }
}
