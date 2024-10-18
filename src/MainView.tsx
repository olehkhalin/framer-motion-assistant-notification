import { FC, useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion } from "framer-motion";

import AppIcon from "./AppIcon";
import Ball from "./Ball";
import CloseIcon from "./CloseIcon";
import {
  COMAPNY_NAMES,
  DELAY_AFTER_CLOSE,
  DELAY_BEFORE_CLOSE,
  DELAY_INITIAL,
  Service,
  SERVICE_CONFIGS,
  SERVICES_AMOUNT,
} from "./config";
import { randomFromArray } from "./helpers";
import background from "./phone-5.webp";

const MainView: FC = () => {
  const [opened, setOpened] = useState(false);
  const [ref, bounds] = useMeasure();
  const [service, setService] = useState<Service | null>(null);
  const [values, setValues] = useState<{
    type: "income" | "outcome";
    value: number;
    company: string;
  }>({
    type: "outcome",
    value: -124.89,
    company: "Acme Inc.",
  });
  const cardColors = SERVICE_CONFIGS[service ?? "default"].card;
  const openTimerRef = useRef<number>();
  const closeTimerRef = useRef<number>();
  const activeService = useRef(0);

  const handleNotification = () => {
    clearTimeout(openTimerRef.current);
    setOpened(true);
    setService(activeService.current);
    activeService.current =
      activeService.current + 1 > SERVICES_AMOUNT - 1
        ? 0
        : activeService.current + 1;
    setValues({
      type: randomFromArray(["income", "outcome"]) as "income" | "outcome",
      value: +(Math.random() * 4_200).toFixed(2),
      company: randomFromArray(COMAPNY_NAMES),
    });

    closeTimerRef.current = setTimeout(handleClose, DELAY_BEFORE_CLOSE);
  };

  const handleClose = () => {
    clearTimeout(closeTimerRef.current);
    setService(null);
    setOpened(false);
    openTimerRef.current = setTimeout(handleNotification, DELAY_AFTER_CLOSE);
  };

  const handleClick = () => {
    if (!opened) {
      handleNotification();
    }
  };

  useEffect(() => {
    openTimerRef.current = setTimeout(handleNotification, DELAY_INITIAL);

    return () => clearTimeout(openTimerRef.current);
  }, []);

  return (
    <>
      <img
        src={background}
        alt="Phone Bg"
        className="absolute bottom-[10vh] left-1/2 z-[5] w-[780px] translate-x-[calc(-50%-2px)]"
      />

      <motion.div
        className="absolute bottom-[calc(10vh+320px)] z-[5] w-[400px] overflow-hidden rounded-[1.25rem] border"
        initial={false}
        animate={{
          backgroundColor: cardColors.background,
          borderColor: `${cardColors.border}4d`,
        }}
        onClick={handleClick}
        whileTap={{
          scale: 0.98,
          transition: { type: "spring", duration: 0.3, bounce: 0.2 },
        }}
        onPan={(e, pointInfo) => {
          if (pointInfo.offset.y > 40 && opened) {
            console.log("Handle close");
            handleClose();
          }
        }}
      >
        {/* Background blur */}
        <motion.div
          className="absolute right-[-5%] top-1/2 h-[208%] w-[63%] -translate-y-1/2 rotate-[37deg] rounded-full blur-[52px]"
          initial={false}
          animate={{
            opacity: opened ? 1 : 0.1,
            backgroundColor: cardColors.blur1,
          }}
        />
        <motion.div
          className="absolute left-[10%] top-1/2 h-[175%] w-[63%] -translate-y-1/2 rounded-full blur-[30px]"
          initial={false}
          animate={{
            opacity: opened ? 1 : 0.2,
            backgroundColor: cardColors.blur2,
          }}
        />
        <AnimatePresence>
          {cardColors.blur3 ? (
            <motion.div
              className="absolute left-[-10%] top-[32%] h-[148%] w-[57%] rotate-[15deg] rounded-full blur-[30px]"
              style={{ backgroundColor: cardColors.blur3 }}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
            />
          ) : null}
        </AnimatePresence>
        <AnimatePresence>
          {cardColors.blur4 ? (
            <motion.div
              className="absolute left-[17.5%] top-[-54%] h-[112%] w-[43%] rotate-[-16deg] rounded-full blur-[36px]"
              style={{ backgroundColor: cardColors.blur4 }}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
            />
          ) : null}
        </AnimatePresence>

        {/* Content */}
        <motion.div
          className="relative z-[5] font-bold"
          animate={{ height: bounds.height }}
        >
          <div ref={ref} className="flex gap-2 px-3 py-2.5">
            <Ball service={service} />

            <AnimatePresence initial={false} mode="popLayout">
              {opened ? (
                <motion.div
                  key="opened"
                  initial={{
                    y: 30,
                    opacity: 0,
                    filter: "blur(2px)",
                    color: "#596C91",
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    color: cardColors.foreground1,
                  }}
                  exit={{
                    y: 30,
                    opacity: 0,
                    filter: "blur(2px)",
                    color: "#596C91",
                  }}
                  className="flex w-full flex-col"
                >
                  <div className="flex items-center gap-1">
                    New Invoice from{" "}
                    <AppIcon
                      service={service ?? Service.GMAIL}
                      initial={{
                        rotate: 30,
                        scale: 0.8,
                      }}
                      animate={{
                        rotate: -8,
                        scale: 1,
                        borderColor: `${cardColors.border}4d`,
                      }}
                      exit={{
                        rotate: 30,
                        scale: 0.8,
                      }}
                    />
                    {SERVICE_CONFIGS[service ?? "default"].name}
                  </div>
                  <div>
                    {values.type === "income" ? "Income" : "Pay"}{" "}
                    <motion.span
                      initial={false}
                      animate={{ color: cardColors.foreground2 }}
                    >
                      {values.type === "income" ? "+" : "-"}
                      {values.value} $
                    </motion.span>{" "}
                    {values.type === "income" ? "from" : "to"}{" "}
                    <motion.span
                      initial={false}
                      animate={{ color: cardColors.foreground2 }}
                    >
                      {values.company}
                    </motion.span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="closed"
                  initial={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                  className="flex h-8 w-full items-center text-[#80828C]"
                >
                  Ask anything...
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex h-8 items-center">
              <CloseIcon
                animate={{
                  rotate: opened ? 135 : 0,
                  color: opened ? cardColors.icon : "#727686",
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MainView;
