import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from '@mui/material';

import Link from 'src/components/Link';
import Image from 'next/image';
import Logo from '@/components/logo';
import Developer from './Developer';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(70)};
`
);

const TypographyH12 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(55)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(22)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
`
);

const TeamWrapper = styled(Grid)(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 2rem 0 0 0;
    padding: 0;
    flex-wrap: wrap;    
`
);

const TypographyH14 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(45)};
`
);

export default function MainContent() {
  return (
    <Container maxWidth='lg' sx={{ textAlign: 'center' }}>
      <Grid
        paddingTop='2rem'
        spacing={{ xs: 6, md: 10 }}
        justifyContent='center'
        alignItems='center'
        container
      >
        <Grid item md={10} lg={8} mx='auto'>
          <LabelWrapper color='success'>Version 1.0.0</LabelWrapper>
          <Box>
            <Image alt='logo' height={600} width={600} src='/bigLogo.png' />
            {/* <Logo /> */}
          </Box>
          <TypographyH12 sx={{ mb: 2 }} variant='h1'>
            Kafka Integrated Testing Environment
          </TypographyH12>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant='h4'
            color='text.secondary'
            fontWeight='normal'
          >
            A comprehensive prototyping, testing, and monitoring toolset built
            for Apache Kafka. Use xKite to bootstrap your next project, or
            install our library into an existing project. Built by (and for)
            developers.
          </TypographyH2>
          <Button
            component={Link}
            href='/configuration'
            size='large'
            variant='contained'
          >
            Get Started
          </Button>
          <Button
            sx={{ ml: 2 }}
            component={Link}
            target='_blank'
            href='https://github.com/oslabs-beta/xkite'
            size='large'
            variant='text'
          >
            Contribute Today
          </Button>
        </Grid>
      </Grid>
      <TypographyH14 sx={{ mb: 2, mt: 20 }} variant='h1'>
        Meet the Team!
      </TypographyH14>
      <TeamWrapper>
        <Developer
          name='John Hamlin'
          img='/John.png'
          github='johnhamlin'
          linkedin='hamlinjohn'
        />
        <Developer
          name='Issam Eljitan'
          img='/team/Issam.png'
          github='issam-eljitan'
          linkedin='issam-eljitan'
        />
        <Developer
          name='Irina Khafizova'
          img='/team/Irina.png'
          github='khafizka'
          linkedin='irina-khafizova'
        />
        <Developer
          name='Mark Krasner'
          img='/team/Mark.png'
          github='mzkrasner'
          linkedin='krasnermark'
        />
        <Developer
          name='Zahara Aviv'
          img='/team/Zahara.png'
          github='zahara-aviv'
          linkedin='zahara'
        />
      </TeamWrapper>
    </Container>
  );
}
