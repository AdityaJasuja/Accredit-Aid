import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Header from './components/header.js'
import Coursematerials from './components/Coursematerials'
import StudentWorkSamples from './components/StudentWorkSamples'
import Invite from './components/invite.js'
import Exupload from './Exupload'


function Tabmenu(){
    return(
    <div>
    
       <div>
       <Header />
       </div>
         
        <div>
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
            <TabList>
            
                <Tab>Courses</Tab>
                <Tab>Course Materials</Tab>
                <Tab>Student Work Samples</Tab>
                <Tab>Directory</Tab>
                <Tab>Invite</Tab>

            </TabList>
         
            <TabPanel>
                <Exupload />
            </TabPanel>    
            <TabPanel>
                    <Coursematerials />
            </TabPanel>
            <TabPanel>
            < StudentWorkSamples />
            </TabPanel>
            <TabPanel>
           
            </TabPanel>
            <TabPanel>
                <Invite />
            </TabPanel>
           
        </Tabs >
        </div>
        
        
    </div>)
       
}

export default Tabmenu