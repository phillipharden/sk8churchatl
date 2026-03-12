import { useEffect, useState } from "react";
import { getNextSkateEvent, formatEventDate } from "./getNextSkateEvent";

const EventCountdown = () => {
    const [eventDateText, setEventDateText] = useState("");
    const [countdown, setCountdown] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const updateCountdown = () => {
            const nextEvent = getNextSkateEvent();
            setEventDateText(formatEventDate(nextEvent));

            const now = new Date();
            const diff = nextEvent.getTime() - now.getTime();

            if (diff <= 0) {
                setCountdown({
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

            setCountdown({
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
        <>
            <p>
                Next sesh coming up on <span>{eventDateText}</span> at 7:00PM
            </p>

            <div className="countdown-container">
                <div id="countdown">
                    <div className="time-box">
                        <span>{countdown.days}</span>
                        <span className="label">Days</span>
                    </div>

                    <div className="time-box">
                        <span>{countdown.hours}</span>
                        <span className="label">Hours</span>
                    </div>

                    <div className="time-box">
                        <span>{countdown.minutes}</span>
                        <span className="label">Minutes</span>
                    </div>

                    <div className="time-box">
                        <span>{countdown.seconds}</span>
                        <span className="label">Seconds</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventCountdown;