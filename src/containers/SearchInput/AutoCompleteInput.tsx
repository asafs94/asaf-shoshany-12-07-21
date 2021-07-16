

import { useEffect } from 'react';
import { FC } from 'react'
import { ActionMeta, FocusEventHandler, OptionTypeBase } from 'react-select';
import AsyncSelect from 'react-select/async';
import { Place } from '../../types';


type Props = {
  onChange?: (option: Place) => void;
  onLoadOptions?: (value: string) => Promise<Place[]>;
  visible: boolean,
  onBlur: FocusEventHandler,
  focus?: boolean
}



const AutoCompleteInput = ({ onChange, onLoadOptions, visible, onBlur, focus }: Props) => {

  const onSelectChange = (value: OptionTypeBase | null, action: ActionMeta<OptionTypeBase>) => {
    onChange && onChange(value as any)
  }

  useEffect(() => {
    document.getElementById('search')?.focus();
  }, [focus])

  return (
    <AsyncSelect
      inputId="search"
      styles={{
        dropdownIndicator: (props) => ({ display: 'none' }),
        container: (props) => ({
          border: 'none',
          flex: 1,
          transition: 'all 300ms ease-in-out',
          width: visible ? 'auto' : 0,
          opacity: visible ? 1 : 0,
        }),
        control: (props) => ({ outline: 'none' }),
        indicatorsContainer: (props) => ({ display: 'none' }),

      }}
      onBlur={onBlur}
      getOptionLabel={option => option.generalInfo.localizedName}
      getOptionValue={option => option.key}
      onChange={onSelectChange}
      loadOptions={onLoadOptions}
      placeholder="Location"
    />
  )
}

export default AutoCompleteInput
