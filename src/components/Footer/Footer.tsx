import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <div className="footer__author">
                    <h3 className="footer__author-name">Author: Maxim Kupchin</h3>
                    <a
                        target="_blank"
                        href="https://github.com/qmAsee"
                        className="footer__resource"
                    >
                        <img
                            src="/dota-tiermaker/github_icon.png"
                            alt="github"
                            className="footer__link-icon"
                        />
                        <span className="footer__link-text">qmAsee</span>
                    </a>
                    <a
                        target="_blank"
                        href="https://t.me/mskupchin"
                        className="footer__resource"
                    >
                        <img
                            src="/dota-tiermaker/tg_icon.png"
                            alt="telegram"
                            className="footer__link-icon"
                        />
                        <span className="footer__link-text">@mskupchin</span>
                    </a>
                </div>
            </div>
            <div className="footer__info"></div>
        </footer>
    );
};

export default Footer;
