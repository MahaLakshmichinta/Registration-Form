// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameRequire: false,
    lastNameRequire: false,
    isSubmittedForm: false,
  }

  onChangeUserInputFirst = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeUserInputLast = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.ValidFirstName()
    this.setState({firstNameRequire: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.ValidLastName()
    this.setState({lastNameRequire: !isValidLastName})
  }

  ValidFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  ValidLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.ValidFirstName()
    const isValidLastName = this.ValidLastName()
    if (isValidFirstName && isValidLastName) {
      this.setState({isSubmittedForm: true})
    } else {
      this.setState({
        firstNameRequire: !isValidFirstName,
        lastNameRequire: !isValidLastName,
        isSubmittedForm: false,
      })
    }
  }

  renderInput = () => {
    const {firstName, lastName, firstNameRequire, lastNameRequire} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label className="label-input" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          className="input"
          onChange={this.onChangeUserInputFirst}
          onBlur={this.onBlurFirstName}
          placeholder="First name"
        />
        {firstNameRequire ? (
          <p className="error-message">Required</p>
        ) : (
          <p> </p>
        )}

        <label className="label-input" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          className="input"
          onChange={this.onChangeUserInputLast}
          onBlur={this.onBlurLastName}
          placeholder="Last name"
        />
        {lastNameRequire ? <p className="error-message">Required</p> : <p> </p>}
        <div className="button-container">
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }

  anotherSubmission = () => {
    this.setState({isSubmittedForm: false, firstName: '', lastName: ''})
  }

  renderSuccess = () => (
    <div className="render-success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p className="para">Submitted Successfully</p>
      <button className="button" type="button" onClick={this.anotherSubmission}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmittedForm} = this.state
    return (
      <div className="register-container">
        <h1 className="heading">Registration</h1>
        <div className="container">
          {isSubmittedForm ? this.renderSuccess() : this.renderInput()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
