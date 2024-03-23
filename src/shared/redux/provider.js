import { store } from "./store";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

export const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

Providers.propTypes = {
  children: PropTypes.node,
};
