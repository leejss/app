import React from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  header: React.ReactNode;
  footer?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ footer, header, children }) => {
  const [marginTop, setMarginTop] = React.useState<number>();
  const [marginBottom, setMarginBottom] = React.useState<number>();
  const headerRef = React.useRef<HTMLDivElement | null>(null);
  const footerRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const headerRect = headerRef.current?.getBoundingClientRect();
    const footerRect = footerRef.current?.getBoundingClientRect();
    setMarginTop(headerRect?.height);
    setMarginBottom(footerRect?.height);
  }, []);

  return (
    <div className={styles.LayoutContainer}>
      <div className={styles.Header} ref={headerRef}>
        {header}
      </div>
      <div
        className={styles.Body}
        style={{
          marginTop,
          marginBottom,
        }}
      >
        {children}
      </div>
      <div className={styles.Footer} ref={footerRef}>
        {footer}
      </div>
    </div>
  );
};

export default Layout;
