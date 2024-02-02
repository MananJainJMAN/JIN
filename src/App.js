import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import { Dropdown } from 'primereact/dropdown';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import './App.css';

function App() {
  const { collapseSidebar } = useProSidebar();
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh", backgroundColor: " rgb(67 156 255 / 80%)" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>JIN</h2>
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
      <div class="main">
        <h1>Timesheet</h1>

        <div class="headline">
          <p>Total Hours: 0.0</p>
          <p>&lt; 05 Feb 2024 - 11 Feb 2024 &gt;</p>
        </div>

        <div class="headBlock">
          <p>Timesheet</p>
        </div>
        <div class="options">
          <div class="option_content">

            <p>Project Type</p>
            <p>Project Name</p>
            <p>Task</p>
            {/* <p>Comment</p> */}
            <p>Mon<br></br>05</p>
            <p>Tue<br></br>06</p>
            <p>Mon<br></br>07</p>
            <p>Mon<br></br>08</p>
            <p>Mon<br></br>09</p>
            <p>Mon<br></br>10</p>
            <p>Mon<br></br>11</p>
            <p>Total</p>

          </div>
        </div>

        <div class="task1">
          <div class="task1_content">

            <p>BAU Activity</p>
            <div class="search">
              {/* take reference from primereact for making it working dropdown-> filter */}
              <Dropdown value="" optionLabel="name" placeholder="Project"
                className="w-full md:w-14rem" />
            </div>

            <div class="search">
              {/* take reference from primereact for making it working dropdown-> filter */}
              <Dropdown value="" optionLabel="name" placeholder="Task"
                className="w-full md:w-14rem" />
            </div>





            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>





          </div>
        </div>

        <hr class="midline"></hr>
        <div class="task2">
          <div class="task1_content">

            <p>Sales Activity</p>
            <div class="search">
              {/* take reference from primereact for making it working dropdown-> filter */}
              <Dropdown value="" optionLabel="name" placeholder="Project"
                className="w-full md:w-14rem" />
            </div>

            <div class="search">
              {/* take reference from primereact for making it working dropdown-> filter */}
              <Dropdown value="" optionLabel="name" placeholder="Task"
                className="w-full md:w-14rem" />
            </div>





            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>





          </div>
        </div>
        <hr class="midline"></hr>

        <div class="total">
          <div class="total_content">
            <p>Total Hours</p>

           
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>

              

           
            

          </div>
        </div>
        <br>
        </br>
        <br>
        </br>
        
       
        <hr class="midline"></hr>
        <div class="total">
          <div class="total_content">
            <p>Machine Hours</p>

           
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>

              

           
            

          </div>
        </div>
        <br>
        </br>
        <br>
        </br>
        
       
        <hr class="midline"></hr>
        <div class="total">
          <div class="total_content">
            <p>Break Hours</p>

           
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>
            <input type="text" className="digit"></input>

              

           
            

          </div>
        </div>
        <br>
        </br>
        <br>
        </br>
        
       
        <hr class="midline"></hr>

      </div>
    </div>


  );
}

export default App;