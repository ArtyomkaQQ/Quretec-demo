import React, { Component } from 'react';
import AppNav from './AppNav';

class Manageable extends Component {
    render() {
        return (
          <div>
            <AppNav />
            <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Welcome to easy Haldamisel !
                   </h2>
          </div>
        );
    }
}
 
export default Manageable;