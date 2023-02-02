import React from "react";
import Navbar from "./Navbar";
import Hero from './Hero';
import Services from "./Services";
import WorkDomain from './WorkDomain';
import Milestones from "./Milestones";
import Affiliate from "./Affiliate";
import Testimonials from "./Testimonials";
import Connect from "./Connect";
import Footer from "./Footer";
// import Work from "./carousel/Work";

function Home(){
    return(
        <div>
            <Navbar page='home' />
            <Hero />
            <Services />
            <WorkDomain />
            {/* <Work /> */}
            <Milestones />
            <Affiliate />
            <Testimonials />
            <Connect />
            <Footer />
        </div>
    )
}

export default Home;