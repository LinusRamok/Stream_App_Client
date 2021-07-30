import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div className={`field ${meta.touched && meta.error ? "error" : ""}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  renderError({ touched, error }) {
    if (touched && error) {
      return <div className="ui error message">{error}</div>;
    }
  }
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field name="title" component={this.renderInput} label="Title" />
          <Field
            name="description"
            component={this.renderInput}
            label="description"
          />
          <button className="ui primary button">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
const formWrap = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
export default connect(null, { createStream })(formWrap);
