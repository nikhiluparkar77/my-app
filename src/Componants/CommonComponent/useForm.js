import {useEffect,useState} from "react"; 

const UseForm = (ValidateInfo) => {
     const [InputValue, setInputValue] = useState({
         email:"",
         password: ""
     });
     const [Errors, setErrors] = useState({});
     const [FormSubmit,setFormSubmit] = useState(false)

     const HandleChange = (e) => {
         const {name, value} = e.target;
         setInputValue({
             ...InputValue,
             [name]:value
         })
         
     }

     const HandleSubmit = (e) => {
        e.preventDefault(); 

        setErrors(ValidateInfo(InputValue));
        setFormSubmit(true);
     }

    

     return {HandleChange, InputValue,HandleSubmit, Errors}

}

export default UseForm;