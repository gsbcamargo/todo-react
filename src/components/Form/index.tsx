import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

class Form extends React.Component {
  render() {
    return (
      <form className={style.newTask}> 
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Please add a new study subject:
          </label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What do you want to study?"
            required
          />

        </div>

        <div className={style.inputContainer}>
          <label htmlFor="duration">
            Duration:
          </label>
          <input
            type="time"
            step="1"
            name="duration"
            id="duration"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button
          text="Add"
        />
      </form>
    )
  }
}

export default Form;