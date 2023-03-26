import {Component} from 'react'
import './index.css'

class RegistrationFrom extends Component {
  state = {
    firstNameError: false,
    lastNameError: false,
    isSubmit: false,
  }

  submitResponse = () => {
    const {firstNameError, lastNameError} = this.state
    if (!firstNameError && !lastNameError) {
      this.setState(prevState => ({
        firstNameError: false,
        lastNameError: false,
        isSubmit: !prevState.isSubmit,
      }))
    }
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstNameError: false})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({lastNameError: true})
    } else {
      this.setState({lastNameError: false})
    }
  }

  renderForm = () => {
    const {firstNameError, lastNameError} = this.state
    const firstNameClassName = firstNameError
      ? 'input-box error-input'
      : 'input-box'
    const lastNameClassName = lastNameError
      ? 'input-box error-input'
      : 'input-box'
    const firstNameErrorMessage = firstNameError ? 'Required' : ''
    const lastNameErrorMessage = lastNameError ? 'Required' : ''
    return (
      <>
        <form className="inputs-container">
          <div className="each-input">
            <label htmlFor="firstName" className="label-style">
              FIRST NAME
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              className={firstNameClassName}
              onBlur={this.onBlurFirstName}
            />
            <p className="error-message">{firstNameErrorMessage}</p>
          </div>

          <div className="each-input">
            <label htmlFor="lastName" className="label-style">
              LAST NAME
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Last name"
              className={lastNameClassName}
              onBlur={this.onBlurLastName}
            />
            <p className="error-message">{lastNameErrorMessage}</p>
          </div>
          <button
            type="submit"
            onClick={this.submitResponse}
            className="submit-btn"
          >
            Submit
          </button>
        </form>
      </>
    )
  }

  renderSubmit = () => {
    return (
      <>
        <div className="inputs-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            className="success-img"
            alt="success"
          />
          <h1>Submitted Successfully</h1>
          <button
            type="submit"
            className="submit-btn"
            onClick={this.submitResponse}
          >
            Submit Another Response
          </button>
        </div>
      </>
    )
  }

  render() {
    const {isSubmit} = this.state
    return (
      <>
        <div className="main-container">
          <div className="app-container">
            <h1 className="registration-heading">Registration</h1>
            {isSubmit ? this.renderSubmit() : this.renderForm()}
          </div>
        </div>
      </>
    )
  }
}

export default RegistrationFrom
