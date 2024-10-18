import { FC } from "react";
import { MotionConfig } from "framer-motion";

import MainView from "./MainView";
// import BlobView from "./BlobView";

const App: FC = () => {
  return (
    <MotionConfig transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:14px_14px] bg-center bg-repeat" />
      <div className="absolute inset-0 bg-[radial-gradient(closest-corner,#E8E9F300,_#E8E9F3_100%)] bg-contain" />

      <MainView />
      {/* <BlobView /> */}
    </MotionConfig>
  );
};

export default App;
