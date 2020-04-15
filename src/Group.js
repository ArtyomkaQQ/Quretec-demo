import React, { Component } from 'react';
import AppNav from './AppNav';

class Group extends Component {
    state = {  }
    render() { 
        return (
            <div>
              <AppNav />
              <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                Welcome to Grupid !
                     </h2>
            </div>
        );
    }
}
 
export default Group;