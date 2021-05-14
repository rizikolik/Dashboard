import React, { FC } from 'react';
import Select from 'react-select';
type Option = {
  label: any;
  value: any;
};
type SelectProps = {
  options: Option[];
};
const StyledSelect: FC<SelectProps> = ({ options, ...props }) => {
  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      color: '#d0d2d6',
      backgroundColor: '#161d31',
      border: '1px solid #161d31',
      borderRadius: '6px',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid #161d31',
      },
    }),
    menu: (styles: any) => ({
      ...styles,
      color: '#d0d2d6',
      backgroundColor: '#161d31',
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: '#283046', // Custom colour
    }),

    valueContainer: (base: any) => ({
      ...base,
      flexWrap: 'nowrap',
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: 'none',
    }),
    singleValue: (base: any) => ({
      color: '#d02d6',
      width: '100%',
    }),
  };
  return (
    <Select
      options={options}
      autosize={false}
      defaultValue={options[0]}
      styles={selectStyles}
    />
  );
};

export default StyledSelect;
