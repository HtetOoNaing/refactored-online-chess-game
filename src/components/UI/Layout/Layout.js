import "./Layout.scss";

const Layout = ({ className, ribbonText, children }) => {
  return (
    <div className={`Layout ${className}`}>
      <div className="u-container">
        <div className="u-ribbon">{ribbonText}</div>
        {children}
      </div>
    </div>
  );
};

export default Layout;