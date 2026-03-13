import "../styles/pages.css";
import EventCountdown from "../components/ui/EventCountdown";
import MapEmbed from "../components/ui/MapEmbed";
import AnimatedButton from "../components/ui/AnimatedButton";
import Logo from "../assets/images/sk8-logo.png";


const Home = () => {
    return (
        <div>
            <div className="container text-center">
                <div>
                    <div className="hero-logo p-4">
                        <img src={Logo} alt="Skate Church ATL logo" className="mx-auto" />
                    </div>
                    <h2>Brook Run Skate Park</h2>
                    <p id="address">4770 North Peachtree Road Dunwoody, GA 30338</p>
                    <p>First & third Friday of every month</p>
                    <EventCountdown />
                    <p>
                        We skate before & after!
                        <br />
                        (park closes at 11PM)
                    </p>

                    <div className="p-4">
                        <AnimatedButton
                            text="First Time Guest?"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdxj9sjJdmoUue1CN5IFxhFp4LHzoOfwoQUl7OAeWFGBQcCgA/viewform?usp=pp_url"
                            target="_blank"
                            rel="noreferrer"
                        />
                    </div>

                    <div className="map-wrap">
                        <MapEmbed
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.259571214587!2d-84.29908862350533!3d33.934451373201675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50a272d70cb4b%3A0x82c5756546cde937!2s4770%20N%20Peachtree%20Rd%2C%20Dunwoody%2C%20GA%2030338!5e0!3m2!1sen!2sus!4v1724289790921!5m2!1sen!2sus"
                            title="Brook Run Skate Park Map"
                            className="home-map"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;