import { useState, useEffect } from "react";

// ******************************
const useForm = ({ initState, callback, validator }) => {
  const [state, setState] = useState(initState);
  const [errors, setErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);

  // ******************************
  useEffect(() => {
    console.log(errors)
    const isValidErrors = Object.values(errors).filter(error => typeof error !== "undefined")
        .length > 0;
    if (isSubmited && !isValidErrors) callback();
  }, [errors]);

  // ******************************
  const handleChange = e => {
    const { name, value } = e.target;
    setState(() => ({
      ...state,
      [name]: value
    }));
    
  };

  // ******************************
  const handleBlur = e => {
    const { name: fieldName } = e.target;
    const faildFiels = validator(state, fieldName);
    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(faildFiels)[0]
    }));
  };

  // ******************************
  const handleSubmit = e => {
    e.preventDefault();
    Object.keys(state).map((k) => {
        const fieldName = k
        const faildFiels = validator(state, fieldName);
        console.log(faildFiels)
        setErrors((prev) => ({ ...prev, [fieldName]: faildFiels[fieldName] }));
        setIsSubmited(true);
    })
  };

  // ******************************
  const handleNumber = e => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    handleChange(e);
  }

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    handleNumber,
    state,
    errors,
  };
};

export default useForm;
