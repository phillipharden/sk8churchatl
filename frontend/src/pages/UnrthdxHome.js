import "../styles/pages.css";
import EventCountdown from "../components/ui/EventCountdown";
import MapEmbed from "../components/ui/MapEmbed";
import AnimatedButton from "../components/ui/AnimatedButton";
import Logo from "../assets/images/unrthdx-logo.png";
import StoryImage from "../assets/images/story-image.jpg";
import SkateChurchImage from "../assets/images/skate-church-image.png";
import FoundersImage from "../assets/images/founders.jpg";
import BackgroundVideo from "../components/ui/BackgroundVideo";
import BGVideo from "../assets/videos/kick-flip.mp4";

const UnrthdxHome = () => {
    return (
        <div>

            <div id="unrthdx-hero-section">

                <BackgroundVideo videoSrc={BGVideo} />

                <div className="hero-overlay"></div>

                <div className="container hero-content">
                    <div className="hero-logo p-4">
                        <img src={Logo} alt="Unrthdx Mvmnt logo" className="mx-auto" />
                    </div>

                    <h1>
                        IMPACTING THIS WORLD WITH THE GOSPEL IN THE MOST UNORTHODOX WAYS
                    </h1>
                </div>

            </div>

            <section className="unrthdx-story py-6">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-12 col-lg-7">
                            <div className="unrthdx-story__image-wrap">
                                <div className="unrthdx-story__glow"></div>
                                <img
                                    src={StoryImage}
                                    alt="Unrthdx gathering"
                                    className="unrthdx-story__image"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-lg-5">
                            <div className="unrthdx-story__content">
                                <p className="unrthdx-story__eyebrow">About Unrthdx</p>
                                <h2 className="unrthdx-story__title">What Is Unrthdx Mvmnt?</h2>
                                <p className="unrthdx-story__text">
                                    We are a movement of people passionate about seeing the imago dei
                                    come to know Jesus. We aim to extend beyond the four walls of the
                                    church, sharing the good news with those who may never step foot in
                                    a church, reaching places and people that others overlook, and
                                    loving them in ways no one else does.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="#skate-church" className="skate-story py-6">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-12 col-lg-5">
                            <div className="skate-story__content">
                                <p className="skate-story__eyebrow">Skate Church ATL</p>
                                <h2 className="skate-story__title">What Is Skate Church?</h2>
                                <p className="skate-story__text">
                                    Skate Church is an evangelistic Bible study held at a local skate
                                    park. We show up with pizza, build relationships with skaters, and
                                    share the good news of Jesus in a space that feels natural,
                                    welcoming, and real.
                                </p>
                                <p className="skate-story__text">
                                    We recently launched Skate Church at Brook Run Skate Park with a
                                    vision to grow from a monthly gathering into a weekly presence. From
                                    there, the goal is to expand into other Atlanta skate parks,
                                    including JB Williams and 4th Ward, with a long-term vision of
                                    reaching eight skate parks across the city.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-7">
                            <div className="skate-story__image-wrap">
                                <div className="skate-story__glow"></div>
                                <img
                                    src={SkateChurchImage}
                                    alt="Skate Church gathering at the skate park"
                                    className="skate-story__image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="founders-story py-6">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-12 col-lg-5">
                            <div className="founders-story__image-wrap">
                                <div className="founders-story__glow"></div>
                                <img
                                    src={FoundersImage}
                                    alt="Javier and Paula Rodriguez"
                                    className="founders-story__image"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-lg-7">
                            <div className="founders-story__content">
                                <p className="founders-story__eyebrow">Founders</p>
                                <h2 className="founders-story__title">Meet the Founders</h2>
                                <p className="founders-story__text">
                                    In 2023, while beginning the year in prayer and fasting, Javier
                                    Rodriguez felt a growing burden for evangelism and missions. He had
                                    spent years serving in youth ministry, DJing, and investing time at
                                    the local skate park through Skate Church, but sensed God calling
                                    him into something deeper.
                                </p>
                                <p className="founders-story__text">
                                    As he prayed, Javier felt the Lord asking, “What would you do?”
                                    That question stayed with him and became the catalyst for action.
                                    By the end of 2023, Javier and his wife Paula Rodriguez had named
                                    the vision <strong>UNRTHDX MVMNT</strong> and began taking steps to
                                    establish it as a nonprofit. After six years of youth ministry in
                                    the local church, Javier stepped out in faith to pursue the mission
                                    of UNRTHDX MVMNT full-time.
                                </p>
                                <p className="founders-story__signature">Javier & Paula Rodriguez</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </div>
    );
};

export default UnrthdxHome;