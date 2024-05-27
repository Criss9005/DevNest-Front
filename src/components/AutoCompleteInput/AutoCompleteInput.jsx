import * as React from 'react';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';
import { v4 as uuidv4 } from 'uuid';

const Input = styled('input')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  color: theme.palette.mode === 'light' ? '#000' : '#fff',
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  overflow: 'auto',
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));

export default function UseAutocomplete({
  list,
  setSelectedFood,
  setFoodsearch,
  inputClassName,
  listboxClassName,
}) {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: list,
    getOptionLabel: option => option.title,
  });

  React.useEffect(() => {
    const props = getInputProps();
    const value = props.value;
    setSelectedFood(value);
  });
  const optionsWithUniqueIds = list.map(option => ({
    ...option,
    _id: option._id || uuidv4(),
  }));
  return (
    <div>
      <div {...getRootProps()}>
        <Input {...getInputProps()} className={inputClassName} placeholder="Enter product name"/>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()} className={listboxClassName}>
          {groupedOptions.map((option, index) => {
            const { key, ...optionProps } = getOptionProps({ option, index });
            return (
              <li key={optionsWithUniqueIds[index]._id} {...optionProps}>
                {option.title}
              </li>
            );
          })}
        </Listbox>
      ) : null}
    </div>
  );
}
