import React from "react";
import "./styles/styles.scss";

const Navbar = () => {
  return (
    <div className="bg-white nav__padding">
      <div className="flex flex-direction-row gap-1 align-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.9199 0.600098H13.6027V8.49222C13.5371 8.50339 13.4719 8.51549 13.407 8.52851L10.6009 1.15215L8.43507 1.97608L11.2459 9.36476C11.195 9.39531 11.1445 9.4265 11.0944 9.45833L5.85211 3.53891L4.11737 5.0752L9.37593 11.013L9.35278 11.0427L2.4057 7.21418L1.28729 9.24362L8.26069 13.0866C8.24419 13.1364 8.22826 13.1865 8.21288 13.2368L0.328856 12.1064L0 14.4002L7.12482 15.4217L0.0216616 16.5839L0.395817 18.8707L8.32258 17.5738L8.32721 17.5865L1.30101 21.4791L2.42396 23.506L9.47938 19.5972C9.50493 19.6282 9.53074 19.6589 9.55682 19.6894L4.33767 25.8407L6.10461 27.3399L11.3081 21.2069L8.46512 28.7308L10.6327 29.5498L13.4966 21.9707C13.5319 21.9773 13.5672 21.9836 13.6027 21.9897V30.092H15.9199V21.9896C15.9602 21.9828 16.0005 21.9755 16.0406 21.9679L18.9215 29.5407L21.0872 28.7168L18.2109 21.1559C18.2433 21.137 18.2755 21.1178 18.3075 21.0984L23.6702 27.1537L25.4049 25.6174L20.0721 19.5958L27.1166 23.478L28.235 21.4485L21.2005 17.5718C21.2156 17.5301 21.2303 17.4882 21.2447 17.446L29.1934 18.5856L29.5222 16.2919L22.3991 15.2706L29.5007 14.1087L29.1266 11.8219L21.2686 13.1076L21.2569 13.0723L28.2214 9.21388L27.0984 7.18694L20.1603 11.0307C20.1255 10.9862 20.0902 10.9421 20.0544 10.8984L25.1847 4.85168L23.4178 3.35253L18.3031 9.38082L18.263 9.35675L21.0574 1.9618L18.8897 1.14273L16.1 8.52545C16.0403 8.51361 15.9802 8.50253 15.9199 8.49225V0.600098Z"
            fill="#6A45FF"
          />
        </svg>
        <h1 className="title">LOGO</h1>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
      >
        <rect width="20" height="2" fill="#6A45FF" />
        <rect y="7" width="20" height="2" fill="#6A45FF" />
        <rect y="14" width="20" height="2" fill="#6A45FF" />
      </svg>
    </div>
  );
};

export default Navbar;