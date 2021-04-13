import React,  { useState } from 'react';


export const ReferralForm = ({ onChangeForm, createReferral }) => {
    const defaultValue = {
        givenname: '',
        surname: '',
        email: '',
        phone: '',
        homename: '',
        street: '',
        suburb: '',
        state: '',
        postcode: '',
        country: '',
    }
    const [inputValues, setInputValues] = useState(defaultValue);
    
    const handleChange = e => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
        onChangeForm(e);
    };
    const handleSubmit = () => {
        setInputValues(defaultValue);
        createReferral();
    };
    return(
            <div className="referral-form">
                <h1>Referral Builder</h1>
                <form id="formInput">
                    <h4>PERSONAL DETAILS</h4>
                    <div className="form-input">
                        <label htmlFor="">GIVEN NAME</label>
                        <input type="text" onChange={(e) => handleChange(e)}  name="givenname" id="givenname" value={inputValues.givenname||''} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="">SURNAME</label>
                        <input type="text" onChange={(e) => handleChange(e)} name="surname" id="surname" value={inputValues.surname||''} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="">EMAIL</label>
                        <input type="text" onChange={(e) => handleChange(e)}  name="email" id="email" value={inputValues.email||''} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="">PHONE</label>
                        <input type="text" onChange={(e) => handleChange(e)} name="phone" id="phone" value={inputValues.phone||''} />
                    </div>
                
                    <h4>ADDRESS</h4>
                    <div className="form-input">
                        <label htmlFor="">HOME NAME OR #</label>
                        <input type="text" onChange={(e) => handleChange(e)}  name="homename" id="homename" value={inputValues.homename||''} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="">STREET</label>
                        <input type="text" onChange={(e) => handleChange(e)} name="street" id="street" value={inputValues.street||''} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="">SUBURB</label>
                        <input type="text" onChange={(e) => handleChange(e)}  name="suburb" id="suburb" value={inputValues.suburb||''} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="">STATE</label>
                        <input type="text" onChange={(e) => handleChange(e)} name="state" id="state" value={inputValues.state||''} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="">POSTCODE</label>
                        <input type="text" onChange={(e) => handleChange(e)}  name="postcode" id="postcode" value={inputValues.postcode||''} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="">COUNTRY</label>
                        <input type="text" onChange={(e) => handleChange(e)} name="country" id="country" value={inputValues.country||''} />
                </div>
                
            </form>
            <button className="button-upload float-left">UPLOAD AVATAR</button>
            <button type="button"
                disabled={inputValues.givenname === '' || inputValues.surname === '' || !inputValues.givenname || !inputValues.surname}
                onClick={(e) => handleSubmit()} className="button-create float-left">CREAT REFERRAL</button>
        </div>
    )
}

export default ReferralForm;
