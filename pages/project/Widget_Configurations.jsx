import SideNavbar from "@/Components/SideNavbar";
import {
  Input,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

function Widget_Configurations() {
  return (
    <SideNavbar>
      <h3 className="text-[#7E22CE] text-[35px] font-bold my-7">
        Configuration
      </h3>
      <Tabs variant="unstyled">
        <TabList mb="1em" className="border-b-[2px] border-gray-300">
          <Tab>Genaral</Tab>
          <Tab>Display</Tab>
          <Tab>Advanced</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <form className="flex flex-col gap-2">
              <label className="font-bold text-[25px] " htmlFor="name">
                ChatBot Name
              </label>
              <div>
                <Input type="text" id="name" />
                <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
              </div>
              <label className="font-bold text-[25px] " htmlFor="message">
                Welcome Message
              </label>
              <div>
                <Input type="text" id="message" />
                <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
              </div>
              <label className="font-bold text-[25px] " htmlFor="placeholder">
                Input Placeholder
              </label>
              <div>
                <Input type="text" id="placeholder" />
                <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
              </div>
            </form>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 gap-5 gap-x-10">
              <div>
                <label className="font-semibold text-[25px]" htmlFor="pamaryColor">Primary Color</label>
                <div className="flex gap-3">
                  <Input type="text" id="pamaryColor" />
                  <span className="w-[40px] h-[40px] border-[1px] border-gray-300"></span>
                </div>
                <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
              </div>

              <div>
                <label className="font-semibold text-[25px]" htmlFor="fontColor">Font Color</label>
                <div className="flex gap-3">
                  <Input type="text" id="fontColor" />
                  <span className="w-[40px] h-[40px] border-[1px] border-gray-300"></span>
                </div>
                <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
              </div>

              <div>
                <label className="font-semibold text-[25px]" htmlFor="fontSize">Font Size (in px)</label>
                <div>
                  <Input type="text" id="fontSize" />
                  <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>

              <div>
                <label className="font-semibold text-[25px]" htmlFor="CharHeight">Chat Height (in % of total screen)</label>
                <div>
                  <Input type="text" id="CharHeight" />
                  <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>

              <div className="flex justify-between items-center col-span-2">
                <div>
                  <h5 className="font-semibold text-[25px]">Show Sources</h5>
                  <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
                </div>
                <Switch size='lg' defaultChecked/>
              </div>
            </div>
            <hr className="my-[30px] border-[1px] border-gray-300"/>
            <h4 className="text-[#7E22CE] font-bold text-[25px] mb-3">Chat Icon</h4>
            <div className="grid grid-cols-2 gap-5 gap-x-10">
              <div>
                <label className="font-semibold text-[25px]" htmlFor="chatSize">Chat Icon Size</label>
                <Input type="text" id="chatSize" />
              </div>
              <div>
                <label className="font-semibold text-[25px]" htmlFor="positionScreenr">Position on Screen</label>
                <Input type="text" id="positionScreenr" />
              </div>
              <div>
                <label className="font-semibold text-[25px]" htmlFor="distanceH">Horizontal Distance (in px)</label>
                <Input type="text" id="distanceH" />
              </div>
              <div>
                <label className="font-semibold text-[25px]" htmlFor="distanceB">Distance from Bottom (in px)</label>
                <Input type="text" id="distanceB" />
              </div>
              <div>
                <label className="font-semibold text-[25px]" htmlFor="custom-file-input">Chat Icon (in px)</label>
                <div>
                <input id='custom-file-input' type="file"  />
                <p className="text-[12px]">Recommended Size: 48x48px</p>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </SideNavbar>
  );
}

export default Widget_Configurations;
