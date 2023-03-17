import { Avatar, Box, Container, IconButton, Paper, Stack, Typography } from '@mui/material';
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
import curriculumPdf from 'assets/cv_samuele_battistella_en.pdf';

const GIT_HUB_URL = 'https://github.com/battistar';
const LINKEDIN_URL = 'https://www.linkedin.com/in/samuele-battistella-ab15b3141';

const Head = (): JSX.Element => {
  return (
    <Container component="section" maxWidth="sm">
      <Box sx={{ mt: { xs: '91px', sm: '99px', md: '116px' } }}>
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
    <Container component="section" maxWidth="lg" sx={{ my: { xs: 2, sm: 3 } }}>
      <Paper sx={{ borderRadius: 6, p: 3 }}>
        <Stack gap={2}>
          <Typography variant="h5" textAlign="center">
            About me
          </Typography>
          <Typography variant="body1">
            Born in &apos;92, I fall in love with computer since childhood, when the first family&apos;s PC arrived at
            home (if I remeber right, a machine with Pentium II and 32 MB of RAM, what a beast!). Whenever possible, I
            watched my brother using it. Then, when he sometimes opened the PC case to do some hardware upgrade, I saw
            all those integrated circuits and cables that can run programs and videogames: I absolutely had to figure
            out how does it work!
          </Typography>
          <Typography variant="body1">
            Time passed and another passion grew inside me: music. Band like Deep Purple and Iron Maiden hooked me. I
            approached the study of bass guitar, I started playing in different bands and going to the first concerts,
            until I was able to perform live!
          </Typography>
          <Typography variant="body1">
            Thanks those passions, I decided to start music computer science degree course, at the university of Milan.
            Then I graduated in 2017.
          </Typography>
          <Typography variant="body1">
            Therefore my professional career began. I had the possibility to work with different tecnologies: I worked
            as mobile app developer, first with Android then with iOS. I also worked as backend developer with Java, and
            with Elixir a lot. I studied and I applied different architecture from &quot;LAMP like&quot; to
            microservices, and the lesser known CQRS/ES.
          </Typography>
          <Typography variant="body1">
            At the current days, do to my inclination on appreciate more &quot;multimedia&quot; projects, I&apos;m
            focused on the frontend developing with Javascript, expecially with React framework. I&apos;ve chosen
            Javascript because is one of the most popular programming languages and it&apos;s the foundation of a lot of
            frameworks and tecnologies, from the frontend developing to the backend, fullstack and desktop: ReactJS,
            NodeJS, ExpressJS, NextJS, Electron, etc.
          </Typography>
          <Typography variant="body1">If you want to know me better, feel free to contact me!</Typography>
          <Stack gap={1} sx={{ alignItems: 'center', mt: 3 }}>
            <Typography variant="body2" textAlign="center">
              Download my curriculum vitae
            </Typography>
            <IconButton href={curriculumPdf} download>
              <DownloadIcon />
            </IconButton>
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
      <main>
        <Head />
        <About />
      </main>
    </ThemeProvider>
  );
};

export default App;
