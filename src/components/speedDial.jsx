import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

const actions = [
  {
    icon: <AlternateEmailIcon />,
    name: 'Email',
    link: 'mailto:rosecreative13@gmail.com'
  },
  {
    icon: <LocalPhoneIcon />,
    name: 'Phone',
    link: 'tel:+37369200775'
  },
  {
    icon: <InstagramIcon />,
    name: 'Instagram',
    link: 'https://www.instagram.com/rose__creative/?utm_medium=copy_link'
  },
  {
    icon: <FacebookIcon />,
    name: 'Facebook',
    link: 'https://www.facebook.com/RoseCreativeTeam'
  }
];

export const Speed = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 2000
      }}
    >
      <SpeedDial
        ariaLabel='Contact links'
        icon={<SpeedDialIcon />}
        FabProps={{
          sx: {
            bgcolor: '#f7e4d6', // основной цвет
            color: '#222', // контрастный цвет иконки
            '&:hover': {
              bgcolor: '#f2d3bf',
              transform: 'scale(1.05)',
              transition: '0.3s'
            }
          }
        }}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement='left'
            onClick={() => window.open(action.link, '_blank')} // открытие ссылки при клике
            sx={{
              bgcolor: '#1d1d1d',
              '&:hover': {
                bgcolor: '#333',
                transform: 'scale(1.1)',
                transition: '0.25s'
              },
              '& svg': {
                fontSize: '3rem',
                color: '#f7e4d6'
              }
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
