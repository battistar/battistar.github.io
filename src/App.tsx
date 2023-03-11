import { Avatar, Box, Container, IconButton, Paper, Stack, Tooltip, Typography } from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedinIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import profileImg from 'assets/profile.jpeg';
import curriculumPdf from 'assets/curriculum.pdf';

const GIT_HUB_URL = 'https://github.com/battistar';
const LINKEDIN_URL = 'https://www.linkedin.com/in/samuele-battistella-ab15b3141';

const Head = (): JSX.Element => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: { xs: '91px', md: '116px' } }}>
        <Paper sx={{ position: 'relative', borderRadius: 6, pt: { xs: '99px', md: '124px' }, pb: 3, px: 3 }}>
          <Box
            sx={{
              position: 'absolute',
              width: { xs: '158px', md: '208px' },
              height: { xs: '158px', md: '208px' },
              top: { xs: '-75px', md: '-100px' },
              left: 0,
              right: 0,
              ml: 'auto',
              mr: 'auto',
              backgroundColor: (theme) => theme.palette.background.paper,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}
          >
            <Avatar
              src={profileImg}
              sx={{
                width: { xs: '150px', md: '200px' },
                height: { xs: '150px', md: '200px' },
              }}
            />
          </Box>
          <Stack gap={2} sx={{ alignItems: 'center' }}>
            <Typography variant="h4" component="div">
              Samuele Battistella
            </Typography>
            <Typography variant="h6" component="div">
              SOFTWARE DEVELOPER
            </Typography>
            <Stack gap={3} sx={{ py: 2 }}>
              <Stack direction="row">
                <LocationIcon sx={{ mr: 2 }} />
                <Typography variant="body1" component="div">
                  Gornate Olona, Varese, Italy
                </Typography>
              </Stack>
              <Stack direction="row">
                <PhoneIcon sx={{ mr: 2 }} />
                <Typography
                  variant="body1"
                  component="a"
                  href="tel:+393494639954"
                  sx={{
                    color: 'inherit',
                    '&:link': { textDecoration: 'none' },
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  (+39)3494639954
                </Typography>
              </Stack>
              <Stack direction="row">
                <MailIcon sx={{ mr: 2 }} />
                <Typography
                  variant="body1"
                  component="a"
                  href="mailto:samuele.battistella92@gmail.com"
                  sx={{
                    color: 'inherit',
                    '&:link': { textDecoration: 'none' },
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  samuele.battistella92@gmail.com
                </Typography>
              </Stack>
            </Stack>
            <Stack gap={2} direction="row">
              <IconButton href={GIT_HUB_URL} target="_blank">
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton href={LINKEDIN_URL} target="_blank">
                <LinkedinIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
};

const About = (): JSX.Element => {
  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
      <Paper sx={{ borderRadius: 6, p: 3 }}>
        <Stack gap={2} sx={{ alignItems: 'center' }}>
          <Typography variant="h5" component="div">
            About me
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit enim culpa error vero facilis rem fugiat
            amet quod nobis expedita? Eligendi libero possimus quisquam, dolorum earum eum beatae in officiis.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut in qui optio rerum quas? Ex iste quis officia
            mollitia dolores a, sint odio minus recusandae nostrum. Ipsa, enim corrupti. Eaque tempora debitis iure
            eveniet harum laboriosam nostrum reprehenderit maxime modi odit! Alias quae deserunt laborum dolorem labore,
            assumenda quia quo.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora cumque quis natus esse non velit adipisci
            aliquam, rem ipsam corporis minima impedit perferendis dicta officiis nulla necessitatibus saepe et
            suscipit?
          </Typography>
          <Stack direction="row" sx={{ alignItems: 'center' }}>
            <Typography variant="body2" sx={{ mr: '4px' }}>
              Curriculum vitae
            </Typography>
            <Tooltip title="Download CV" placement="right">
              <IconButton href={curriculumPdf} download>
                <DownloadIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Head />
      <About />
    </ThemeProvider>
  );
};

export default App;
