import { Route,Routes } from "react-router-dom";
import Home from "./pages/home/home"
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Project from "./pages/project/project";
import Team from "./pages/team/team";
import Blog from "./pages/blog page/blog";
import Single from "./pages/single page/single";
import Service from "./pages/service/service";
import Box from "@mui/material/Box";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
function App() {
    return (
        <div className='App'>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ background: "#FDBE33", width: "90%", height: 190 }}>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 25 }}>
            <h1
              style={{
                fontWeight: 800,
                color: "#030F27",
                fontSize: 50,
                marginTop: 20,
              }}
            >
              BUILDERZ
            </h1>
            <Box sx={{ display: "flex", gap: 10 }}>
              <Box sx={{ display: "flex", marginTop: 3, gap: 1 }}>
                <div>
                  <CalendarMonthIcon
                    style={{ color: "#030F27", fontSize: 50 }}
                  />
                </div>
                <Box>
                  <Box>Opening Hour</Box>
                  <Box>Mon - Fri, 8:00 - 9:00</Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: 3, gap: 1 }}>
                <div>
                  <ContactPhoneIcon
                    style={{ color: "#030F27", fontSize: 50 }}
                  />
                </div>
                <Box>
                  <Box>Call Us</Box>
                  <Box>+012 345 6789</Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: 3, gap: 1 }}>
                <div>
                  <AttachEmailIcon style={{ color: "#030F27", fontSize: 50 }} />
                </div>
                <Box>
                  <Box>Email Us</Box>
                  <Box>info@example.com</Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                marginTop: 3,
                display: "flex",
                justifyContent: "center",
                background: "#030F27",
                width: "85%",
                height: 78,
                color: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 50,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
                  <Box>HOME</Box>
                  <Box>ABOUT</Box>
                  <Box>SERVICE</Box>
                  <Box>TEAM</Box>
                  <Box>PROJECT</Box>
                  <Box>PAGES</Box>
                  <Box>CONTACT</Box>
                </Box>
                <Box>
                  <button className="bttn">Get A Quote</button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<Project />} />
                <Route path="/team" element={<Team />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/single" element={<Single />} />
                <Route path="/service" element={<Service />} />
                

                
            </Routes>
            
            <Box
        sx={{
          background: "#030F27",
          width: "100%",
          height: "40%",
          marginTop: 30,
        }}
      >
        <Box sx={{ color: "white", paddingLeft:20,paddingTop:10,paddingBottom:10}}>
          <Box sx={{ display: "flex", gap: 17 }}>
            <Box>
              <Box sx={{ fontSize: 23, fontWeight: 600, color: "#FDBE33" }}>
                Office Contact
              </Box>
              <hr style={{ width: 70, color: "#FDBE33" }} />
              <Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>
                  123 Street, New York, USA
                </Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>+012 345 67890</Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>info@example.com</Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>icons icons icons</Box>
              </Box>
            </Box>
            <Box>
              <Box sx={{ fontSize: 23, fontWeight: 600, color: "#FDBE33" }}>
                Services Areas
              </Box>
              <hr style={{ width: 70, color: "#FDBE33" }} />
              <Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>
                  Building Construction
                </Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>House Renovation</Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>
                  Architecture Design
                </Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>Interior Design</Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>Painting</Box>
              </Box>
            </Box>
            <Box>
              <Box sx={{ fontSize: 23, fontWeight: 600, color: "#FDBE33" }}>
                Useful Pages
              </Box>
              <hr style={{ width: 70, color: "#FDBE33" }} />
              <Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>About Us</Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>Contact Us</Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>Our Team</Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>Projects</Box>
                <Box sx={{ fontSize: 20, marginTop: 1 }}>Testimonials</Box>
              </Box>
            </Box>
            <Box>
              <Box sx={{ fontSize: 23, fontWeight: 600, color: "#FDBE33" }}>
                Newsletter
              </Box>
              <hr style={{ width: 70, color: "#FDBE33" }} />
              <Box>
                <Box sx={{ fontSize: 20, marginTop: 1, width: 290 }}>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulpu
                </Box>
                <input
                  className="input"
                  placeholder="Email here"
                  style={{ width: 240, height: 50 }}
                  type="text"
                  name=""
                  id=""
                />
                <button className="btnn">SUBMIT</button>
              </Box>
            </Box>
          </Box>
        </Box>
       <Box sx={{paddingBottom:7,display:'flex',justifyContent:'center'}}>
       <Box sx={{color:'white',display:'flex',gap:7,justifyContent:'center',borderTop:'1px solid gray',width:1000,borderBottom:'1px solid gray'}}>
          <div className="hover"  style={{fontSize:18,marginTop:10,marginBottom:10,  }}>Terms of use</div> 
          <div className="border1"></div>
          <div  className="hover" style={{fontSize:18,marginTop:10,marginBottom:10,}}>Privacy policy</div>
          <div className="border1"></div>
          <div className="hover"  style={{fontSize:18,marginTop:10,marginBottom:10,}}>Cookies</div> 
          <div className="border1"></div>
          <div className="hover"  style={{fontSize:18,marginTop:10,marginBottom:10,}}>Help</div>
          <div className="border1"></div>
          <div className="hover"  style={{fontSize:18,marginTop:10,marginBottom:10,}}>Help FAQs</div>
        </Box>
       </Box>
       <Box>
        <Box sx={{color:'white',fontSize:20,display:'flex',justifyContent:'center',gap:80}}>
          <Box>
          © Your Site Name, All Right Reserved.
          </Box>
          <Box>
          Designed By HTML Codex
          </Box>
        </Box>
       </Box>
      </Box>

        </div>
    );
}

export default App;
