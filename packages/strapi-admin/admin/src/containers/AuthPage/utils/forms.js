import * as yup from 'yup';
import { translatedErrors } from 'strapi-helper-plugin';
import Login from '../components/Login';
import Oops from '../components/Oops';

const forms = {
  login: {
    Component: Login,
    endPoint: 'login',
    fieldsToOmit: ['rememberMe'],
    schema: yup.object().shape({
      email: yup
        .string()
        .email(translatedErrors.email)
        .required(translatedErrors.required),
      password: yup.string().required(translatedErrors.required),
      rememberMe: yup.bool().nullable(),
    }),
  },
  oops: {
    Component: Oops,
    endPoint: null,
    fieldsToOmit: [],
    schema: null,
  },
};

export default forms;