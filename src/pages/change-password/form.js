import * as Yup from "yup";

export const form = {
  formId: "change-password-form",
  formField: {
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
  formField: { password },
} = form;

export const initialValues = {
  [password.name]: "",
};

export const validations = Yup.object().shape({
  [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
});
