import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9998 2H8.6998C6.7998 2 5.2998 3.5 5.2998 5.3C5.2998 7.1 6.7998 8.6 8.5998 8.6H11.9998V2Z"
        stroke="#fff"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M11.9999 8.69995H8.6999C6.8999 8.69995 5.3999 10.2 5.3999 12C5.3999 13.8 6.8999 15.3 8.6999 15.3H11.9999V8.69995Z"
        stroke="#fff"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M11.9999 15.3H8.6999C6.8999 15.3 5.3999 16.8 5.3999 18.6C5.3999 20.4 6.8999 21.9 8.6999 21.9C10.4999 21.9 11.9999 20.4 11.9999 18.6V15.3Z"
        stroke="#fff"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M12 2H15.3C17.1 2 18.6 3.5 18.6 5.3C18.6 7.1 17.1 8.6 15.3 8.6H12V2Z"
        stroke="#fff"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M15.3 8.69995C17.1 8.69995 18.6 10.2 18.6 12C18.6 13.8 17.1 15.3 15.3 15.3C13.5 15.3 12 13.8 12 12C12 10.2 13.5 8.69995 15.3 8.69995Z"
        stroke="#fff"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
}
const Figma = forwardRef(Root);
export default Figma;
