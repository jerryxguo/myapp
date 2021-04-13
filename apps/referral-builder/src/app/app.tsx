import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.module.css';

import pencil from '../assets//pencil.svg';
import bin from '../assets//bin.svg';

import { ReferralForm } from '@myapp/ui';
import { ReferralList } from '@myapp/ui';
import { getReferrals, createReferral } from '@myapp/data';


const App = () => {
  
  const [curr, setCurr] = useState({});
  const [referrals, setReferrals] = useState([]);

  const referralCreate = () => {
    if(curr['givenname'] && curr['givenname']!=='' && curr['surname'] && curr['surname']!==''){
      createReferral(curr)
        .then(response => {
          setCurr({});
          fetchAllreferrals();
        });
    } else {
      //invalid 
    }
  };

  const fetchAllreferrals = () => {
    getReferrals()
      .then(referrals => {
        console.log(referrals)
        setReferrals(referrals);
      });
  };

  useEffect(() => {
    getReferrals()
      .then(referrals => {
        console.log(referrals);
        setReferrals(referrals);
      });
  }, []);

  const onChangeForm = (e) => {
    setCurr({ ...curr, [e.target.name]: e.target.value });
  }
    
  return (
      <div className="referral">
        <ReferralForm
          onChangeForm={onChangeForm}
          createReferral={referralCreate}
        />
        <ReferralList refs = {referrals} curr={curr} edit={pencil} dispose={bin}></ReferralList>
      </div>
    );
};

export default App;