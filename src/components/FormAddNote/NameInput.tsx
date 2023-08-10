import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

export const NameInput = ({ inputStyles, inputName, setInputName }: any) => {
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value as string);
  };
  return (
    <TextField
      onChange={handleChangeName}
      value={inputName}
      sx={inputStyles}
      fullWidth
      autoComplete="given-name"
      id="name"
      label="Note name"
    />
  );
};
