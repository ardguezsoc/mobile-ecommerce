import React from 'react';
import { SelectOptions } from '../../../../components/Select';
import { capitalize } from '../../../../utils/capitalize';

export const MobileOptions = ({ options, labels, setFunction }) => {
  return options.map((option, index) => (
    <div key={index} className="selectContainer">
      <p className="mobileDetailLabel">{capitalize(labels[index])}</p>
      <SelectOptions
        options={option}
        key={index}
        defaultValue={option[0]}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.code}
        onChange={({ code }) => setFunction[index](code)}
      />
    </div>
  ));
};
