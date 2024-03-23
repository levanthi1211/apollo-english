import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useRefreshTokenMutation } from "shared/redux/endpoints/auth";
import { logOut, setTokens } from "shared/redux/slices/authSlice";
import { selectAuth } from "shared/redux/slices/authSlice";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = () => {
  let location = useLocation();

  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();

  const [getTokens, { isLoading }] = useRefreshTokenMutation();

  useEffect(() => {
    const handleVerify = async () => {
      const { accessToken, refreshToken } = auth;

      if (accessToken && refreshToken) {
        const decodedJwt = parseJwt(accessToken);

        if (!decodedJwt) {
          dispatch(logOut());
        } else if (decodedJwt.exp * 1000 < Date.now()) {
          const refreshResult = await getTokens({
            refreshToken,
          });

          dispatch(
            setTokens({
              accessToken: refreshResult.data.accessToken,
              refreshToken: refreshResult.data.refreshToken,
            })
          );
        }
      } else {
        dispatch(logOut());
      }
    };

    handleVerify();
  }, [location]);

  return;
};

export default AuthVerify;
