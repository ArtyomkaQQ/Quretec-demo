import React, { Component } from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import ee from './lang/ee';
import en from './lang/en';

const { Search } = Input;
counterpart.registerTranslations('ee', ee);
counterpart.registerTranslations('en', en);
counterpart.setLocale('ee');

class Group extends Component {
    state = { 
        show: false
     }

    toggle = () => this.setState((currentState) => ({show: !currentState.show}));

    onLangChange = (e) => {
        this.setState({lang: e.target.value});
        counterpart.setLocale(e.target.value);
      }

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
                <Translate content="title" />
            </h2>
            </div>
        );
    }
}
 
export default Group;