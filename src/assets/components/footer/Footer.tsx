import ForFooterComponent from "./../forFooter/ForFooter";
import { Fragment, useState, useEffect } from "react";
import "./Footer.css";

export default function Footer() {
  const [chosenSection, setChosenSection] = useState<number | null>(null); // Chosen section state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Mobile state

  const footerArr = [
    {
      title: "დაგვიკავშირდით",
      subText: "example@gmail.com",
      id: 1,
    },
    {
      title: "ჩვენს შესახებ",
      subText: "ჩვენ ვაერთიანებთ ფასდაკლებებს ყველა სახის მაღაზიიდან და ვცდილობთ მოგაწოდოთ ინფორმაცია ამა თუ იმ პროდუქტის ფასდაკლებებზე.",
      id: 2,
    },
  ];

  // Effect to listen for window resize and update mobile/desktop state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top-box">
          <h1 className="footer-top-title">სახელი</h1>
          <hr className="footer-top-line" />
        </div>
      </div>
      
      <div className="footer-bottom">
      {footerArr.map((item) => (
        <Fragment key={item.id}>
          <ForFooterComponent
            title={item.title}
            subText={item.subText}
            id={item.id}
            chosenSection={chosenSection}
            setChosenSection={setChosenSection}
            isMobile={isMobile}
          />
        </Fragment>
      ))}
      </div>
    </footer>
  );
}
