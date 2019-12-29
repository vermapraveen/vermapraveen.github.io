import CopyrightInfo from "/src/components/footer/copyrightInfo.js";

const Footer = (props) => {
    return React.createElement('div', {class:'footer'}, React.createElement(CopyrightInfo, null, null));
}

export default Footer;
