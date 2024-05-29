import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stl from "./home.module.css";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import img1 from "../../assets/carousel-1.jpg";
import img2 from "../../assets/carousel-2.jpg";
import img3 from "../../assets/carousel-3.jpg";
import img4 from "../../assets/about.jpg";
import img5 from "../../assets/service-1.jpg";
import img6 from "../../assets/service-2.jpg";
import img7 from "../../assets/service-3.jpg";
import img8 from "../../assets/service-4.jpg";
import img9 from "../../assets/service-5.jpg";
import img10 from "../../assets/service-6.jpg";
import img11 from "../../assets/team-1.jpg";
import img12 from "../../assets/team-2.jpg";
import img13 from "../../assets/team-3.jpg";
import img14 from "../../assets/team-4.jpg";
import img15 from "../../assets/testimonial-1.jpg";
import img16 from "../../assets/testimonial-2.jpg";
import img17 from "../../assets/testimonial-3.jpg";
import img18 from "../../assets/quote.png";
import img19 from "../../assets/blog-1.jpg";
import img20 from "../../assets/blog-2.jpg";
import img21 from "../../assets/blog-3.jpg";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import RoomPreferencesOutlinedIcon from "@mui/icons-material/RoomPreferencesOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const carausel = [
  { img: img1, title: "We Are Professional" },
  { img: img2, title: "Professional Builder" },
  { img: img3, title: "We Are Trusted" },
];
const offers = [
  {
    icon: <EngineeringOutlinedIcon sx={{ fontSize: 80, color: "#FDBE33" }} />,
    title: "Expert Worker",
  },
  {
    icon: <MapsHomeWorkOutlinedIcon sx={{ fontSize: 80 }} />,
    title: "Quality Work",
  },
  {
    icon: <SupportAgentOutlinedIcon sx={{ fontSize: 80, color: "#FDBE33" }} />,
    title: "24/7 Support",
  },
];
const services = [
  {
    img: img5,
    title: "Building Construction",
  },
  {
    img: img6,
    title: "House Renovation",
  },
  {
    img: img7,
    title: "Architecture Design",
  },
  {
    img: img8,
    title: "Interior Design",
  },
  {
    img: img9,
    title: "Fixing & Support",
  },
  {
    img: img10,
    title: "Painting",
  },
];
const team = [
  {
    img: img11,
    name: "Adam Phillips",
    job: "CEO&Founder",
  },
  {
    img: img12,
    name: "Dylan Adams",
    job: "Civil Engineer",
  },
  {
    img: img13,
    name: "Jhon Doe",
    job: "Interior Designer",
  },
  {
    img: img14,
    name: "Josh Dunn",
    job: "Painter",
  },
];
const blog = [
  {
    img: img19,
    title: "Lorem ipsum dolor sit",
  },
  {
    img: img20,
    title: "Lorem ipsum dolor sit",
  },
  {
    img: img21,
    title: "Lorem ipsum dolor sit",
  },
];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        zIndex: 10,
        display: "block",
        background: "none",
        marginRight: "100px",
        marginTop: "0px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        zIndex: 10,
        display: "block",
        background: "none",
        marginLeft: "100px",
        marginTop: "0px",
      }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    draggable: true,
  };

  return (
    <div>
      {/* Header carausel */}
      <div style={{ position: "relative", margin: "0 auto" }}>
        <Slider {...settings}>
          {carausel.map((item, index) => {
            return (
              <div className={stl.div} key={index}>
                <img src={item.img} alt="" width="100%" />
                <div>
                  <h2>{item.title}</h2>
                  <h1>We Build Your Home</h1>
                  <Button
                    sx={{
                      fontSize: "18px",
                      border: "2px solid #fff",
                      color: "#fff",
                      padding: "13px 40px",
                      borderRadius: "0",
                      background: "none",
                      "&:hover": {
                        backgroundColor: "#FDBE33",
                        color: "#000",
                        border: "2px solid #FDBE33",
                        boxShadow: "none",
                        transition: "all 0.3s ease-in-out",
                      },
                    }}>
                    get a quote
                  </Button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {/* Offer card */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {offers.map((item, index) => (
            <Grid item xs={4} sm={8} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  p: 4,
                  color: index === 1 ? "#000" : "#FDBE33",
                  backgroundColor: index != 1 ? "#030F27" : "#FDBE33",
                }}>
                <Box sx={{ mt: 3 }}>{item.icon}</Box>
                <Box>
                  <Typography sx={{ fontSize: 28, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: 20 }}>
                    Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare
                    velit non
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* About us */}

      <div className={stl.div2}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12} sm={6} md={5}>
            <img
              src={img4}
              alt=""
              style={{ width: "100%" }}
              className={stl.aboutimg}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <Box sx={{ pt: 5 }}>
              <Typography
                sx={{ fontSize: 18, fontWeight: 600, color: "#FDBE33" }}>
                Welcome to Builderz
              </Typography>
              <Typography sx={{ fontSize: 52, fontWeight: 600 }}>
                25 Years Experience
              </Typography>
              <Typography sx={{ fontSize: 17.2, color: "#757575", mb: 4 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem. <br /> <br /> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur
                facilisis ornare velit non vulputate. Aliquam metus tortor,
                auctor id gravida condimentum, viverra quis sem. Curabitur non
                nisl nec nisi scelerisque maximus. Aenean consectetur convallis
                porttitor. Aliquam interdum at lacus non blandit.
              </Typography>
              <Button
                sx={{
                  fontSize: "18px",
                  border: "2px solid #FDBE33",
                  color: "#000",
                  padding: "13px 40px",
                  borderRadius: "0",
                  background: "#FDBE33",
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "#000",
                    color: "#FDBE33",
                    border: "2px solid #000",
                    padding: "13px 40px",
                    boxShadow: "none",
                    transition: "all 0.3s ease-in-out",
                  },
                }}>
                learn more
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
      {/* About card */}
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} sx={{ backgroundColor: "#030F27" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 0 }}
              sx={{ p: 5 }}>
              <Grid item xs={6} md={6} sx={{ display: "flex", gap: 1 }}>
                <Box>
                  <EngineeringOutlinedIcon
                    sx={{ fontSize: 70, color: "#FDBE33", mt: 0.4 }}
                  />
                </Box>
                <Box sx={{ color: "#FDBE33" }}>
                  <Typography sx={{ fontSize: 32, fontWeight: 600 }}>
                    109
                  </Typography>
                  <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    EXPERT WORKERS
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={6} sx={{ display: "flex", gap: 2 }}>
                <Box>
                  <MapsHomeWorkOutlinedIcon
                    sx={{ fontSize: 70, color: "#FDBE33", ml: 5, mt: 0.7 }}
                  />
                </Box>
                <Box sx={{ color: "#FDBE33" }}>
                  <Typography sx={{ fontSize: 32, fontWeight: 600 }}>
                    485
                  </Typography>
                  <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    HAPPY CLIENTS
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sx={{ backgroundColor: "#FDBE33" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 0 }}
              sx={{ p: 5 }}>
              <Grid item xs={6} md={6} sx={{ display: "flex", gap: 1 }}>
                <Box>
                  <ApartmentOutlinedIcon
                    sx={{
                      fontSize: 70,
                      color: "#030F27",
                      mt: 0.4,
                      marginLeft: "-40px",
                    }}
                  />
                </Box>
                <Box sx={{ color: "#030F27" }}>
                  <Typography sx={{ fontSize: 32, fontWeight: 600 }}>
                    789
                  </Typography>
                  <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    COMPLETED PROJECTS
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={6} sx={{ display: "flex", gap: 2 }}>
                <Box>
                  <RoomPreferencesOutlinedIcon
                    sx={{ fontSize: 70, color: "#030F27", mt: 0.7 }}
                  />
                </Box>
                <Box sx={{ color: "#030F27" }}>
                  <Typography sx={{ fontSize: 32, fontWeight: 600 }}>
                    890
                  </Typography>
                  <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    RUNNING PROJECTS
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Our sevices */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{ fontSize: 19, fontWeight: 600, color: "#FDBE33", mt: 10 }}>
          Our Services
        </Typography>
        <Typography sx={{ fontSize: 56, fontWeight: 600 }}>
          We Provide Services
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, p: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {services.map((item, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <div className={stl.servicecard}>
                <div className={stl.servicetitle}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem.
                  </p>
                </div>
                <Box>
                  <img
                    src={item.img}
                    alt=""
                    style={{ width: "100%" }}
                    className={stl.serviceimg}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "-5px",
                  }}>
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      sx={{
                        fontSize: 18,
                        p: "10px",
                        backgroundColor: "#030F27",
                        color: "#FDBE33",
                      }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <div>
                    <AddOutlinedIcon
                      id={stl.plus}
                      sx={{
                        fontSize: 37,
                        color: "#030F27",
                        backgroundColor: "#FDBE33",
                        p: "5px",
                      }}
                    />
                  </div>
                </Box>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Video */}
      <div className={stl.video}>
        <div className={stl.play}>
          <PlayCircleFilledOutlinedIcon
            sx={{ fontSize: 88, color: "#FDBE33" }}
          />
        </div>
      </div>
      {/* Our team */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{ fontSize: 19, fontWeight: 600, color: "#FDBE33", mt: 10 }}>
          Our Team
        </Typography>
        <Typography sx={{ fontSize: 56, fontWeight: 600 }}>
          Meet Our Engineer
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2,sm:6, md: 4 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          sx={{ p: 5 }}>
          {team.map((item, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <Box sx={{textAlign:'center'}}>
              <img src={item.img} alt="" style={{ maxWidth: "100%" }} />
              <Box id={stl.team}
                sx={{
                  margin:'0 auto',
                  textAlign: "center",
                  backgroundColor: "#030F27",
                  pt: 3,
                  pb: 3,
                  marginTop: "-5px",
                }}>
                <Typography
                  sx={{
                    fontSize: 20,
                    color: "#FDBE33",
                    fontWeight: 600,
                  }}>
                  {item.job}
                </Typography>
                <Typography sx={{ fontSize: 18, color: "#fff" }}>
                  {item.name}
                </Typography>
              </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{ fontSize: 19, fontWeight: 600, color: "#FDBE33", mt: 10 }}>
          Frequently Asked Question
        </Typography>
        <Typography sx={{ fontSize: 56, fontWeight: 600 }}>
          You May Ask
        </Typography>
      </Box>
      <Box sx={{ p: 5 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>
          <Grid item xs={12} md={6}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}>
              {Array.from(Array(5)).map((_, index) => (
                <Grid item xs={12} sm={12} md={12} key={index}>
                  <div>
                    <Accordion style={{ borderRadius: 0 }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header">
                        Lorem ipsum dolor sit amet?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}>
              {Array.from(Array(5)).map((_, index) => (
                <Grid item xs={12} sm={12} md={12} key={index}>
                  <div>
                    <Accordion style={{ borderRadius: 0 }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header">
                        Lorem ipsum dolor sit amet?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Carausel 2 */}
      <div className={stl.video}>
        <div className={stl.carusel2}>
          <div
            className="slider-container"
            style={{
              width: "48%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              gap: 50,
              position: "relative",
            }}>
            <img src={img15} alt="" className={stl.img} />
            <img
              src={img16}
              alt=""
              style={{
                borderRadius: "50%",
                position: "absolute",
                
                width: 150,
                height: 150,
              }}
            />
            <img src={img17} alt="" className={stl.img} />
          </div>
          <div>
            <Box sx={{ textAlign: "center", p: 3, color: "#fff" }}>
              <img src={img18} alt="" />
              <Typography
                sx={{ fontSize: 24, fontWeight: 600, color: "#FDBE33" }}>
                Customer Name
              </Typography>
              <Typography>
                {" "}
                <i>profession</i>
              </Typography>
              <Typography sx={{ width: "65%", margin: "0 auto" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sapiente nulla, dolorem ab quae laboriosam nobis aperiam ratione
                sint distinctio suscipit incidunt debitis quibusdam! Pariatur
                corrupti aperiam, voluptatibus facere atque libero optio a
                voluptatem? Atque.
              </Typography>
            </Box>
          </div>
        </div>
      </div>

      {/* Our Blog     */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{ fontSize: 19, fontWeight: 600, color: "#FDBE33", mt: 10 }}>
          Latest Blog
        </Typography>
        <Typography sx={{ fontSize: 56, fontWeight: 600 }}>
          Latest From Our Blog
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, p: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {blog.map((item, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <div className={stl.servicecard2}>
                <Box>
                  <img
                    src={item.img}
                    alt=""
                    style={{ width: "100%" }}
                    className={stl.serviceimg}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "-5px",
                  }}>
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      sx={{
                        fontSize: 18,
                        p: "10px",
                        backgroundColor: "#030F27",
                        color: "#FDBE33",
                      }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <div>
                    <AddOutlinedIcon
                      id={stl.plus}
                      sx={{
                        fontSize: 37,
                        color: "#030F27",
                        backgroundColor: "#FDBE33",
                        p: "5px",
                      }}
                    />
                  </div>
                </Box>
                <Box sx={{backgroundColor:'#F3F6FF',color:'#666666',textAlign:'center',p:2,pb:4,pt:1,marginTop:'-5px'}}>
                  <p style={{marginBottom:'12px',fontWeight:300}}><i>By</i> Admin <i>In</i> Construction</p>
                  <Box sx={{backgroundColor:'#FDBE33',width:100,height:'1px',margin:'0 auto'}}></Box>
                  <Typography sx={{mt:1}}>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non vulputate. Aliquam
                    metus tortor
                  </Typography>
                </Box>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
