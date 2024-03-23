import * as Yup from "yup";

export const form = {
  formId: "reset-password-form",
  formField: {
    email: {
      name: "email",
      label: "Your Apollo Email",
      type: "email",
      errorMsg: "Email address is required.",
      invalidMsg: "Your email address is invalid",
    },
  },
};

const {
  formField: { email },
} = form;

export const initialValues = {
  [email.name]: "",
};

export const validations = Yup.object().shape({
  [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
});
