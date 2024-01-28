import yup from 'yup';
import signInSchema from "./sign-in";

const schema = signInSchema.shape({
    name: yup.string().label('Name').min(2).required(),
})

export default schema;