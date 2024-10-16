import { FC } from "react";
import { motion, MotionProps } from "framer-motion";

const AppIcon: FC<MotionProps> = (props) => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-5 rounded-md border border-[#7499FA]/30"
    {...props}
  >
    <path fill="#fff" d="M0 0h32v32H0z" />
    <path
      d="m22.05 8.52-5.99 4.68-6.12-4.68v6.55L16 19.85l6.05-4.6V8.53Z"
      fill="#EA4335"
    />
    <path
      d="m23.62 7.39-1.57 1.13v6.74l4.95-3.8V9.17s-.6-3.27-3.38-1.78Z"
      fill="#FBBC05"
    />
    <path
      d="M22.05 15.26v8.73h3.8s1.07-.1 1.15-1.34v-11.2l-4.95 3.8Z"
      fill="#34A853"
    />
    <path
      d="M9.95 24v-8.93h-.01V24ZM9.94 8.52 8.38 7.4C5.6 5.91 5 9.18 5 9.18v2.28l4.94 3.6V8.53ZM9.94 8.52v6.55-6.54Z"
      fill="#C5221F"
    />
    <path
      d="M5 11.47v11.19A1.35 1.35 0 0 0 6.16 24h3.79l-.01-8.93L5 11.47Z"
      fill="#4285F4"
    />
  </motion.svg>
);

export default AppIcon;
