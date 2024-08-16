import React from 'react'

const GenderCheckBox = ({ onChackboxChange, selectedGender }) => {
    return (

        <div className='flex mb-1'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer 
                ${selectedGender === 'male' ? 'selected' : ''}`}>
                    <span className='label-text'>Male</span>
                    <input type="checkbox" className='border-slate-900'

                        checked={selectedGender === 'male'}
                        onChange={() => onChackboxChange('male') }
                    />

                    {/* <input type="radio" name="gender" value="male" className='border-slate-900' 
                    /> */}
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === 'female'? 'selected' : ''}`}>
                    <span className='label-text'>Female</span>
                    <input type="checkbox" className='border-slate-900'

                        checked={selectedGender === 'female'}
                        onChange={() =>  onChackboxChange('female') }
                    />

                    {/* <input type="radio" name="gender" value="female" className='border-slate-900'
                    /> */}
                </label>
            </div>

            {/* <div className='form-control'>
                <label className={'label gap-2 cursor-pointer'}>
                    <span className='label-text'>Other</span>
                    <input type="checkbox" className='border-slate-900' />
                    <input type="radio" name="gender" value="other" className='border-slate-900'

                        checked={selectedGender === 'other'}
                        onChange={() => { onChackboxChange("other") }}
                    />
                </label>
            </div> */}


        </div>
    )
}

export default GenderCheckBox