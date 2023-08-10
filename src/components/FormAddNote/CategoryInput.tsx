import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { categories } from '../../constants/categories';

export const CategoryInput = ({ inputStyles, inputCategory, setInputCategory }: any) => {
  const handleChangeCategory = (event: SelectChangeEvent) => {
    setInputCategory(event.target.value as string);
  };
  return (
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
  );
};
