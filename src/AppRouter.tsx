import { FC, Suspense, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage, LoadingOverlay, NonAuthorizedRoute } from './components';
import { ROUTER_PATH } from './shared';
import LoginPage from './views/auth/LoginPage.tsx';
import { fetchEnvs, selectEnvVars, useAppDispatch, useAppSelector } from './stores';
import { moveWindow, Position } from '@tauri-apps/plugin-positioner';
import { info } from '@tauri-apps/plugin-log';

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
  const dispatch = useAppDispatch();
  const { envs, loading, error } = useAppSelector(selectEnvVars);
  // const auth = useAppSelector(selectAuth);
  // const authContext = useAuth();
  // const googleDrive = useGoogleDrive();
  //
  useEffect(() => {
    if (error) {
      return;
    }

    if (!envs && !loading) {
      dispatch(fetchEnvs());
      return;
    }

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
  }, [envs, loading, error]);

  useEffect(() => {
    moveWindow(Position.Center);
    info('Immortal Vault started');
  }, []);

  if (
    !envs ||
    loading
    // (auth.authState === EAuthState.Unknown && authContext.isFetchInProgress) ||
    // (auth.authState === EAuthState.Authorized && !googleDrive.googleDriveStateFetched)
  ) {
    return (
      <LoadingOverlay
        visible={true}
      />
    );
  }

  return (
    <Suspense fallback={null}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};
