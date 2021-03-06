import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  })

  const [toDateDisabled, toggleDisabled] = useState(false)
  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  return (
    <>
      <h1 class='large text-primary'>Add Your Education</h1>
      <p class='lead'>
        <i class='fas fa-code-branch'></i> Add any school or bootcamp you have
        attended
      </p>
      <small>* = required field</small>
      <form
        class='form'
        onSubmit={(e) => {
          e.preventDefault()
          addEducation(formData, history)
        }}
      >
        <div class='form-group'>
          <input
            type='text'
            value={school}
            onChange={(e) => onChange(e)}
            placeholder='* School or Bootcamp'
            name='school'
            required
          />
        </div>
        <div class='form-group'>
          <input
            type='text'
            value={degree}
            onChange={(e) => onChange(e)}
            placeholder='* Degree or Certificate'
            name='degree'
            required
          />
        </div>
        <div class='form-group'>
          <input
            type='text'
            value={fieldofstudy}
            onChange={(e) => onChange(e)}
            placeholder='Field of Study'
            name='fieldofstudy'
          />
        </div>
        <div class='form-group'>
          <h4>From Date</h4>
          <input
            value={from}
            onChange={(e) => onChange(e)}
            type='date'
            name='from'
          />
        </div>
        <div class='form-group'>
          <p>
            <input
              value={current}
              checked={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current })
                toggleDisabled(!toDateDisabled)
              }}
              type='checkbox'
              name='current'
            />{' '}
            Current School
          </p>
        </div>
        <div class='form-group'>
          <h4>To Date</h4>
          <input
            disabled={toDateDisabled ? 'disabled' : ''}
            type='date'
            name='to'
            value={to}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <textarea
            value={description}
            onChange={(e) => onChange(e)}
            name='description'
            cols='30'
            rows='5'
            placeholder='Program Description'
          ></textarea>
        </div>
        <input type='submit' class='btn btn-primary my-1' />
        <a class='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </form>
    </>
  )
}

addEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(withRouter(AddEducation))
