import { Spinner } from '@heroui/react';

interface LoadingOverlayProps {
  visible?: boolean;
}

export function LoadingOverlay({ visible = false }: LoadingOverlayProps) {
  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <Spinner
            size="lg"
            color="primary"
            classNames={{
              circle1: 'opacity-90',
              circle2: 'opacity-70',
              wrapper: 'z-[9999]',
            }}
          />
        </div>
      )}
    </>
  );
}
