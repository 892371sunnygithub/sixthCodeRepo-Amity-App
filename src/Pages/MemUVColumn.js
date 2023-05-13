// eslint-disable-next-line
import React, { Fragment, useState, useEffect } from 'react'; // eslint-disable-next-line
import {  copiriAxiosPost } from '../Component/api/api';
const MemUVColumn = (props) => {
  const {item,rowData} = props;
  /* initial api request to get the member data*/
  useEffect(() => { 
    //getLanguangePack();
    // eslint-disable-next-line
  }, [props]);

  const renderValueWithSpin = (value = '') => {
    if (!props.loading || value) {
      return value;
    } else {
      return <span />
    }
  };

  const memberStatus = (color = '',value) => {
    
    return <span className={""}>{value}</span>
  };

  return (
    <>   
      <tr className="btn-reveal-trigger" scope="row">       
        <td className="py-2 align-middle smaller_screen">{rowData.hon} {renderValueWithSpin(item.name)}</td>
        <td className="py-2 align-middle smaller_screen" style={{textAlign:'center'}}>
        <span className="xs-screen">
          {rowData.rank}
        </span>
        </td>
        <td className="py-2 align-middle smaller_screen" style={{textAlign:'center'}}>
          <span className="xs-screen">
          {rowData.mem_num}
          </span>
        </td>
        <td className="py-2 align-middle smaller_screen" style={{textAlign:'center'}}>
          <span className="xs-screen">
          {memberStatus(rowData.status_color,rowData.status)}  
          </span>

        </td>
        <td className="py-2 align-middle smaller_screen" style={{textAlign:'center'}}>{rowData.grandsecretary}</td>
        <td className="py-2 align-middle smaller_screen" style={{textAlign:'center'}}>{rowData.secretary}</td>
        <td>{rowData.status_color}</td>
      </tr>       
    </>
  );
};
export default MemUVColumn;
