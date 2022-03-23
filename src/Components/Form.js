import React from "react";
import { connect } from "react-redux";
import Button from "@mui/material/Button";

import {
  updateName,
  updateAge,
  updateGender,
  updateOccupation,
} from "../Redux/action-creator";
import "../styling/styling.css";

class Form extends React.Component {
  render() {
    const dispatch = this.props.dispatch;
    const { name, age, gender, occupation } = this.props;

    const handleSubmit = (e) => {
      e.preventDefault();
      // save in local storage(thats all it should do)
      localStorage.setItem("name", name);
      localStorage.setItem("gender", gender);
      localStorage.setItem("occupation", occupation);
      localStorage.setItem("age", age);
    };

    // array for providing option values in age selecter
    const arrey = [];
    for (let i = 1; i < 100; i++) {
      arrey.push(i);
    }

    return (
      <>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-container">
              <div className="form-field">
                <label>
                  <p>NAME</p>
                  <input
                    className="name-input-field"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => {
                      dispatch(updateName(e.target.value));
                    }}
                  ></input>
                </label>
              </div>
              <div className="form-field">
                <label>
                  <p> OCCUPATION</p>
                  <select
                    onChange={(e) => {
                      console.log(e.target.value);
                      dispatch(updateOccupation(e.target.value));
                    }}
                  >
                    <option
                      selected={occupation === "software developer"}
                      value="software developer"
                    >
                      Software Developer
                    </option>
                    <option
                      selected={occupation === "quality analyst"}
                      value="quality analyst"
                    >
                      Quality Analyst
                    </option>
                    <option
                      selected={occupation === "hr executive"}
                      value="hr executive"
                    >
                      HR Executive
                    </option>
                  </select>
                </label>
              </div>
              <div className="form-field">
                <label>
                  <p> GENDER</p>
                  <div className="gender-input-container">
                    <div>
                      <input
                        checked={gender === "male"}
                        type="radio"
                        value="male"
                        onClick={(e) => dispatch(updateGender(e.target.value))}
                      />
                      Male
                    </div>
                    <div>
                      <input
                        checked={gender === "female"}
                        type="radio"
                        value="female"
                        onClick={(e) => dispatch(updateGender(e.target.value))}
                      />
                      Female
                    </div>
                    <div>
                      <input
                        checked={gender === "other"}
                        type="radio"
                        value="other"
                        onClick={(e) => dispatch(updateGender(e.target.value))}
                      />
                      Other
                    </div>
                  </div>
                </label>
              </div>
              <div className="form-field">
                <label>
                  <p>Age</p>
                  <select
                    onChange={(e) => {
                      console.log(e.target.value);
                      dispatch(updateAge(e.target.value));
                    }}
                  >
                    {arrey.map((item) => {
                      return (
                        <option selected={age === item.toString()}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>
              <div className="button-container">
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const name = state.name;
  const age = state.age;
  const gender = state.gender;
  const occupation = state.occupation;

  return {
    name,
    age,
    gender,
    occupation,
  };
};

export default connect(mapStateToProps)(Form);
