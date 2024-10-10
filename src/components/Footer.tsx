import moment from "moment";

const Footer = () => {
    return (
        <div>
              <div className=' bg-black text-sm text-center justify-center mx-auto text-white font-CustomFont py-5'>
                <p>&copy; {moment().format('yyyy')} Campers Shop. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;