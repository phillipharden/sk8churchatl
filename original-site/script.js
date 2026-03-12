import { useEffect, useState } from "react";
import "../styles/pages.css";

const Home = () => {
    const [nextEventText, setNextEventText] = useState("");
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    const getNextEventDate = () => {
        const now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth();

        const getFridaysForMonth = (y, m) => {
            const fridays = [];
            const date = new Date(y, m, 1);

            while (date.getMonth() === m) {
                if (date.getDay() === 5) {
                    fridays.push(new Date(date));
                }
                date.setDate(date.getDate() + 1);
            }

            return fridays;
        };

        let fridays = getFridaysForMonth(year, month);

        const firstFriday = new Date(fridays[0]);
        firstFriday.setHours(19, 0, 0, 0);

        const thirdFriday = new Date(fridays[2]);
        thirdFriday.setHours(19, 0, 0, 0);

        if (now < firstFriday) return firstFriday;
        if (now < thirdFriday) return thirdFriday;

        month += 1;
        if (month > 11) {
            month = 0;
            year += 1;
        }

        fridays = getFridaysForMonth(year, month);

        const nextFirstFriday = new Date(fridays[0]);
        nextFirstFriday.setHours(19, 0, 0, 0);

        return nextFirstFriday;
    };

    useEffect(() => {
        const updateCountdown = () => {
            const nextEvent = getNextEventDate();

            setNextEventText(
                nextEvent.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
            );

            const now = new Date();
            const diff = nextEvent.getTime() - now.getTime();

            if (diff <= 0) {
                setTimeLeft({
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00",
                });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="container">
                <div className="center-text">
                    <h2>Brook Run Skate Park</h2>
                    <p id="address">4770 North Peachtree Road Dunwoody, GA 30338</p>
                    <p>First & third Friday of every month</p>
                    <p>
                        Next sesh coming up on <span>{nextEventText}</span> at 7:00PM
                    </p>
                    <p>
                        We skate before & after!
                        <br />
                        (park closes at 11PM)
                    </p>
                    <a
                        id="new-here-link"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdxj9sjJdmoUue1CN5IFxhFp4LHzoOfwoQUl7OAeWFGBQcCgA/viewform?usp=pp_url"
                        target="_blank"
                        rel="noreferrer"
                    >
                        First Time Guest!?
                    </a>
                </div>

                <div className="countdown-container">
                    <div id="countdown">
                        <div className="time-box">
                            <span>{timeLeft.days}</span>
                            <span className="label">Days</span>
                        </div>
                        <div className="time-box">
                            <span>{timeLeft.hours}</span>
                            <span className="label">Hours</span>
                        </div>
                        <div className="time-box">
                            <span>{timeLeft.minutes}</span>
                            <span className="label">Minutes</span>
                        </div>
                        <div className="time-box">
                            <span>{timeLeft.seconds}</span>
                            <span className="label">Seconds</span>
                        </div>
                    </div>
                </div>

                <div className="map-responsive">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.259571214587!2d-84.29908862350533!3d33.934451373201675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50a272d70cb4b%3A0x82c5756546cde937!2s4770%20N%20Peachtree%20Rd%2C%20Dunwoody%2C%20GA%2030338!5e0!3m2!1sen!2sus!4v1724289790921!5m2!1sen!2sus"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Brook Run Skate Park Map"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;