import * as Yup from "yup";

export const form = {
  formId: "sign-in-form",
  formField: {
    email: {
      name: "email",
      label: "Email",
      type: "email",
      errorMsg: "Email address is required.",
      invalidMsg: "Your email address is invalid",
    },
    password: {
      name: "password",
      label: "Password",
      type: "password",
      errorMsg: "Password is required.",
      invalidMsg: "Your password should be more than 6 characters.",
    },
  },
};

const {
  formField: { email, password },
} = form;

export const initialValues = {
  [email.name]: "",
  [password.name]: "",
};

export const validations = Yup.object().shape({
  [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
  [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
});
