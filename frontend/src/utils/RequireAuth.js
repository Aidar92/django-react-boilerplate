import { push } from "connected-react-router";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const requeireAuth = (Component) => (props) => {
  const AuthenticatedComponent = () => {
    const auth = useSelector((state) => state.auth);
    const router = useSelector((state) => state.router);
    const dispatch = useDispatch();
    const checkAuth = useCallback(() => {
      if (!auth.isAuthenticated) {
        const redirectAfterLogin = router.location.pathname;
        dispatch(push(`/login?next=${redirectAfterLogin}`));
      }
    }, [auth.isAuthenticated, dispatch, router.location.pathname]);

    useEffect(() => {
      checkAuth();
    }, [checkAuth]);
    return <div>{auth.isAuthenticated ? <Component {...props} /> : null}</div>;
  };
  return <AuthenticatedComponent />;
};
