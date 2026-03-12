import "../../styles/layout.css";
import FooterLogo from "../../assets/images/unrthdx-logo.png";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="container footer-container">
              
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
