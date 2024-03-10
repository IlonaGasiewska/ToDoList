import './Form.sass';

// interface Props {
//     handleInputUpdate : void,
//     addTask: void,
// }

const Form = (props: any)  => {

  return (
      <form>
        <input onInput={props.handleInputUpdate} type="text"/>
        <button onClick={props.addTask}>add</button>
      </form>
  );
}

export default Form;
