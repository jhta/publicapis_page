import React from 'react'

const Form = props => (
  <section>
    <div className='columns'>
      <div className='field is-grouped'>
        <div className="control">
          <input
            className='input is-large'
            type='text'
            name='title'
            onChange={props.handleInput}
            value={props.title}
            placeholder='search'
          />
        </div>
      </div>
    </div>
    <div className='columns'>
      <div className='field'>
        <div className='control is-vcentered'>
          <label className='checkbox' htmlFor='https'>
             <input
                onChange={props.handleCheck}
                type='checkbox'
                name='https'
                checked={props.https}
              />

              HTTPS
          </label>
        </div>
      </div>
      <div className='field'>
        <label htmlFor='cors'>CORS: </label>
        <div className='select'>
          <select name='cors' value={props.cors}>
            <option value='unknown'>uknown</option>
            <option value=''>all</option>
            <option value='yes'>yes</option>
            <option value='no'>no</option>
          </select>
        </div>
      </div>
      <div className='field'>
        <label htmlFor='auth'>AUTH: </label>
        <div className='select'>
          <select name='auth' value={props.auth} onChange={props.handleInput}>
            <option value=''>All</option>
            <option value='oauth'>OAuth</option>
            <option value='apikey'>ApiKey</option>
            <option value='none'>none</option>
          </select>
        </div>
      </div>
    </div>
    <button
      className={`button is-large is-primary ${props.loading ? 'is-loading' : ''}`}
      onClick={props.handleSubmit}
    >
      Search
    </button>
    <style jsx>{`
      .field {
        display: flex;
        align-items: center;
        margin-bottom: 0 !important;
        margin-right: 1rem;
      }

      label, input[type="checkbox"] {
        margin-right: .4rem;
      }

      .button {
      }

      .columns {
        margin-bottom: 1.5rem;
      }

      input[type="text"] {
        min-width: 420px;
      }


    `}</style>
  </section>
)

export default Form
