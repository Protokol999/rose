import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { AppBar, Box, Link, Stack, Toolbar, Typography } from '@mui/material';
import { logo } from '../assets/index';

export const Navbar = () => {
  return (
    <AppBar
      sx={{
        // *** ИЗМЕНЕНИЕ: Полностью прозрачный фон и убран блюр ***
        backgroundColor: 'transparent',
        boxShadow: 'none', // Убираем тень, чтобы не было видно границы

        position: 'absolute', // Абсолютное позиционирование, чтобы не влиять на контент
        top: 0,
        // zIndex: 1100, // Высокий Z-index оставлен для перекрытия контента

        // *** ИЗМЕНЕНИЕ: Уменьшаем вертикальный padding для компактности ***
        px: { xs: 1, sm: 3, md: 5 },
        py: { xs: 1, sm: 1.5 }
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'nowrap',
          gap: { xs: 0.5, sm: 1 }
        }}
      >
        {/* Лого */}
        <Link href='/' underline='none' sx={{ flexShrink: 0 }}>
          <Box
            component='img'
            src={logo}
            alt='Logo'
            sx={{
              // *** ИЗМЕНЕНИЕ: Логотип стал меньше на всех размерах (особенно на sm/md) ***
              height: { xs: 35, sm: 60, md: 100 },
              width: 'auto',
              cursor: 'pointer',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.05)' }
            }}
          />
        </Link>

        {/* Контакты + соцсети */}
        <Stack
          direction='row'
          spacing={{ xs: 0.8, sm: 1 }} // Немного уменьшен spacing на sm
          alignItems='center'
          sx={{
            justifyContent: 'flex-end',
            textAlign: 'right',
            flexShrink: 0
          }}
        >
          <Typography
            component='a'
            href='tel:+37369200775'
            sx={{
              fontFamily: '"Unbounded", Sans-serif',
              // Размеры шрифта номера телефона остались прежними для читаемости
              fontSize: { xs: '12px', sm: '18px', md: '24px' },
              fontWeight: 600,
              color: '#F7E4D6',
              textDecoration: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              '&:hover': { textDecoration: 'underline' },
              flexShrink: 0
            }}
            aria-label='Позвонить +373 69 200 775'
          >
            +373 (69) 200-775
          </Typography>

          {/* Instagram */}
          <Link
            href='https://www.instagram.com/rose__creative/?utm_medium=copy_link'
            underline='none'
            target='_blank'
            sx={{ flexShrink: 0 }}
          >
            <InstagramIcon
              sx={{
                // *** ИЗМЕНЕНИЕ: Уменьшаем иконки на md ***
                fontSize: { xs: 20, sm: 25, md: 30 },
                color: '#ffffff',
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.2)' }
              }}
            />
          </Link>

          {/* Facebook */}
          <Link
            href='https://www.facebook.com/RoseCreativeTeam'
            underline='none'
            target='_blank'
            sx={{ flexShrink: 0 }}
          >
            <FacebookIcon
              sx={{
                fontSize: { xs: 20, sm: 25, md: 30 },
                color: '#ffffff',
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.2)' }
              }}
            />
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
