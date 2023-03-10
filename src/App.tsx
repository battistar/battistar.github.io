import { Avatar, Box, Container, IconButton, Paper, Stack, Typography } from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedinIcon,
} from '@mui/icons-material';
import profileImg from 'assets/profile.jpeg';

const GIT_HUB_URL = 'https://github.com/battistar';
const LINKEDIN_URL = 'https://www.linkedin.com/in/samuele-battistella-ab15b3141';

const Head = (): JSX.Element => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: { xs: '91px', md: '116px' } }}>
        <Paper sx={{ position: 'relative', borderRadius: 6, pt: { xs: '99px', md: '124px' }, pb: 2, px: 2 }}>
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

const App = (): JSX.Element => {
  return (
    <div>
      <Head />
    </div>
  );
};

export default App;
