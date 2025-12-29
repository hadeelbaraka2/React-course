import Header from "../Component/Header"
import Footer from "../Component/Footer"
import Content from "../Component/content";
import { Helmet } from 'react-helmet-async';
const Tips = () => {
    return (
        <div>
            <Helmet>
        <title>Tips page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <Header/>
            <Content data="Tips"/>
            <Footer/>
        </div>
    );
}
export default Tips;
