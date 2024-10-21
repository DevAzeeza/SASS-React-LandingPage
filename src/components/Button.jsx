import clsx from "clsx";
import Marker from "./Marker";
const Button = ({ icon, children, href, onClick, markerFill }) => {
  const Inner = () => (
    <>
      <span
        className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl 
         inner-before group-hover:before:opacity-100 overflow-hidden"
      >
        <span>
          <Marker markerfill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span>{children}</span>
      </span>
    </>
  );

  return href ? (
    <a
      className={clsx("relative, p-0.5 g5 rounded-2xl shadow-500 group")}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx("relative, p-0.5 g5 rounded-2xl shadow-500 group")}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};
export default Button;
