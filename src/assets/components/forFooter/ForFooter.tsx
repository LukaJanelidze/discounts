import "./ForFooter.css";

// Define types for props
interface ForFooterProps {
  title: string;
  subText: string;
  id: number;
  chosenSection: number | null;
  setChosenSection: (id: number | null) => void;
  isMobile: boolean; // Add isMobile prop
}

const ForFooter: React.FC<ForFooterProps> = (props) => {
  const { title, subText, id, chosenSection, setChosenSection, isMobile } = props;

  const toggleDropdown = (id: number) => {
    if (id === chosenSection) {
      setChosenSection(null);
    } else {
      setChosenSection(id);
    }
  };

  return (
    <div className="footer-sections-container">
      {isMobile ? (
        <>
          {/* Only clicking on the title section should toggle the dropdown on mobile */}
          <div
            className="footer-sections-title-section"
            onClick={() => toggleDropdown(id)}
          >
            <p className="footer-sections-text-sections">{title}</p>
            <span className={`arrow ${chosenSection === id ? "open" : ""}`}></span>
          </div>

          {/* Dropdown only for mobile */}
          {chosenSection === id && (
            <div>
              <p className="footer-sub-text-styles">{subText}</p>
            </div>
          )}
        </>
      ) : (
        <>
          {/* No dropdown on larger screens */}
          <div className="footer-sections-title-section">
            <p className="footer-sections-text-sections">{title}</p>
          </div>
          <p className="footer-sub-text-styles">{subText}</p>
        </>
      )}
      <hr className="footer-sections-lines" />
    </div>
  );
};

export default ForFooter;
