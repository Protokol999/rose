import { Box, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  albina,
  alexandra,
  alina,
  nastya,
  vita
} from '../assets/comand/comand';

export const Comand = () => {
  const girls = [
    { img: alina, name: 'Алина', description: 'Reels Creator' },
    { img: alexandra, name: 'Александра', description: 'СММ Менеджер' },
    { img: albina, name: 'Альбина', description: 'Фотограф' },
    { img: vita, name: 'Вита', description: 'Боженька' },
    { img: nastya, name: 'Настя', description: 'Content Creator' }
  ];

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const accentColor = '#F7E4D6';

  return (
    <Box
      sx={{
        py: 10,
        background: '#1e1e1e',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Фоновые световые круги */}
      <motion.div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accentColor}40, transparent 70%)`,
          top: '-10%',
          left: '-10%',
          filter: 'blur(100px)',
          zIndex: 0,
          y: yParallax
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accentColor}40, transparent 70%)`,
          bottom: '-10%',
          right: '-10%',
          filter: 'blur(100px)',
          zIndex: 0,
          y: yParallax
        }}
      />

      {/* Заголовок */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Typography
          variant='h3'
          sx={{
            textAlign: 'center',
            mb: 8,
            fontFamily: '"Unbounded", sans-serif',
            fontWeight: 700,
            background: `linear-gradient(90deg, ${accentColor}, ${accentColor}99, ${accentColor})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 10s ease infinite',
            letterSpacing: '1px'
          }}
        >
          Наша супер команда
        </Typography>
      </motion.div>

      {/* Фото участников */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 3, md: 4 },
          px: { xs: 2, md: 8 },
          zIndex: 2,
          position: 'relative',
          flexWrap: { xs: 'nowrap', md: 'wrap' }
        }}
      >
        {girls.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            style={{
              position: 'relative',
              flex: '1 1 200px',
              minWidth: '220px',
              maxWidth: '260px',
              height: '400px',
              overflow: 'hidden',
              borderRadius: '20px',
              cursor: 'pointer',
              boxShadow: `0 0 25px ${accentColor}33`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            {/* Фото */}
            <motion.img
              src={item.img}
              alt={item.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'all 0.5s ease',
                borderRadius: '20px'
              }}
              whileHover={{ scale: 1.1, filter: 'brightness(0.7)' }}
            />

            {/* Оверлей с текстом */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(to top, rgba(17,17,17,0.85), transparent 70%)`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: '40px'
              }}
              className='overlayText'
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 18, md: 24 },
                  mb: 1,
                  color: accentColor,
                  textShadow: `0 0 12px ${accentColor}66`,
                  textAlign: 'center'
                }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 18 },
                  color: accentColor + '99',
                  letterSpacing: '0.5px',
                  textAlign: 'center'
                }}
              >
                {item.description}
              </Typography>
            </motion.div>
          </motion.div>
        ))}
      </Box>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Hover только на больших экранах */
        @media (min-width: 768px) {
          .overlayText {
            opacity: 0;
          }
          .overlayText:hover {
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
};
