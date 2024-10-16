import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Service, SERVICE_CONFIGS } from "./config";

const Ball: FC<{ service: Service | null }> = ({ service = null }) => {
  const selectedColors = SERVICE_CONFIGS[service ?? "default"].ball;

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-8 min-w-8"
    >
      <g filter="url(#filter0_ii_106_78)">
        <motion.rect
          width="40"
          height="40"
          rx="20"
          // fill="#AECDEF"
          // initial={{ fill: prevColors.background }}
          initial={false}
          animate={{ fill: selectedColors.background }}
        />
        <rect
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_radial_106_78)"
        />
        <rect
          width="40"
          height="40"
          rx="20"
          fill="url(#paint1_radial_106_78)"
        />
        <rect
          width="40"
          height="40"
          rx="20"
          fill="url(#paint2_radial_106_78)"
        />
        <rect
          width="40"
          height="40"
          rx="20"
          fill="url(#paint3_radial_106_78)"
          fill-opacity="0.3"
        />
        <rect
          width="40"
          height="40"
          rx="20"
          fill="url(#paint4_radial_106_78)"
          fill-opacity="0.05"
        />
        <rect
          width="40"
          height="40"
          rx="20"
          fill="url(#paint5_radial_106_78)"
          fill-opacity="0.1"
        />
        <AnimatePresence>
          {service === null ? null : (
            <motion.g
              initial={{ rotate: -8, scale: 0.6, opacity: 0 }}
              animate={{ rotate: 8, scale: 1, opacity: 1 }}
              exit={{ rotate: -8, scale: 0.6, opacity: 0 }}
              filter="url(#filter1_di_106_78)"
            >
              <g clip-path="url(#clip0_106_78)">
                <rect
                  x="9.00049"
                  y="9.00098"
                  width="21.9996"
                  height="21.9996"
                  rx="6.36479"
                  fill="url(#paint6_linear_106_78)"
                  fill-opacity="0.75"
                  shape-rendering="crispEdges"
                />
                {service === Service.GMAIL ? (
                  <>
                    <path
                      d="M24.2976 14.6826L20.1814 17.8949L15.9712 14.6826V14.6835L15.9763 14.6878V19.1859L20.134 22.4676L24.2976 19.3126V14.6826Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M25.3778 13.9014L24.2969 14.6827V19.3127L27.6982 16.7012V15.1281C27.6982 15.1281 27.2854 12.8813 25.3778 13.9014Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M24.2969 19.3136V25.3187H26.9038C26.9038 25.3187 27.6457 25.2423 27.699 24.3967V16.7021L24.2969 19.3136Z"
                      fill="#34A853"
                    />
                    <path
                      d="M15.9765 25.3232V19.186L15.9712 19.1816L15.9765 25.3232Z"
                      fill="#C5221F"
                    />
                    <path
                      d="M15.9711 14.6834L14.896 13.9063C12.9884 12.8862 12.5747 15.1322 12.5747 15.1322V16.7054L15.9711 19.1815V14.6834Z"
                      fill="#C5221F"
                    />
                    <path
                      d="M15.9712 14.6836V19.1817L15.9765 19.186V14.6879L15.9712 14.6836Z"
                      fill="#C5221F"
                    />
                    <path
                      d="M12.5747 16.707V24.4018C12.6273 25.2483 13.37 25.3238 13.37 25.3238H15.977L15.9711 19.1822L12.5747 16.707Z"
                      fill="#4285F4"
                    />
                  </>
                ) : null}
                {service === Service.DISCORD ? (
                  <path
                    d="M25.5653 15.0135C27.3723 17.6286 28.2647 20.5784 27.9311 23.9743C27.9297 23.9886 27.9221 24.0018 27.9101 24.0105C26.5417 24.9995 25.2159 25.5998 23.9087 25.9978C23.8985 26.0009 23.8876 26.0007 23.8776 25.9973C23.8675 25.994 23.8587 25.9876 23.8525 25.9791C23.5505 25.5655 23.2761 25.1295 23.0357 24.6715C23.0219 24.6446 23.0345 24.6121 23.0629 24.6015C23.4987 24.4398 23.9131 24.2461 24.3117 24.0168C24.3431 23.9987 24.3451 23.9544 24.3161 23.9331C24.2315 23.8713 24.1477 23.8063 24.0675 23.7414C24.0525 23.7294 24.0323 23.727 24.0153 23.7351C21.4275 24.9113 18.5927 24.9113 15.9743 23.7351C15.9573 23.7276 15.9371 23.7302 15.9225 23.742C15.8425 23.8069 15.7585 23.8713 15.6747 23.9331C15.6457 23.9544 15.6481 23.9987 15.6797 24.0168C16.0783 24.2418 16.4927 24.4398 16.9279 24.6023C16.9561 24.6129 16.9695 24.6446 16.9555 24.6715C16.7203 25.13 16.4459 25.5661 16.1383 25.9797C16.1249 25.9964 16.1029 26.0041 16.0821 25.9978C14.7811 25.5998 13.4553 24.9995 12.0869 24.0105C12.0755 24.0018 12.0673 23.988 12.0661 23.9737C11.7873 21.0363 12.3555 18.0621 14.4297 15.0129C14.4347 15.0048 14.4423 14.9985 14.4511 14.9948C15.4717 14.5337 16.5651 14.1945 17.7079 14.0008C17.7287 13.9977 17.7495 14.0071 17.7603 14.0252C17.9015 14.2713 18.0629 14.5869 18.1721 14.8448C19.3767 14.6637 20.6001 14.6637 21.8299 14.8448C21.9391 14.5924 22.0949 14.2713 22.2355 14.0252C22.2405 14.0163 22.2483 14.0091 22.2577 14.0047C22.2671 14.0003 22.2777 13.9989 22.2879 14.0008C23.4313 14.1951 24.5247 14.5343 25.5445 14.9948C25.5535 14.9985 25.5609 15.0048 25.5653 15.0135V15.0135ZM18.7845 20.5985C18.7971 19.7301 18.1539 19.0116 17.3465 19.0116C16.5457 19.0116 15.9087 19.7238 15.9087 20.5985C15.9087 21.4729 16.5583 22.1852 17.3465 22.1852C18.1475 22.1852 18.7845 21.4729 18.7845 20.5985V20.5985ZM24.1009 20.5985C24.1135 19.7301 23.4703 19.0116 22.6631 19.0116C21.8621 19.0116 21.2251 19.7238 21.2251 20.5985C21.2251 21.4729 21.8747 22.1852 22.6631 22.1852C23.4703 22.1852 24.1009 21.4729 24.1009 20.5985V20.5985Z"
                    fill="white"
                  />
                ) : null}
                {service === Service.YOUTUBE ? (
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.2514 15.3176C26.9411 15.4945 27.4833 16.0109 27.6666 16.6655C28 17.8533 28 20.3333 28 20.3333C28 20.3333 28 22.8133 27.6666 24.0012C27.4808 24.6582 26.9386 25.1745 26.2514 25.3491C25.0041 25.6667 20 25.6667 20 25.6667C20 25.6667 14.9984 25.6667 13.7486 25.3491C13.0589 25.1721 12.5167 24.6558 12.3334 24.0012C12 22.8133 12 20.3333 12 20.3333C12 20.3333 12 17.8533 12.3334 16.6655C12.5192 16.0085 13.0614 15.4921 13.7486 15.3176C14.9984 15 20 15 20 15C20 15 25.0041 15 26.2514 15.3176ZM22.5579 20.3329L18.4014 22.619V18.0469L22.5579 20.3329Z"
                    fill="white"
                  />
                ) : null}
                {service === Service.TIKTOK ? (
                  <>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.8486 17.9979C23.7735 18.656 24.8812 19.0076 26.0161 19.0034V16.7523C25.793 16.7529 25.5705 16.729 25.3526 16.681V18.4744C24.2152 18.4764 23.1059 18.1207 22.1813 17.4576V22.0874C22.1785 22.8471 21.9704 23.5919 21.5789 24.2428C21.1875 24.8937 20.6274 25.4265 19.9579 25.7845C19.2885 26.1426 18.5347 26.3127 17.7765 26.2768C17.0183 26.2409 16.284 26.0002 15.6514 25.5804C16.2365 26.173 16.9842 26.5785 17.7998 26.7454C18.6153 26.9124 19.462 26.8334 20.2327 26.5185C21.0033 26.2035 21.6633 25.6667 22.129 24.9761C22.5946 24.2855 22.8451 23.4721 22.8486 22.6389V17.9979ZM23.6695 15.7017C23.1991 15.1914 22.9105 14.5398 22.8486 13.8483V13.5557H22.2188C22.2967 13.9952 22.466 14.4135 22.716 14.7832C22.9659 15.1529 23.2908 15.4659 23.6695 15.7017V15.7017ZM17.1095 23.7983C16.8913 23.5126 16.7575 23.1713 16.7235 22.8133C16.6895 22.4553 16.7565 22.0949 16.9171 21.7731C17.0776 21.4514 17.3252 21.1812 17.6316 20.9933C17.938 20.8055 18.2909 20.7075 18.6502 20.7105C18.8486 20.7104 19.0458 20.7408 19.235 20.8005V18.4744C19.0138 18.445 18.7908 18.4325 18.5677 18.4368V20.2452C18.1071 20.0995 17.6085 20.1326 17.1711 20.3381C16.7338 20.5435 16.3897 20.9062 16.2074 21.354C16.025 21.8017 16.0177 22.3018 16.187 22.7547C16.3562 23.2076 16.6896 23.5802 17.1208 23.7983H17.1095Z"
                      fill="#EE1D52"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.1807 17.4426C23.1052 18.1057 24.2145 18.4614 25.352 18.4594V16.666C24.7039 16.5288 24.1152 16.1916 23.6689 15.7017C23.2902 15.4659 22.9653 15.1529 22.7154 14.7832C22.4654 14.4135 22.296 13.9952 22.2182 13.5557H20.5613V22.6389C20.5598 23.041 20.4325 23.4325 20.1973 23.7584C19.9621 24.0844 19.6308 24.3284 19.25 24.4563C18.8692 24.5842 18.4579 24.5895 18.0739 24.4715C17.6899 24.3535 17.3524 24.118 17.1089 23.7983C16.723 23.6034 16.414 23.284 16.2316 22.8918C16.0493 22.4995 16.0043 22.0573 16.104 21.6363C16.2036 21.2153 16.442 20.8402 16.7808 20.5715C17.1195 20.3028 17.5388 20.1561 17.9711 20.1552C18.1694 20.1558 18.3665 20.1862 18.5559 20.2452V18.4368C17.7378 18.4565 16.9432 18.7148 16.2697 19.1801C15.5963 19.6453 15.0732 20.2973 14.7647 21.0559C14.4561 21.8145 14.3757 22.6467 14.5331 23.4505C14.6905 24.2542 15.0789 24.9945 15.6507 25.5804C16.2835 26.0032 17.019 26.2463 17.7789 26.2839C18.5388 26.3214 19.2946 26.1519 19.9659 25.7934C20.6371 25.435 21.1987 24.901 21.5907 24.2484C21.9827 23.5957 22.1905 22.8489 22.1919 22.0874L22.1807 17.4426Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.3524 16.6656V16.1816C24.7573 16.1841 24.1737 16.0176 23.6693 15.7013C24.1146 16.1926 24.7037 16.5301 25.3524 16.6656V16.6656ZM22.2187 13.5553C22.2187 13.469 22.1924 13.3789 22.1812 13.2926V13H19.8946V22.087C19.8926 22.5958 19.689 23.0831 19.3285 23.4418C18.9679 23.8006 18.4799 24.0015 17.9716 24.0005C17.6722 24.002 17.3768 23.9326 17.1094 23.7979C17.3529 24.1176 17.6903 24.3531 18.0743 24.4711C18.4584 24.5891 18.8696 24.5838 19.2505 24.4559C19.6313 24.328 19.9626 24.084 20.1978 23.758C20.433 23.4321 20.5603 23.0406 20.5618 22.6385V13.5553H22.2187ZM18.5563 18.4327V17.9187C17.6154 17.7908 16.6589 17.9856 15.8428 18.4714C15.0266 18.9572 14.3989 19.7053 14.062 20.5939C13.7251 21.4825 13.6988 22.459 13.9873 23.3645C14.2759 24.27 14.8624 25.0509 15.6512 25.58C15.0837 24.9928 14.6994 24.2528 14.5452 23.4505C14.391 22.6482 14.4736 21.8183 14.7829 21.0623C15.0923 20.3062 15.6149 19.6567 16.287 19.193C16.9591 18.7294 17.7516 18.4717 18.5676 18.4515L18.5563 18.4327Z"
                      fill="#69C9D0"
                    />
                  </>
                ) : null}
                {service === Service.SLACK ? (
                  <>
                    <path
                      d="M15.9526 21.8526C15.9526 22.6665 15.2953 23.3243 14.4821 23.3243C13.669 23.3243 13.0117 22.6665 13.0117 21.8526C13.0117 21.0387 13.669 20.3809 14.4821 20.3809H15.9526V21.8526ZM16.6878 21.8526C16.6878 21.0387 17.345 20.3809 18.1582 20.3809C18.9714 20.3809 19.6286 21.0387 19.6286 21.8526V25.5319C19.6286 26.3458 18.9714 27.0037 18.1582 27.0037C17.345 27.0037 16.6878 26.3458 16.6878 25.5319V21.8526Z"
                      fill="#E01E5A"
                    />
                    <path
                      d="M18.1576 15.9435C17.3444 15.9435 16.6872 15.2856 16.6872 14.4717C16.6872 13.6578 17.3444 13 18.1576 13C18.9708 13 19.6281 13.6578 19.6281 14.4717V15.9435H18.1576ZM18.1576 16.6905C18.9708 16.6905 19.6281 17.3483 19.6281 18.1622C19.6281 18.9761 18.9708 19.6339 18.1576 19.6339H14.4704C13.6572 19.6339 13 18.9761 13 18.1622C13 17.3483 13.6572 16.6905 14.4704 16.6905H18.1576Z"
                      fill="#36C5F0"
                    />
                    <path
                      d="M24.0511 18.1622C24.0511 17.3483 24.7083 16.6905 25.5215 16.6905C26.3347 16.6905 26.9919 17.3483 26.9919 18.1622C26.9919 18.9761 26.3347 19.6339 25.5215 19.6339H24.0511V18.1622ZM23.3159 18.1622C23.3159 18.9761 22.6586 19.6339 21.8454 19.6339C21.0322 19.6339 20.375 18.9761 20.375 18.1622V14.4717C20.375 13.6578 21.0322 13 21.8454 13C22.6586 13 23.3159 13.6578 23.3159 14.4717V18.1622V18.1622Z"
                      fill="#2EB67D"
                    />
                    <path
                      d="M21.8454 24.0602C22.6586 24.0602 23.3159 24.718 23.3159 25.5319C23.3159 26.3458 22.6586 27.0037 21.8454 27.0037C21.0322 27.0037 20.375 26.3458 20.375 25.5319V24.0602H21.8454ZM21.8454 23.3243C21.0322 23.3243 20.375 22.6665 20.375 21.8526C20.375 21.0387 21.0322 20.3809 21.8454 20.3809H25.5326C26.3458 20.3809 27.0031 21.0387 27.0031 21.8526C27.0031 22.6665 26.3458 23.3243 25.5326 23.3243H21.8454Z"
                      fill="#ECB22E"
                    />
                  </>
                ) : null}
              </g>
            </motion.g>
          )}
        </AnimatePresence>
        <path
          d="M32 10.1036C32 13.4745 26.6274 11.3243 20 11.3243C13.3726 11.3243 8 13.4745 8 10.1036C8 6.73267 13.3726 4 20 4C26.6274 4 32 6.73267 32 10.1036Z"
          fill="url(#paint7_linear_106_78)"
          fill-opacity="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_106_78"
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_106_78"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_106_78"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.5"
            operator="erode"
            in="SourceAlpha"
            result="effect2_innerShadow_106_78"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_106_78"
            result="effect2_innerShadow_106_78"
          />
        </filter>
        <filter
          id="filter1_di_106_78"
          x="6.87889"
          y="7.94018"
          width="26.2427"
          height="26.2432"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.0608" />
          <feGaussianBlur stdDeviation="1.0608" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_78"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_106_78"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.5304" />
          <feGaussianBlur stdDeviation="0.5304" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_106_78"
          />
        </filter>
        <radialGradient
          id="paint0_radial_106_78"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(22.5 25.5) rotate(74.4759) scale(18.6815 25.5633)"
        >
          <motion.stop
            offset="0.135"
            // stop-color={selectedColors.radial1}
            // initial={{ stopColor: prevColors.radial1 }}
            initial={false}
            animate={{ stopColor: selectedColors.radial1 }}
          />
          <motion.stop
            offset="1"
            // stop-color={selectedColors.radial1}
            // initial={{ stopColor: prevColors.radial1 }}
            initial={false}
            animate={{ stopColor: selectedColors.radial1 }}
            stop-opacity="0.2"
          />
        </radialGradient>
        <radialGradient
          id="paint1_radial_106_78"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(30.5 16.5) rotate(55.8403) scale(16.9189 9.73591)"
        >
          <motion.stop
            // stop-color="#747BED"
            // initial={{ stopColor: prevColors.radial2 }}
            initial={false}
            animate={{ stopColor: selectedColors.radial2 }}
          />
          <motion.stop
            offset="1"
            // stop-color="#747BED"
            // initial={{ stopColor: prevColors.radial2 }}
            initial={false}
            animate={{ stopColor: selectedColors.radial2 }}
            stop-opacity="0"
          />
        </radialGradient>
        <radialGradient
          id="paint2_radial_106_78"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(30.5 25.5) rotate(107.745) scale(13.1244 4.93259)"
        >
          <motion.stop
            // stop-color="#747BED"
            // initial={{ stopColor: prevColors.radial2 }}
            initial={false}
            animate={{ stopColor: selectedColors.radial2 }}
          />
          <motion.stop
            offset="1"
            // stop-color="#747BED"
            // initial={{ stopColor: prevColors.radial2 }}
            initial={false}
            animate={{ stopColor: selectedColors.radial2 }}
            stop-opacity="0"
          />
        </radialGradient>
        <radialGradient
          id="paint3_radial_106_78"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20 20) rotate(90) scale(20)"
        >
          <motion.stop
            offset="0.746599"
            stop-color="#A0ACE2"
            initial={false}
            animate={{ stopColor: selectedColors.border }}
            stop-opacity="0"
          />
          <motion.stop
            offset="1"
            stop-color="#A0ACE2"
            initial={false}
            animate={{ stopColor: selectedColors.border }}
          />
        </radialGradient>
        <radialGradient
          id="paint4_radial_106_78"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20 11.5) rotate(90) scale(17.5)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint5_radial_106_78"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20) rotate(90) scale(30)"
        >
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="0.5" stop-color="white" stop-opacity="0" />
          <stop offset="0.99" stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint6_linear_106_78"
          x1="20.0003"
          y1="9.00098"
          x2="20.0003"
          y2="31.0006"
          gradientUnits="userSpaceOnUse"
        >
          <motion.stop
            // stop-color="white"
            initial={false}
            animate={{
              stopColor: selectedColors.base,
              transition: { bounce: 0 },
            }}
          />
          <motion.stop
            offset="1"
            // stop-color="white"
            initial={false}
            animate={{
              stopColor: selectedColors.base,
              transition: { bounce: 0 },
            }}
            stop-opacity="0.75"
          />
        </linearGradient>
        <linearGradient
          id="paint7_linear_106_78"
          x1="20"
          y1="4"
          x2="20"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.1" />
        </linearGradient>
        <clipPath id="clip0_106_78">
          <rect
            x="9.00049"
            y="9.00098"
            width="21.9996"
            height="21.9996"
            rx="6.36479"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Ball;
