import React from 'react';
import { SelectOptions } from '../../../../components/Select';

export const MobileOptions = ({ options, setFunction }) => {
  return options.map((option, index) => (
    <SelectOptions
      options={option}
      key={index}
      defaultValue={option[0]}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.code}
      onChange={({ code }) => setFunction[index](code)}
    />
  ));
};
