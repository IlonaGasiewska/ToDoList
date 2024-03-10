import './Form.sass';

// interface Props {
//     handleInputUpdate : any,
//     addTask: any
// }

const Form = (props: any)  => {

  return (
      <form>
        <input onInput={props.handleInputUpdate} type="text"/>
        <button type='button' onClick={props.addTask}>add</button>
      </form>
  );
}

export default Form;
