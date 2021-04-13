import React from 'react';
import {MAX_ROWS } from '@myapp/data';
export const ReferralList = ({ refs, curr, edit, dispose }) => {

  const empty = Array(MAX_ROWS).fill({ r: {}, flag: false});
  let referrals = refs.map(r => { return { r, flag: true } });
  
  let paddingSize = MAX_ROWS - 1 - referrals.length;
  if (paddingSize < 0) {
    referrals = refs.slice(-paddingSize, refs.length).map(r => { return { r, flag: true } });
    paddingSize = 0;
  }
  referrals.push({ r: curr, flag: false });
  const referralRow = (row, index) => {
    return(
        <tr key={index} className="referral-preview-userdata">
          <td>{row.r.givenname||''}</td>
          <td>{row.r.surname||''}</td>
          <td>{row.r.email||''}</td>
          <td>{row.r.phone||''}</td>
          <td>
            <div className= {row.flag? "show-icon": "hide-icon"}>
              <img src={edit} className="referral-action" />
              <img src={dispose} className="referral-action" />
            </div>
          </td>
        </tr>
      )
  }
  const display = referrals.concat(empty.slice(0, paddingSize));
  const referralTable = display.map((row, index) => referralRow(row, index));

  return (
    <div className="referral-preview">
      <div className="referral-preview-container">
        <table className="table referral-preview-table">
          <thead>
            <tr className="referral-preview-title">
              <th>GIVEN NAME</th>
              <th>SURNAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {referralTable}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReferralList;
