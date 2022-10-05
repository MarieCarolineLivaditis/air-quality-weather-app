import { useState } from 'react';
import style from './Form.scss';

function Form() {
  const [value, setValue] = useState('');
  const [searchedValue, setSearchedValue] = useState([]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (!value) {
        event.preventDefault();

        console.log('return');
      return;
    }
    setSearchedValue(value);
    event.preventDefault();
    setValue('');
  };

  return (
    <form
      aria-label="champ de saisi de la ville recherchée"
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Saisissez le nom de la ville recherchée ou le code postal"
        className="form-input"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
}

export default Form;
