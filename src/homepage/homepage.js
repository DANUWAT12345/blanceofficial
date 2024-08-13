import IndividualIntervalsExample from './carousels.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingAbout from './landingAbout.js'
import FluidExample from './landingImage.js'
import Footer from './footer.js'
import Afterlanding from './Afterlanding.js';
import GroupExample from './Homepage_card.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import BasicExample from '../nav.js'


function Homepage() {
    return (
        <div>
            <IndividualIntervalsExample />
            <LandingAbout />
            <FluidExample />
            <Afterlanding />
            <GroupExample />
        </div>
    )
}

export default Homepage;