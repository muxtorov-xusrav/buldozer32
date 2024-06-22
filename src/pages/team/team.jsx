import styles from './team.module.css'
import { Box, Container, Grid, Typography, CardMedia, Card, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import team1 from '../../assets/team-1.jpg'
import team2 from '../../assets/team-2.jpg'
import team3 from '../../assets/team-3.jpg'
import team4 from '../../assets/team-4.jpg'

const data = [
    {
        img: team1,
        name: 'Adam Phillips',
        title: 'CEO & Founder'
    },
    {
        img: team2,
        name: 'Dylan Adams',
        title: 'Civil Engineer'
    },
    {
        img: team3,
        name: 'John Doe',
        title: 'Interior Designer'
    },
    {
        img: team4,
        name: 'Josh Dunn',
        title: 'Painter'
    },
    {
        img: team1,
        name: 'Adam Phillips',
        title: 'CEO & Founder'
    },
    {
        img: team2,
        name: 'Dylan Adams',
        title: 'Civil Engineer'
    },
    {
        img: team3,
        name: 'John Doe',
        title: 'Interior Designer'
    },
    {
        img: team4,
        name: 'Josh Dunn',
        title: 'Painter'
    },
]

const Item = styled(Paper)(({ theme }) => ({
    margin: '15px',
    borderRadius: '0px',
}));

const Team = () => {
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
                                Our Team
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box sx={{ background: '#FFFFFF', padding: '100px' }} >

                <Box textAlign={'center'} >
                    <Typography variant='h5' fontWeight={'bold'} color={'#FDBE33'} >
                        Our Team
                    </Typography>
                    <Typography variant='h2' fontWeight={'bold'} color={'#020B1E'} >
                        Meet Our Engineer
                    </Typography>
                </Box>

                <Grid container marginTop={'15px'} >
                    {
                        data.map((e) => {
                            return (
                                <Grid md={3} lg={3} xs={12} sm={6} >
                                    <Item>
                                        <img src={e.img} width={261} height={298} alt="" />
                                        <Box sx={{ textAlign: 'center', background: '#020B1E', padding: '25px 15px' }} >
                                            <Typography variant='h5' fontWeight={'bold'} color={'#FDBE33'} >
                                                {e.name}
                                            </Typography>
                                            <Typography variant='h6' fontWeight={'bold'} color={'white'} >
                                                {e.title}
                                            </Typography>
                                        </Box>
                                    </Item>
                                </Grid>
                            )
                        })
                    }
                </Grid>

            </Box>


        </Box>
    )
};
export default Team;