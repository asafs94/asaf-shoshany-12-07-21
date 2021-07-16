import React, { FC } from 'react';
import { IconButton, Paper } from '@material-ui/core';
import icons from '../../assets/icons';
import useStyles from './SearchInput.styles';
import { useState } from 'react';
import classNames from 'classnames';
import AutoCompleteInput from './AutoCompleteInput';
import weatherApi from '../../apis/weather';
import PlaceModel from '../../models/place.model';
import { Place } from '../../types';
import { useDispatch } from 'react-redux';
import { setPlace } from '../../redux/actions/current-place.actions';

type Props = {
  className?: string,
}


const queryPlaces = (query: string) => weatherApi.queryAutoComplete(query).then(response => response.map(PlaceModel.toAppModel))

const SearchInput: FC<Props> = ({ className }) => {
  const [inputOpen, setInputOpen] = useState(false)
  const classes = useStyles({ inputOpen });
  const dispatch = useDispatch()

  const onSubmit = (option: Place) => {
    setInputOpen(false);
    dispatch(setPlace.request(option));
  }

  const onButtonClick = () => {
    if (!inputOpen) setInputOpen(true);
  }

  return (
    <Paper className={classNames(classes.Root, className)}>
      <AutoCompleteInput focus={inputOpen} onBlur={() => setInputOpen(false)} onChange={onSubmit} onLoadOptions={queryPlaces} visible={inputOpen} />
      <IconButton onClick={onButtonClick} className={classes.IconButton} >
        <icons.Search />
      </IconButton>
    </Paper>
  );
}


export default SearchInput;