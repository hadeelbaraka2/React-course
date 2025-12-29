import Header from "../Component/Header"
import Footer from "../Component/Footer"
import Content from "../Component/content";
import { Helmet } from 'react-helmet-async';
const Frameworks = () => {
    return (
        <div>
            <Helmet>
        <title>frameworks page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <Header/>
            <Content data="Frameworks"/>
            <Footer/>
        </div>
    );
}
export default Frameworks;
