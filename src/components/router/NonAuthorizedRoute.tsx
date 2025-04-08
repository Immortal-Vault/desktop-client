import { ReactNode } from 'react';

export const NonAuthorizedRoute = (props: { children: ReactNode }) => {
  // TODO: refactor
  // const { authState } = useAppSelector(selectAuth);
  //
  // if (authState === EAuthState.Authorized) {
  //   return <Navigate to={ROUTER_PATH.MENU} />;
  // }

  return props.children;
};
