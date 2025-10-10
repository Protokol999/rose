import { ArrowDownward } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { About } from '../components/about';
import { home } from '../video';
import { Portfolio } from './portfolio';

export const Home = () => {
  const [show, setShow] = useState(false);
  // 1. Создаем useRef для секции Портфолио
  const portfolioRef = useRef(null);

  // 2. Функция для плавного скролла к секции Портфолио
  const scrollToPortfolio = () => {
    // Используем scrollIntoView для прокрутки к элементу, на который ссылается portfolioRef
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const accentColor = '#F7E4D6';

  return (
    <Box>
      {/* Главный экран */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
        >
          <source src={home} type='video/mp4' />
        </video>

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            color: accentColor,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            textAlign: 'center',
            px: 2
          }}
        >
          <Typography
            variant='h1'
            sx={{
              fontFamily: '"Unbounded", Sans-serif',
              fontWeight: 700,
              fontSize: { xs: '2.2rem', sm: '3rem', md: '5rem' },
              lineHeight: 1.2,
              textShadow: `0 0 20px ${accentColor}99`
            }}
          >
            ROSE CREATIVE
          </Typography>

          <Typography
            variant='h4'
            sx={{
              fontFamily: '"Unbounded", Sans-serif',
              fontWeight: 700,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
              mt: 1,
              textShadow: `0 0 15px ${accentColor}77`
            }}
          >
            Боженьки маркетинга
          </Typography>

          <Button
            variant='outlined'
            onClick={() => setShow(true)}
            sx={{
              borderRadius: '90px',
              color: '#4B2E05',
              backgroundColor: `${accentColor}`,
              border: `1px solid ${accentColor}`,
              mt: 3,
              px: { xs: '20px', sm: '25px' },
              py: { xs: '8px', sm: '10px' },
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              letterSpacing: '1px',
              transition: 'all 0.4s ease',
              '&:hover': {
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(247, 228, 214, 0.15)',
                transform: 'scale(1.08)',
                borderColor: accentColor,
                color: `${accentColor}`,
                boxShadow: `0 0 20px ${accentColor}55`
              }
            }}
          >
            Узнать больше
          </Button>
        </Box>

        {/* Стрелка вниз - привязана к scrollToPortfolio */}
        <IconButton
          onClick={scrollToPortfolio}
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: accentColor,
            animation: 'bounce 2s infinite',
            fontSize: { xs: '2rem', sm: '2.5rem' }
          }}
        >
          <ArrowDownward fontSize='inherit' sx={{ cursor: 'pointer' }} />
        </IconButton>

        <style>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(10px); }
            60% { transform: translateX(-50%) translateY(5px); }
          }
        `}</style>

        {show && <About onClose={() => setShow(false)} />}
      </Box>

      {/* Portfolio секция - тут установлен ref для прокрутки */}
      <Box ref={portfolioRef}>
        <Portfolio />
      </Box>
    </Box>
  );
};
