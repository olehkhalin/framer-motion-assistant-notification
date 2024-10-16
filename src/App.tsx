import { FC, useState } from "react";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

import AppIcon from "./AppIcon";
import Ball from "./Ball";
import CloseIcon from "./CloseIcon";
import { COMAPNY_NAMES, Service, SERVICE_CONFIGS } from "./config";
import { randomEnum, randomFromArray } from "./helpers";

const App: FC = () => {
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

  const handleOpen = () => {
    setOpened((open) => {
      if (!open) {
        setService(randomEnum(Service));
        setValues({
          type: randomFromArray(["income", "outcome"]) as "income" | "outcome",
          value: +(Math.random() * 4_200).toFixed(2),
          company: randomFromArray(COMAPNY_NAMES),
        });
      } else {
        setService(null);
      }
      return !open;
    });
  };

  return (
    <MotionConfig transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:14px_14px] bg-center bg-repeat" />
      <div className="absolute inset-0 bg-[radial-gradient(closest-corner,#E8E9F300,_#E8E9F3_100%)] bg-contain" />

      <motion.div
        onClick={handleOpen}
        className="relative z-[5] w-[400px] overflow-hidden rounded-[1.25rem] border"
        initial={false}
        animate={{
          backgroundColor: cardColors.background,
          borderColor: `${cardColors.border}4d`,
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
                    y: 20,
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
                    y: 20,
                    opacity: 0,
                    filter: "blur(2px)",
                    color: "#596C91",
                  }}
                  className="flex w-full flex-col"
                >
                  <div className="flex items-center gap-1">
                    New Invoice from{" "}
                    <AppIcon
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
                  initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
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
    </MotionConfig>
  );
};

export default App;
