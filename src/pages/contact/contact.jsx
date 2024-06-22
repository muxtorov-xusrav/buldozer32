import styles from './contact.module.css'
import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
    margin: '10px',
    padding: '30px',
    border: '2px solid #353F52'
}));
const Contact = () => {
    return (
        <Box sx={{ background: '#DDDDDD', padding: '0px 73px' }} >
            <Box sx={{ background: '#FDBE33', padding: '90px 0px' }} >
                <Box display={'flex'} justifyContent={'center'} >
                    <Box>
                        <Typography color={'#020B1E'} fontWeight={'bold'} padding={'0px 0px 5px'} margin={'0px 0px 10px'} variant='h2' >
                            Our Team
                        </Typography>
                        <Box display={'flex'} justifyContent={'center'} >
                            <Box sx={{ height: '2px', width: '100px', background: '#020B1E' }} ></Box>
                        </Box>

                        <Box display={'flex'} justifyContent={'center'} fontSize={'25px'} padding={'20px 0px'} gap={'3%'} >
                            <Box>
                                Home
                            </Box>
                            /
                            <Box>
                                Contact Us
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box sx={{ background: '#FFFFFF' }} >

                <Box textAlign={'center'} padding={'50px'} >
                    <Typography variant='h5' fontWeight={'bold'} color={'#FDBE33'} >
                        Get In Touch
                    </Typography>
                    <Typography variant='h2' fontWeight={'bold'} color={'#020B1E'} >
                        For Any Query
                    </Typography>
                </Box>


                <Grid container marginTop={'15px'} >
                    <Grid sx={{ background: '#030E24' }} md={6} sm={12} xs={12} >
                        <Box padding={'30px 10px'} >
                            <Item>
                                <Box display={'flex'} gap={'5%'} >
                                    <Box>
                                        <Typography variant='h5' >
                                            1234 <br />1234
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography color={'#FDBE33'} variant='h5' >
                                            Location
                                        </Typography>
                                        <Typography color={'white'} variant='h6' >
                                            123 Street, New York, USA
                                        </Typography>
                                    </Box>
                                </Box>
                            </Item>
                            <Item>
                                <Box display={'flex'} gap={'5%'} >
                                    <Box>
                                        <Typography variant='h5' >
                                            1234 <br />1234
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography color={'#FDBE33'} variant='h5' >
                                            Location
                                        </Typography>
                                        <Typography color={'white'} variant='h6' >
                                            123 Street, New York, USA
                                        </Typography>
                                    </Box>
                                </Box>
                            </Item>
                            <Item>
                                <Box display={'flex'} gap={'5%'} >
                                    <Box>
                                        <Typography variant='h5' >
                                            1234 <br />1234
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography color={'#FDBE33'} variant='h5' >
                                            Location
                                        </Typography>
                                        <Typography color={'white'} variant='h6' >
                                            123 Street, New York, USA
                                        </Typography>
                                    </Box>
                                </Box>
                            </Item>
                        </Box>
                    </Grid>
                    <Grid sx={{ background: '#FDBE33' }} md={6} sm={12} xs={12} >
                        <Box padding={'40px 20px'} >
                            <Box>
                                <input type="text" placeholder='Your Name' className={styles.inp} name="" id="" />
                            </Box><br />
                            <Box>
                                <input type="text" placeholder='Your Email' className={styles.inp} name="" id="" />
                            </Box><br />
                            <Box>
                                <input type="text" placeholder='Subject' className={styles.inp} name="" id="" />
                            </Box><br />
                            <Box>
                                <textarea name="" placeholder='Message' style={{ width: 'auto', height: 'auto', border: '1.5px solid #C79C60', padding: '6px 12px', borderRadius: '10px',background:'#FDBE33' }} id="" cols="30" rows="10"></textarea>
                            </Box><br />
                            <button className={styles.btn} >Send Message</button>
                        </Box>
                    </Grid>
                </Grid>

            </Box>


        </Box>
    )
};
export default Contact;