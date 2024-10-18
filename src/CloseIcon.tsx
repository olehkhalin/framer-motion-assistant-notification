import { FC } from "react";
import { motion, MotionProps } from "framer-motion";

const CloseIcon: FC<MotionProps> = (props) => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.65c.75 0 1.36.6 1.36 1.35v5.65H19a1.35 1.35 0 1 1 0 2.7h-5.64V19a1.35 1.35 0 1 1-2.71 0v-5.64H5a1.35 1.35 0 0 1 0-2.71h5.65V5c0-.75.6-1.35 1.35-1.35Z"
    />
  </motion.svg>
);

export default CloseIcon;
