// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className=' flex flex-row'>
//       <div className="form-control">
//   <label className="cursor-pointer label gap-2">
//     <span className="label-text">Male</span>
//     <input type="checkbox" className="checkbox checkbox-success" />
//   </label>
// </div>
// <div>
//   <label className="cursor-pointer label gap-2">
//     <span className="label-text">Female</span>
//     <input type="checkbox" className="checkbox checkbox-success" />
//   </label>
// </div>
//     </div>
//   )
// }

// export default GenderCheckBox


import React, { useState } from 'react';

const GenderCheckBox = ({selectedGender, onCheckboxChange}) => {
  const [isCheckedMale, setIsCheckedMale] = useState(false);
  const [isCheckedFemale, setIsCheckedFemale] = useState(false);
  const [isCheckedOther, setIsCheckedOther] = useState(false);

  const handleMaleChange = () => {
    setIsCheckedMale(!isCheckedMale);
    setIsCheckedFemale(false);
    setIsCheckedOther(false);
  };

  const handleFemaleChange = () => {
    setIsCheckedFemale(!isCheckedFemale);
    setIsCheckedMale(false);
    setIsCheckedOther(false);
  };
  const handleOtherChange = () => {
    setIsCheckedOther(!isCheckedOther);
    setIsCheckedMale(false);
    setIsCheckedFemale(false);
  };

  return (
    <div className='flex flex-row'>
      <div className="form-control">
        <label className="cursor-pointer label gap-2">
          <span className="label-text">Male</span>
          <input 
            type="checkbox" 
            className="checkbox checkbox-success" 
            // checked={isCheckedMale} 
            checked={selectedGender==="male"}
            onChange={()=>onCheckboxChange("male")} 
          />
        </label>
      </div>
      <div>
        <label className="cursor-pointer label gap-2">
          <span className="label-text">Female</span>
          <input 
            type="checkbox" 
            className="checkbox checkbox-success" 
            checked={selectedGender==="female"}
            onChange={()=>onCheckboxChange("female")} 
          />
        </label>
      </div>
      <div>
        <label className="cursor-pointer label gap-2">
          <span className="label-text">Other</span>
          <input 
            type="checkbox" 
            className="checkbox checkbox-success" 
            checked={selectedGender==="other"}
            onChange={()=>onCheckboxChange("other")} 
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
