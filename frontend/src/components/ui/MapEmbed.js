import "../../styles/ui.css";

const MapEmbed = ({ src, title = "Location Map" }) => {
    return (
        <div className="map-responsive">
            <iframe
                src={src}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={title}
            />
        </div>
    );
};

export default MapEmbed;