import PropTypes from 'prop-types'

export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandle,
    textarea
}) => {
    const handleValueChange = (e)=>{
        onChangeHandler(e.target.value, field)
    }

    const handleOnBlur = (e)=>{
        onBlurHandle(e.target.value, field)
    }
  return (
    <>
        <div className="auth-form-label">
            <span>{label}</span>
        </div>
        {
            textarea ? (
                <textarea
                    type = {type}
                    value={ value}
                    onChange={handleValueChange}
                    onBlur={handleOnBlur}
                    rows={5}
                    style={{maxWidth: '400px'}}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleOnBlur}
                />
            )
        }
        <span className="auth-form-validation-message">
            {showErrorMessage && validationMessage}
        </span>
    </>
  )
}

Input.propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    showErrorMessage: PropTypes.bool.isRequired,
    validationMessage: PropTypes.string,
    onBlurHandle: PropTypes.func.isRequired,
    textarea: PropTypes.bool
}