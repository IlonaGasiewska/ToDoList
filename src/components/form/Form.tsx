import './Form.sass';

// interface Props {
//     handleInputUpdate : void,
//     addTask: void,
//     inpuValue: string
// }

const Form = (props: any)  => {

  return (
      <form>
        <input value={props.inputValue} onInput={props.handleInputUpdate} type="text"/>
        <button type='button' onClick={props.addTask}>add</button>
      </form>
  );
}

export default Form;
