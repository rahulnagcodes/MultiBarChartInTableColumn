import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import tabledata from "./tabledata";
import { Table, Button, Space } from "antd";
import MyChart from "./MyChart";
import "./MyTable.css";
export default class MyTable extends React.Component {
  constructor(props) {
    super(props);
    // const { data } = this.props;
  }
  state = {
    filteredInfo: null,
    sortedInfo: null,
    selectedRowKeys: [],
    data: tabledata,
  };

  handleChange = (pagination, filters, sorter) => {
    // ;
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age",
      },
    });
  };
  onSelectChange = (selectedRowKeys) => {
    // ;
    this.setState({ selectedRowKeys });
  };

  // nameFilterData = [...new Set(this.state.data.map((a) => a.name))];
  getUniqueFilterValue = (data_key) => {
    let temp_arr = [];
    let uniqueValue = [
      this.state.data.map((a) =>
        a[data_key] !== undefined
          ? temp_arr.push(a[data_key])
          : a.children.map((a_child) => {
              temp_arr.push(a_child[data_key]);
            })
      ),
    ];
    temp_arr = [...new Set(temp_arr)];
    // ;

    let filterData = temp_arr.map((a) => {
      if (
        data_key === "lyactuals" ||
        data_key === "cytotal" ||
        data_key === "favunfav"
      ) {
        let textKey = Array.isArray(a) ? a[0] : (a / 1000000).toFixed(1);
        // textKey = textKey.toString().split(".")[0];
        return { text: textKey, value: a };
      }
      return { text: a, value: a };
    });

    // ;
    return filterData;
  };

  getOnFilter = (value, record, key) => {
    // ;
    let onFilter = record.map((a) => a[key]).includes(value);
    // onFilter = onFilter
    return onFilter;
  };

  render() {
    let { sortedInfo, filteredInfo, selectedRowKeys } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideSelectAll: true,
    };
    const hasSelected = selectedRowKeys.length > 0;

    const expandable = {
      defaultExpandedRowKeys: [1],
      // defaultExpandAllRows: true,
      // expandIcon: function ({ expanded, onExpand, record }) {
      //   ;
      //   return record.children ? (
      //     expanded ? (
      //       <RightOutlined onClick={(e) => onExpand(record, e)} />
      //     ) : (
      //       <DownOutlined onClick={(e) => onExpand(record, e)} />
      //     )
      //   ) : null;
      // },
    };
    // const columns = [
    //   {
    //     title: "Launch Year",
    //     dataIndex: "launchyear",
    //     key: "launchyear",
    //     filters: this.getUniqueFilterValue("launchyear"),
    //     filterSearch: true,
    //     filteredValue: filteredInfo["launchyear"] || null,
    //     onFilter: (value, record) => {
    //       return record["launchyear"] !== undefined
    //         ? record["launchyear"].includes(value)
    //         : record.children["launchyear"].includes(value);
    //     },
    //     sorter: (a, b) => a["launchyear"]?.localeCompare(b["launchyear"]),
    //     sortOrder: sortedInfo.columnKey === "launchyear" && sortedInfo.order,
    //     width: "160px",
    //     // ellipsis: true,
    //     // textWrap: "word-break",
    //     render: (text, record) => <div>{text}</div>,
    //   },
    //   {
    //     title: "Project",
    //     dataIndex: "project",
    //     key: "project",
    //     // filters: this.getUniqueFilterValue("project"),
    //     // filters: [
    //     //   {
    //     //     text: "CY Launch",
    //     //     value: "CY Launch",
    //     //     children: [
    //     //       {
    //     //         text: "Dorothy",
    //     //         value: "Dorothy",
    //     //       },
    //     //     ],
    //     //   },
    //     // ],
    //     // filterSearch: true,
    //     // filteredValue: filteredInfo["project"] || null,
    //     // filterMode: "tree",
    //     // onFilter: (value, record) => {
    //     //   ;
    //     //   ;
    //     //
    //     //   return record["children"].map((a) => a["project"]).includes(value);
    //     //   // return record["children"]["project"].includes(value);
    //     //   // return record.children && record.children[1].project.includes(value);
    //     // },
    //     // onFilter: (value, record) =>
    //     //   this.getOnFilter(value, record["children"], "project"),
    //     // sorter: new Map(
    //     //   [...map].sort((a, b) => String(a[0]).localeCompare(b[0]))
    //     // ),
    //     // sorter: (a, b) =>
    //     //   a["project"].project > b["children"].project ? 1 : -1,
    //     sorter: (a, b) => a["project"]?.localeCompare(b["project"]),
    //     sortOrder: sortedInfo.columnKey === "project" && sortedInfo.order,
    //     // ellipsis: true,
    //     // textWrap: "word-break",
    //     render: (text, record) => <div>{text}</div>,
    //   },
    //   {
    //     title: "Business Unit",
    //     dataIndex: "sbu",
    //     key: "sbu",
    //     // filters: this.getUniqueFilterValue("sbu"),
    //     // filterSearch: true,
    //     // filteredValue: filteredInfo["sbu"] || null,
    //     // onFilter: (value, record) => this.getOnFilter(value, record['children'], 'sbu'),
    //     // filters: this.getUniqueFilterValue("sbu"),
    //     // filterSearch: true,
    //     // filteredValue: filteredInfo["sbu"] || null,
    //     // onFilter: (value, record) => console.error(record),
    //     // record["sbu"] == value,

    //     sorter: (a, b) => a["sbu"]?.localeCompare(b["sbu"]),
    //     // sorter: (a, b) => a['children']['sbu'] > b['children']['sbu'] ? 1 : -1,
    //     // sorter: (a, b) => this.getSorter(a, b, 'sbu'),
    //     sortOrder: sortedInfo.columnKey === "sbu" && sortedInfo.order,
    //     // ellipsis: true,
    //     // textWrap: "word-break",
    //     render: (text, record) => <div>{text}</div>,
    //   },
    //   {
    //     title: "Start Of Ship",
    //     dataIndex: "sos",
    //     key: "sos",
    //     // filters: this.getUniqueFilterValue("sos"),
    //     // filterSearch: true,
    //     // filteredValue: filteredInfo["sos"] || null,
    //     // onFilter: (value, record) => this.getOnFilter(value, record['children'], 'sos'),
    //     // sorter: (a, b) => a["sos"] - b["sos"],
    //     sorter: (a, b) => a["sos"]?.localeCompare(b["sos"]),
    //     sortOrder: sortedInfo.columnKey === "sos" && sortedInfo.order,
    //     // ellipsis: true,
    //     // textWrap: "word-break",
    //     render: (text, record) => <div>{DateConverter(text)}</div>,
    //   },
    //   {
    //     title: "Prior Year Actuals ($ M)",
    //     dataIndex: "lyactuals",
    //     key: "lyactuals",
    //     // filters: this.getUniqueFilterValue("lyactuals"),
    //     // filterSearch: true,
    //     // filteredValue: filteredInfo["lyactuals"] || null,
    //     // onFilter: (value, record) => record["lyactuals"] == value,
    //     sorter: (a, b) => a["lyactuals"] - b["lyactuals"],
    //     sortOrder: sortedInfo.columnKey === "lyactuals" && sortedInfo.order,
    //     width: "160px",
    //     // ellipsis: true,
    //     // textWrap: "word-break",
    //     render: (text, record) =>
    //       text !== undefined ? (
    //         text !== 0 ? (
    //           <div>{"$ " + numberWithCommas((text / 1000000).toFixed(3))}</div>
    //         ) : (
    //           <div
    //             style={{
    //               height: "100%",
    //               width: "80%",
    //             }}
    //           ></div>
    //         )
    //       ) : (
    //         <div>{text}</div>
    //       ),
    //   },
    //   {
    //     title: "Current Year Value ($ M)",
    //     dataIndex: "cytotal",
    //     key: "cytotal",
    //     // filters: this.getUniqueFilterValue("cytotal"),
    //     // filterSearch: true,
    //     // filteredValue: filteredInfo["cytotal"] || null,
    //     // onFilter: (value, record) => this.getOnFilter(value, record['children'], 'cytotal'),
    //     sorter: (a, b) => a["cytotal"] - b["cytotal"],
    //     sortOrder: sortedInfo.columnKey === "cytotal" && sortedInfo.order,
    //     width: "175px",
    //     // ellipsis: true,
    //     // textWrap: "word-break",
    //     render: (text, record) =>
    //       text !== undefined ? (
    //         <div>{"$ " + numberWithCommas((text / 1000000).toFixed(3))}</div>
    //       ) : (
    //         <div>{text}</div>
    //       ),
    //   },
    //   {
    //     title: "Fav/ Unfav ($ M)",
    //     dataIndex: "favunfav",
    //     key: "favunfav",
    //     // filters: this.getUniqueFilterValue("favunfav"),
    //     // filterSearch: true,
    //     // filteredValue: filteredInfo["favunfav"] || null,
    //     // onFilter: (value, record) => this.getOnFilter(value, record['children'], 'favunfav'),
    //     sorter: (a, b) => a["favunfav"] - b["favunfav"],
    //     sortOrder: sortedInfo.columnKey === "favunfav" && sortedInfo.order,
    //     // ellipsis: true,
    //     // textWrap: "word-break",
    //     render: (text, record) =>
    //       text !== undefined ? (
    //         <div className={text >= 100 ? "doGreen" : "doRed"}>
    //           {"$ " + numberWithCommas((text / 1000000).toFixed(3))}
    //         </div>
    //       ) : null,
    //   },
    //   {
    //     title: "Growth (%)",
    //     dataIndex: "percent",
    //     key: "percent",
    //     // filters: this.getUniqueFilterValue("percent"),
    //     // filterSearch: true,
    //     // filteredValue: filteredInfo["percent"] || null,
    //     // onFilter: (value, record) => this.getOnFilter(value, record['children'], 'percent'),
    //     sorter: (a, b) => a["percent"] - b["percent"],
    //     sortOrder: sortedInfo.columnKey === "percent" && sortedInfo.order,
    //     // ellipsis: true,
    //     // textWrap: "word-break",
    //     render: (text, record) =>
    //       text !== undefined ? <div>{text.toFixed(1) + " %"}</div> : null,
    //   },
    // ];

    const columns = [
      {
        title: "Project",
        dataIndex: "project",
        key: "",
      },
      {
        title: "Year",
        dataIndex: "year",
        key: "",
      },
      {
        title: "Reco INCS",
        dataIndex: "reco",
        key: "",
      },
      {
        title: "Actual INCS",
        dataIndex: "actual",
        key: "",
      },
      {
        title: "Graph",
        dataIndex: "",
        key: "",
        render: (text, record) => (
          <>
            {text.children ? null : (
              <MyChart id={record.key} chartdata={text.chartdata} />
            )}
          </>
        ),
      },
      {
        title: "Variance from RECO",
        dataIndex: "variance",
        key: "",
      },
    ];
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.state.data}
          onChange={this.handleChange}
          // rowSelection={rowSelection}
          size="small"
          pagination={false}
          // scroll={{ x: "calc(700px + 50%)", y: 240 }}
          expandable={expandable}
          rowKey="key"
        />
      </div>
    );
  }
}
