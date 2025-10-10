import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography
} from '@mui/material';
import { logo } from '../assets';

export const Footer = () => {
  const mainColor = '#f7e4d6';
  const darkBg = '#1e1e1e';
  const dividerColor = '#3a3a3a'; // Немного светлее, чем #2b2b2b

  const iconButtonHover = {
    border: `1px solid ${mainColor}`,
    color: mainColor,
    transition: '0.3s',
    '&:hover': {
      bgcolor: mainColor,
      color: darkBg,
      transform: 'translateY(-3px) scale(1.1)', // Небольшой подъем для эффекта
      boxShadow: `0 5px 15px ${mainColor}55`
    }
  };

  return (
    <Box
      sx={{
        bgcolor: darkBg,
        color: mainColor,
        py: { xs: 6, md: 8 }, // Уменьшаем вертикальный padding на xs
        px: { xs: 2, sm: 4, md: 12 },
        borderTop: `1px solid ${dividerColor}`
      }}
    >
      {/* ЛОГОТИП */}
      <Box
        component='img'
        src={logo}
        alt='Rose Creative Logo'
        sx={{
          textAlign: 'center',
          mb: { xs: 4, md: 6 },
          width: 'auto',
          height: 'auto',
          maxWidth: '250px',
          maxHeight: '120px',
          '@media (max-width: 600px)': {
            maxWidth: '200px',
            maxHeight: '90px'
          },
          filter:
            'invert(88%) sepia(16%) saturate(283%) hue-rotate(343deg) brightness(104%) contrast(93%)',
          transition: '0.5s' // Меньший отступ на xs
        }}
      ></Box>

      {/* Основной контент */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='space-between'
        alignItems='stretch'
        spacing={{ xs: 5, md: 0 }} // Уменьшаем интервал на xs
      >
        {/* --- Разделители, управляемые через Box, для корректной адаптивности --- */}

        {/* EMAIL */}
        <Box sx={{ flex: 1, textAlign: 'center', px: { xs: 0, md: 4 } }}>
          <Typography
            variant='h6'
            sx={{
              mb: 1,
              fontWeight: 700,
              fontSize: { xs: '1.15rem', md: '1.25rem' }
            }}
          >
            Хотите работать с нами?
          </Typography>
          <Typography
            variant='body2'
            sx={{ opacity: 0.7, fontSize: { xs: '0.85rem', md: '0.9rem' } }}
          >
            Напишите нам
          </Typography>
          <Link
            href='mailto:rosecreative13@gmail.com'
            variant='body1'
            underline='hover'
            sx={{
              mt: 1,
              fontWeight: 500,
              color: mainColor,
              textDecorationColor: mainColor,
              display: 'block', // Чтобы mt работало
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            rosecreative13@gmail.com
          </Link>
        </Box>

        {/* Вертикальный разделитель (только для Desktop) */}
        <Divider
          orientation='vertical'
          flexItem
          sx={{
            borderColor: dividerColor,
            display: { xs: 'none', md: 'block' }
          }}
        />

        {/* Горизонтальный разделитель (только для Mobile) */}
        <Divider
          sx={{
            borderColor: dividerColor,
            display: { xs: 'block', md: 'none' }
          }}
        />

        {/* PHONE */}
        <Box sx={{ flex: 1, textAlign: 'center', px: { xs: 0, md: 4 } }}>
          <Typography
            variant='h6'
            sx={{
              mb: 1,
              fontWeight: 700,
              fontSize: { xs: '1.15rem', md: '1.25rem' }
            }}
          >
            Обсудим ваш проект?
          </Typography>
          <Typography
            variant='body2'
            sx={{ opacity: 0.7, fontSize: { xs: '0.85rem', md: '0.9rem' } }}
          >
            Позвоните нам
          </Typography>
          <Link
            href='tel:+37369200775'
            variant='body1'
            underline='hover'
            sx={{
              mt: 1,
              fontWeight: 500,
              color: mainColor,
              textDecorationColor: mainColor,
              display: 'block',
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            +373 (69) 200-775
          </Link>
        </Box>

        {/* Вертикальный разделитель (только для Desktop) */}
        <Divider
          orientation='vertical'
          flexItem
          sx={{
            borderColor: dividerColor,
            display: { xs: 'none', md: 'block' }
          }}
        />

        {/* Горизонтальный разделитель (только для Mobile) */}
        <Divider
          sx={{
            borderColor: dividerColor,
            display: { xs: 'block', md: 'none' }
          }}
        />

        {/* SOCIAL */}
        <Box sx={{ flex: 1, textAlign: 'center', px: { xs: 0, md: 4 } }}>
          <Typography
            variant='h6'
            sx={{
              mb: 1,
              fontWeight: 700,
              fontSize: { xs: '1.15rem', md: '1.25rem' }
            }}
          >
            Найдите нас в соцсетях
          </Typography>
          <Typography
            variant='body2'
            sx={{
              opacity: 0.7,
              mb: { xs: 1.5, md: 2 },
              fontSize: { xs: '0.85rem', md: '0.9rem' }
            }}
          >
            SOCIAL MEDIA
          </Typography>
          <Stack direction='row' spacing={2} justifyContent='center'>
            <Link
              href='https://www.facebook.com/RoseCreativeTeam'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconButton sx={iconButtonHover}>
                <FacebookIcon />
              </IconButton>
            </Link>

            <Link
              href='https://www.instagram.com/rose__creative/?utm_medium=copy_link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconButton sx={iconButtonHover}>
                <InstagramIcon />
              </IconButton>
            </Link>

            <Link href='tel:+37369200775'>
              <IconButton sx={iconButtonHover}>
                <LocalPhoneIcon />
              </IconButton>
            </Link>
          </Stack>
        </Box>
      </Stack>

      {/* Линия и копирайт */}
      <Divider sx={{ my: { xs: 4, md: 6 }, borderColor: dividerColor }} />
      <Typography
        variant='body2'
        sx={{
          textAlign: 'center',
          opacity: 0.6,
          fontSize: { xs: '0.75rem', md: '0.9rem' } // Уменьшаем шрифт на xs
        }}
      >
        © 2025 Rose Creative. Все права защищены.
      </Typography>
    </Box>
  );
};
