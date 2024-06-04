import React from 'react'
import 'style.css'
import img from '../../assets/about.jpg'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
function About() {
    return (
        <div>
            <div className="about">
                <h2 className='h2'>
                    About Us
                    <div style={{ display: 'flex', justifyContent: 'center' }}>

                        <hr style={{ width: 60, border: '2px solid #030f27' }} />
                    </div>
                </h2>

                <div className='pages'>
                    <div className="home">Home</div>
                    <div className="slesh" >/</div>
                    <div className="about-us">About Us</div>
                </div>

            </div>

            <div className='about-big'>
                <div className="about-a">
                    <div className="items-1">
                        <img width={420} height={460.14} src={img} alt="" />
                    </div>
                    <div className="items-2">
                        <p className='p'>Welcome to Builderz</p>
                        <h2 className='h2-w'>25 Years Experience</h2>
                        <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium <br /> mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id <br /> gravida condimentum, viverra quis sem.</p>
                        <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium <br /> mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id <br /> gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque <br />maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus <br /> non blandit.</p>
                        <div className='div-b'><button className='btn1'>LEARN MORE</button></div>
                    </div>
                </div>
            </div>


            <div className='usefull'>
                <div className='bg1'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div><EngineeringOutlinedIcon sx={{ color: '#FDBE33', fontSize: 70 }} /></div>
                        <div>
                            <div><h2 style={{ color: '#FDBE33', fontSize: '35px' }}>109</h2></div>
                            <div style={{ color: '#FDBE33', fontSize: '16px' }}>EXPERT WORKERS</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div><ApartmentIcon sx={{ color: '#FDBE33', fontSize: 70 }} /></div>
                        <div>
                            <div><h2 style={{ color: '#FDBE33', fontSize: '35px' }}>485</h2></div>
                            <div style={{ color: '#FDBE33', fontSize: '16px' }}>HAPPY CLIENTS</div>
                        </div>
                    </div>

                </div>
                <div className='bg2'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div><HomeOutlinedIcon sx={{ color: '#030ff27', fontSize: 70 }} /></div>
                        <div>
                            <div><h2 style={{ color: '#030ff27', fontSize: '35px' }}>789</h2></div>
                            <div style={{ color: '#030ff27', fontSize: '16px' }}>COMPLETED PROJECTS</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div><PrecisionManufacturingOutlinedIcon sx={{ color: '#030ff27', fontSize: 70 }} /></div>
                        <div>
                            <div><h2 style={{ color: '#030ff27', fontSize: '35px' }}>890</h2></div>
                            <div style={{ color: '#030ff27', fontSize: '16px' }}>RUNNING PROJECTS</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="new2">
                <p style={{ fontSize: '18px', color: '#FDBE33', textAlign: 'center' }}>Frequently Asked Question</p>
                <h2 style={{ fontSize: '50px', color: '#030ff27', textAlign: 'center' }}>You May Ask</h2>

                <div className='new'>
                    <div className='new1'>
                        <div>
                            <div style={{ paddingTop: 15, display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ border: '1px solid black', padding: '15px 25px', fontSize: '16px', width: 500, display: 'flex', justifyContent: 'space-between' }}>Lorem ipsum dolor sit amet.       <div>+</div></div>

                            </div>
                            <div style={{ paddingTop: 15, display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ border: '1px solid black', padding: '15px 25px', fontSize: '16px', width: 500, display: 'flex', justifyContent: 'space-between' }}>Lorem ipsum dolor sit amet.       <div>+</div></div>

                            </div>
                            <div style={{ paddingTop: 15, display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ border: '1px solid black', padding: '15px 25px', fontSize: '16px', width: 500, display: 'flex', justifyContent: 'space-between' }}>Lorem ipsum dolor sit amet.       <div>+</div></div>

                            </div>
                            <div style={{ paddingTop: 15, display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ border: '1px solid black', padding: '15px 25px', fontSize: '16px', width: 500, display: 'flex', justifyContent: 'space-between' }}>Lorem ipsum dolor sit amet.       <div>+</div></div>

                            </div>
                            <div style={{ paddingTop: 15, display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ border: '1px solid black', padding: '15px 25px', fontSize: '16px', width: 500, display: 'flex', justifyContent: 'space-between' }}>Lorem ipsum dolor sit amet.       <div>+</div></div>

                            </div>
                        </div>
                    </div>

<div className="new12"></div>


                    <div className='new1'>
                        <div>
                            <div style={{ paddingTop: 15, display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ border: '1px solid black', padding: '15px 25px', fontSize: '16px', width: 500, display: 'flex', justifyContent: 'space-between' }}>Lorem ipsum dolor sit amet.       <div>+</div></div>

                            </div>
                            <div style={{ paddingTop: 15, display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ border: '1px solid black', padding: '15px 25px', fontSize: '16px', width: 500, display: 'flex', justifyContent: 'space-between' }}>Lorem ipsum dolor sit amet.       <div>+</div></div>

                            </div>
                            <div style={{ paddingTop: 15, display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ border: '1px solid black', padding: '15px 25px', fontSize: '16px', width: 500, display: 'flex', justifyContent: 'space-between' }}>Lorem ipsum dolor sit amet.       <div>+</div></div>

                            </div>
                            <div style={{ paddingTop: 15, display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ border: '1px solid black', padding: '15px 25px', fontSize: '16px', width: 500, display: 'flex', justifyContent: 'space-between' }}>Lorem ipsum dolor sit amet.       <div>+</div></div>

                            </div>
                            <div style={{ paddingTop: 15, display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ border: '1px solid black', padding: '15px 25px', fontSize: '16px', width: 500, display: 'flex', justifyContent: 'space-between' }}>Lorem ipsum dolor sit amet.       <div>+</div></div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default About
