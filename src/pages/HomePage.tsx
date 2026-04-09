// import React from 'react';
import InicieComponent from '../components/InicieComponent/InicieComponent.tsx';
import DataComponent from "../components/DataComponent/DataComponent.tsx";
import OptionsComponent from '../components/OptionsComponent/OptionsComponent.tsx';
import SystemsComponent from '../components/SystemsComponent/SystemsComponent.tsx';
import ContactComponent from '../components/ContactComponent/ContactComponent.tsx';

function homePage() {
    return(
        <>
            <InicieComponent></InicieComponent>
            <DataComponent></DataComponent>
            <OptionsComponent></OptionsComponent>
            <SystemsComponent></SystemsComponent>
            <ContactComponent></ContactComponent>
        </>
    )
;}

export default homePage