import React from "react";
import styles from "./CompoundLayout.module.scss";

interface LayoutContextType {
  headerHeight: number | null;
  footerHeight: number | null;
  setHeaderHeight: (height: number) => void;
  setFooterHeight: (height: number) => void;
}

const Header: React.FC = ({ children }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const context = useLayoutContext();
  React.useEffect(() => {
    if (ref.current) {
      context?.setHeaderHeight(ref.current.getBoundingClientRect().height);
    }
  }, [context]);

  return (
    <div className={styles.HeaderContainer} ref={ref}>
      {children}
    </div>
  );
};
const Body: React.FC = ({ children }) => {
  const context = useLayoutContext();
  return (
    <div
      className={styles.BodyContainer}
      style={{
        marginTop: context?.headerHeight ?? 0,
        marginBottom: context?.footerHeight ?? 0,
      }}
    >
      {children}
    </div>
  );
};
const Footer: React.FC = ({ children }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const context = useLayoutContext();
  React.useEffect(() => {
    if (ref.current) {
      context?.setFooterHeight(ref.current.getBoundingClientRect().height);
    }
  }, [context]);
  return (
    <div className={styles.FooterContainer} ref={ref}>
      {children}
    </div>
  );
};

const LayoutContext = React.createContext<LayoutContextType | null>(null);

interface CompoundLayoutComposiiton {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
}

function useLayoutContext() {
  return React.useContext(LayoutContext);
}

const CompoundLayout: React.FC & CompoundLayoutComposiiton = ({ children }) => {
  const [headerHeight, setHeaderHeight] = React.useState<number | null>(null);
  const [footerHeight, setFooterHeight] = React.useState<number | null>(null);

  const value: LayoutContextType = {
    headerHeight,
    footerHeight,
    setHeaderHeight,
    setFooterHeight,
  };
  return (
    <LayoutContext.Provider value={value}>
      <div className={styles.LayoutConainer}>{children}</div>
    </LayoutContext.Provider>
  );
};

CompoundLayout.Header = Header;
CompoundLayout.Body = Body;
CompoundLayout.Footer = Footer;

export default CompoundLayout;
