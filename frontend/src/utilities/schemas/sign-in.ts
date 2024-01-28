import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().label('Email').email().required(),
    password: yup.string().label('Password').min(8).matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).+$/, 'Password should contain, one letter, one number and one special character').required(),
});

export default schema