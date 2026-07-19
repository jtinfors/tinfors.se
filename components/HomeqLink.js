export default function HomeqLink({ href, className, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    let navigated = false;
    const navigate = () => {
      if (navigated) return;
      navigated = true;
      window.location.href = href;
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18318655303/L4wXCODNn9IcEMf-gZ9E",
        event_callback: navigate,
      });
    } else {
      navigate();
    }

    setTimeout(navigate, 500);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
