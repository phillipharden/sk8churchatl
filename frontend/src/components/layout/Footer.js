import "../../styles/layout.css";
import AnimatedButton from "../ui/AnimatedButton";
import FooterLogo from "../../assets/images/unrthdx-logo.png";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="container footer-container">
               <div className="p-4">
                    <AnimatedButton
                        text="Partner with us"
                        href="https://www.paypal.com/donate/?hosted_button_id=Y32B38CV24PMY"
                        target="_blank"
                        rel="noreferrer"
                        classes="animated-btn"
                    />
               </div>
              
                <div>
                    <img src={FooterLogo} alt="Unthdx Logo" className="footer-logo" />
                </div>
                <div>
                    <p>&copy; Unrthdx Mvmnt {year}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
