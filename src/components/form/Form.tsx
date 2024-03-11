import { FormTypes } from '../../types/types';
import './Form.scss';

const Form = ({handleInputUpdate, addTask, inputValue} : FormTypes)  => {
  return (
      <form>
        <input value={inputValue} onChange={handleInputUpdate} type="text"/>
        <button type='button' onClick={addTask}>add</button>
      </form>
  );
}

export { Form };
