import { useCallback, useEffect } from 'react';
import type { FC, PropsWithChildren } from 'react';
import type { AnimationResult, SpringValue, Lookup } from '@react-spring/web';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/ui/Portal/Portal';
import { Overlay } from '@/shared/ui/Overlay/Overlay';

import { useLoadAnimationLibrary } from '@/shared/hook/useAnimationLibrary';
import type { UseAnimationLibrary } from '@/shared/hook/useAnimationLibrary';

import cls from './Drawer.module.scss';

interface Props extends PropsWithChildren {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

interface EnrichedProps extends Props {
  Gesture: typeof import('@use-gesture/react');
  Spring: typeof import('@react-spring/web');
}

const height = window.innerHeight - 100;

const Drawer: FC<EnrichedProps> = ({
  className, children, isOpen, onClose, lazy, Gesture, Spring,
}) => {
  const [{ y }, api] = Spring.useSpring(() => ({
    y: height,
    onRest: (e: AnimationResult<SpringValue<Lookup<number>>>) => e.value.y === height && onClose(),
  }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  const closeDrawer = useCallback((velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...Spring.config.stiff, velocity } });
  }, [api]);

  const onOverlayClose = useCallback(() => {
    closeDrawer(y.velocity);
  }, [y.velocity, closeDrawer]);

  const bind = Gesture.useDrag(
    ({
      last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel,
    }) => {
      // NOTE: if the user drags up passed a threshold, then we cancel the drag so that the sheet resets to its open position
      if (oy < -70) cancel();

      // NOTE: when the user releases the sheet, we check whether it passed the threshold for it to close, or if we reset it to its open position
      if (!last) {
        return api.start({ y: oy, immediate: true });
      }

      if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
        return closeDrawer(vy);
      }

      return openDrawer();
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  );

  const mods = {
    [cls.opened]: isOpen,
  };

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [isOpen, openDrawer]);

  if (lazy && !isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className])}>
        <Overlay onClick={onOverlayClose} />
        <Spring.a.div
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          className={cls.content}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
};

const DrawerWrapper: FC<Props> = (props) => {
  const {
    isLoaded,
    Gesture,
    Spring,
  } = useLoadAnimationLibrary() as Required<ReturnType<UseAnimationLibrary>>;

  if (!isLoaded) {
    return null;
  }

  return <Drawer {...props} Gesture={Gesture} Spring={Spring} />;
};

export { DrawerWrapper as Drawer };
