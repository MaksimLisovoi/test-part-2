import { Box } from '@mui/system';
import { datesRegex } from '../../services/regexes';
import { useAppDispatch } from '../../redux/hooks';
import { addNote } from '../../redux/notesSlice';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, ChangeEventHandler, useRef, useState } from 'react';
import { categories } from '../../constants/categories';

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
  const form = useRef<HTMLFormElement | undefined>();
  const dispatch = useAppDispatch();

  const [inputCategory, setInputCategory] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputContent, setInputContent] = useState('');

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setInputCategory(event.target.value as string);
  };
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value as string);
  };
  const handleChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setInputContent(event.target.value as string);
  };

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // if (form.current !== null) {
    //   return;
    // }
    const formData = new FormData();
    const content: any = formData.get('content');

    const createdDate = new Date().toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    formData.append('created', createdDate);
    formData.append('name', inputName);
    formData.append('content', inputContent);
    formData.append('category', inputCategory);

    if (content !== null) {
      content.match(datesRegex)
        ? formData.append('dates', content.match(datesRegex))
        : formData.append('dates', '');
    }

    const dataObject = Object.fromEntries(formData.entries());
    const { name, created, category, dates } = dataObject;

    // const currentNote = notes[refs.notesForm.id];

    try {
      // if (currentNote) {
      //   currentNote.name = dataObject.name;
      //   currentNote.category = dataObject.category;
      //   currentNote.content = dataObject.content;

      //   refreshPage();
      //   return;
      // }
      // console.log(dataObject);
      dispatch(addNote(name, created, category, content, dates));
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
        Add Note
      </Typography>
      <Box
        ref={form}
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
        <TextField
          onChange={handleChangeName}
          value={inputName}
          sx={inputStyles}
          fullWidth
          autoComplete="given-name"
          id="name"
          label="Note name"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            sx={inputStyles}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputCategory}
            label="Category"
            onChange={handleChangeCategory}
          >
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          onChange={handleChangeContent}
          multiline
          rows={4}
          value={inputContent}
          sx={inputStyles}
          fullWidth
          autoComplete="given-name"
          id="content"
          label="Type note text here..."
        />
        <Button variant="contained" size="large" type="submit">
          Add note
        </Button>
      </Box>
    </>
  );
};
