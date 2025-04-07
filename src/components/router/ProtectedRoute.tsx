import {ReactNode} from 'react';

export const ProtectedRoute = (props: { children: ReactNode }) => {
  // TODO: refactor
  // const { authState } = useAppSelector(selectAuth);
  //
  // if (authState === EAuthState.Unknown) {
  //   return (
  //     <LoadingOverlay
  //       visible={true}
  //       zIndex={1000}
  //       overlayProps={{ radius: 'sm', blur: 2 }}
  //       loaderProps={{ color: 'blue' }}
  //     />
  //   );
  // }

  // if (authState !== EAuthState.Authorized) {
  //   return <Navigate to={ROUTER_PATH.SIGN_IN} />;
  // }

  return props.children;
};
