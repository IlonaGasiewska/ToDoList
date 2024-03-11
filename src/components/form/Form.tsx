import './Form.sass';

type FormTypes = {
    handleInputUpdate:(e: React.ChangeEvent<HTMLInputElement>) => void,
    addTask: () => void,
    inputValue: string
}

const Form = ({handleInputUpdate, addTask, inputValue} : FormTypes)  => {

  return (
      <form>
        <input value={inputValue} onChange={handleInputUpdate} type="text"/>
        <button type='button' onClick={addTask}>add</button>
      </form>
  );
}

export default Form;
