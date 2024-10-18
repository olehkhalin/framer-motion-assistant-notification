import { FC, useEffect, useRef, useState } from "react";

import Ball from "./Ball";
import {
  DELAY_AFTER_CLOSE,
  DELAY_BEFORE_CLOSE,
  DELAY_INITIAL,
  Service,
  SERVICES_AMOUNT,
} from "./config";

const BlobView: FC = () => {
  const [service, setService] = useState<Service | null>(null);
  const openTimerRef = useRef<number>();
  const closeTimerRef = useRef<number>();
  const activeService = useRef(0);

  const handleNotification = () => {
    clearTimeout(openTimerRef.current);
    setService(activeService.current);
    activeService.current =
      activeService.current + 1 > SERVICES_AMOUNT - 1
        ? 0
        : activeService.current + 1;

    closeTimerRef.current = setTimeout(handleClose, DELAY_BEFORE_CLOSE);
  };

  const handleClose = () => {
    clearTimeout(closeTimerRef.current);
    setService(null);
    openTimerRef.current = setTimeout(handleNotification, DELAY_AFTER_CLOSE);
  };

  const handleClick = () => {
    console.log({ service });
    if (service === null) {
      handleNotification();
    } else {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [service]);

  useEffect(() => {
    openTimerRef.current = setTimeout(handleNotification, DELAY_INITIAL);

    return () => clearTimeout(openTimerRef.current);
  }, []);

  return <Ball service={service} withTap className="size-60" />;
};

export default BlobView;
