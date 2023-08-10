import { Box } from '@mui/system';
import { datesRegex, datesRegex2 } from '../../services/regexes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addNote, setCurrentNote, toggleModalOpen, updateNote } from '../../redux/notesSlice';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { selectCurrentNote } from '../../redux/selectors';
import { NameInput } from './NameInput';
import { CategoryInput } from './CategoryInput';
import { ContentInput } from './ContentInput';
import { dateFormat } from '../../constants/helpers';

const inputStyles = {
  marginBottom: 7,
  '.MuiInputBase-input': { padding: '16px 14px' },
  '.MuiFormHelperText-root': {
    mt: '4px',
    mb: '0',
    ml: '16px',
    fontSize: '12px',
    lineHeight: '1.16',
  },
};

export const FormAddNote = () => {
  const dispatch = useAppDispatch();
  const currentNote = useAppSelector(selectCurrentNote);
  const modalHeader = `${!currentNote ? 'Add Note' : 'Update Note'}`;
  const closeModal = () => {
    dispatch(toggleModalOpen());
  };

  const [inputCategory, setInputCategory] = useState(currentNote?.category || '');
  const [inputName, setInputName] = useState(currentNote?.name || '');
  const [inputContent, setInputContent] = useState<any>(currentNote?.content || '');

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const createdDate = new Date().toLocaleDateString('en-us', dateFormat);

    const contentCheck = inputContent.match(datesRegex) || inputContent.match(datesRegex2);

    let dates = '';

    if (inputContent !== null) {
      if (contentCheck) {
        dates = contentCheck;
      }
    }

    try {
      if (currentNote) {
        dispatch(updateNote(currentNote.id, inputName, inputCategory, inputContent, dates));
        closeModal();
        return;
      }
      dispatch(addNote(inputName, createdDate, inputCategory, inputContent, dates));
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Typography
        id="transition-modal-title"
        variant="h5"
        component="h2"
        sx={{ textAlign: 'center', mb: 7, fontSize: '30px' }}
      >
        {modalHeader}
      </Typography>
      <Box
        onSubmit={submitHandler}
        component="form"
        id="sign-up"
        sx={{
          width: '100%',
          display: 'flex',
          margin: '0 auto',
          flexDirection: 'column',
        }}
      >
        <NameInput inputStyles={inputStyles} inputName={inputName} setInputName={setInputName} />

        <CategoryInput
          inputStyles={inputStyles}
          inputCategory={inputCategory}
          setInputCategory={setInputCategory}
        />
        <ContentInput
          inputStyles={inputStyles}
          setInputContent={setInputContent}
          inputContent={inputContent}
        />

        <Button variant="contained" size="large" type="submit">
          {modalHeader}
        </Button>
      </Box>
    </>
  );
};
