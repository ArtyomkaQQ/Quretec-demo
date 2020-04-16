import React, { Component } from "react";
import { Button, Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from 'react-highlight-words';
import counterpart from "counterpart";
import Translate from "react-translate-component";
import ee from "./lang/ee";
import en from "./lang/en";

counterpart.registerTranslations("ee", ee);
counterpart.registerTranslations("en", en);
counterpart.setLocale("ee");

class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      searchText: '',
      searchedColumn: '',
      isLoading: false,
      forms: [],
    };
  }

  toggle = () =>
    this.setState((currentState) => ({ show: !currentState.show }));

  onLangChange = (e) => {
    this.setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
          text
        ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  async componentDidMount() {
    const responseForm = await fetch("/api/v1/forms");
    const bodyForm = await responseForm.json();
    this.setState({ forms: bodyForm, isLoading: false });
    console.log(bodyForm);
  }

  render() {
    const columns = [
      {
        title: 'Grupi nimetus',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Selgitus',
        dataIndex: 'explanation',
        key: 'explanation',
        width: '20%',
        ...this.getColumnSearchProps('explanation'),
      },
      {
        title: 'Seotud vormingute hulk',
        dataIndex: 'formsN',
        key: 'formsN',
        ...this.getColumnSearchProps('formsN'),
      },
      {
        title: 'Seotud vormingud',
        dataIndex: 'address',
        key: 'address',
        ...this.getColumnSearchProps('address'),
      },
      {
        title: 'Tegevus',
        dataIndex: '',
        key: 'x',
        render: () => <Button danger>Delete</Button>
      }
    ];

    const { forms } = this.state;

    let formsRows = forms;

    return (
      <div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Translate content="title" />
        </h2>

        <Table columns={columns} dataSource={formsRows} />
      </div>
    );
  }
}

export default Group;
