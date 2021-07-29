import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }
  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    return (
      <div>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field name="Title" component={this.renderInput} label="Title" />
          <Field
            name="Description"
            component={this.renderInput}
            label="Description"
          />
          <button className="ui primary button">Submit</button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
