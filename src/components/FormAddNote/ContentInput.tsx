import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

export const ContentInput = ({ inputStyles, setInputContent, inputContent }: any) => {
  const handleChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setInputContent(event.target.value as string);
  };
  return (
    <TextField
      onChange={handleChangeContent}
      multiline
      minRows={5}
      value={inputContent}
      sx={inputStyles}
      fullWidth
      autoComplete="given-name"
      id="content"
      label="Type note text here..."
    />
  );
};
