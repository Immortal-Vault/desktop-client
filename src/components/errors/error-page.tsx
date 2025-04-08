import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Image} from "@heroui/react";

interface ErrorPageProps {
  error?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  const { t } = useTranslation('errorBoundary');
  return (
      <div className="container mx-auto max-w-md px-4">
        <div className="flex min-h-screen items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-center text-2xl font-bold">
                {t('title')}
              </h2>
              <p className="text-center text-lg text-default-500">
                {t(error ? 'message.boundary' : 'message.router')}
              </p>
              {error && (
                  <p className="text-center text-lg text-default-500">
                    {t('error', {error})}
                  </p>
              )}
            </div>
            <Image src={'/error.png'} className={'w-[60%] mx-auto'} alt={'error-smile'}/>
          </div>
        </div>
      </div>
  );
};
