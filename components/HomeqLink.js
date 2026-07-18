import { sendGTMEvent } from "@next/third-parties/google";

export default function HomeqLink({ href, className, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    sendGTMEvent({ event: "homeq_click" });
    setTimeout(() => {
      window.location.href = href;
    }, 150);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
