// import React from 'react';
import InicieComponent from '../components/InicieComponent/InicieComponent.tsx';
import DataComponent from "../components/DataComponent/DataComponent.tsx";
import OptionsComponent from '../components/OptionsComponent/OptionsComponent.tsx';
import SystemsComponent from '../components/SystemsComponent/SystemsComponent.tsx';
import ContactComponent from '../components/ContactComponent/ContactComponent.tsx';
import WorkingMethod from '../components/WorkingMethod/WorkingMethod.tsx';
import AboutUsComponent from '../components/AboutUsComponent/AboutUsComponent.tsx';


function homePage() {
    return(
        <>
            <InicieComponent id="inicio"></InicieComponent>
            <DataComponent></DataComponent>
            <OptionsComponent></OptionsComponent>
            <SystemsComponent id="sistemas"></SystemsComponent>
            <WorkingMethod></WorkingMethod>
            <AboutUsComponent id="nosotros"></AboutUsComponent>
            <ContactComponent id="contacto"></ContactComponent>
        </>
    )
;}

export default homePage