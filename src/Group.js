import React, { Component } from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const { Search } = Input;

class Group extends Component {
    state = {
        show: false
    }

    toggle = () => this.setState((currentState) => ({ show: !currentState.show }));

    render() {
        return (
            <div>
                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={this.toggle}></Button>
                    {this.state.show && <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200, marginLeft: 10 }}
                    />}
                </Tooltip>
                <div>

                </div>

                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    Welcome to Grupid !
            </h2>
            </div>
        );
    }
}

export default Group;