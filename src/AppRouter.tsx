import {FC, Suspense} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ErrorPage, NonAuthorizedRoute} from './components';
import {ROUTER_PATH} from './shared';
import LoginPage from "./views/auth/LoginPage.tsx";

const errorElement = <ErrorPage />;

const appRouter = createBrowserRouter([
  {
    path: ROUTER_PATH.ROOT,
    element: (
      <NonAuthorizedRoute>
        <LoginPage />
      </NonAuthorizedRoute>
    ),
    errorElement,
  },
]);

export const AppRouter: FC = () => {
  // const dispatch = useAppDispatch();
  // const { envs, loading } = useAppSelector(selectEnvVars);
  // const auth = useAppSelector(selectAuth);
  // const authContext = useAuth();
  // const googleDrive = useGoogleDrive();
  //
  // useEffect(() => {
  //   if (!envs && !loading) {
  //     dispatch(fetchEnvs());
  //     return;
  //   }
  //
  //   if (googleDrive.googleDriveStateFetched || !envs || auth.authState === EAuthState.Unknown) {
  //     return;
  //   }
  //
  //   if (auth.authState !== EAuthState.Authorized) {
  //     dispatch(setGoogleDriveStateFetched(true));
  //     return;
  //   }
  //
  //   dispatch(setGoogleDriveStateFetched(false));
  //   googleDrive.fetchGoogleDriveState();
  // }, [envs, loading, auth.authState, authContext.isFetchInProgress]);
  //
  // if (
  //   !envs ||
  //   loading ||
  //   (auth.authState === EAuthState.Unknown && authContext.isFetchInProgress) ||
  //   (auth.authState === EAuthState.Authorized && !googleDrive.googleDriveStateFetched)
  // ) {
  //   return (
  //     <LoadingOverlay
  //       visible={true}
  //       zIndex={1000}
  //       overlayProps={{ radius: 'sm', blur: 2 }}
  //       loaderProps={{ color: 'blue' }}
  //     />
  //   );
  // }

  return (
    <Suspense fallback={null}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};
