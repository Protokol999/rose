import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { rose } from '../assets';

export const About = ({ onClose }) => {
  const accentColor = '#F7E4D6'; // основной цвет акцента
  const textColor = '#F7E4D6CC'; // мягкий светлый для текста

  const services = [
    {
      id: 1,
      title: 'Полная трансформация ',
      text: 'Мы структурируем ваш бизнес, обеспечивая стабильный рост и эффективность.'
    },
    {
      id: 2,
      title: 'Креатив и аналитика ',
      text: 'Каждое решение подкреплено данными и аналитикой, чтобы ваши проекты работали.'
    },
    {
      id: 3,
      title: 'Юмор и вовлечение ',
      text: 'Создаём контент, который цепляет аудиторию и повышает вовлечённость.'
    },
    {
      id: 4,
      title: 'Гарантия репутации ',
      text: 'Мы отвечаем за результат своей репутацией, без негативных отзывов.'
    },
    {
      id: 5,
      title: 'Визуальный шедевр ',
      text: 'Фото и видео премиум-качества, которые поднимают имидж вашего бренда.'
    },
    {
      id: 6,
      title: 'Эффект "Вау!" ',
      text: 'После нашей работы ваши соцсети будут впечатлять даже вас самих.'
    },
    {
      id: 7,
      title: 'Эксклюзивный подход ',
      text: 'Каждый бренд уникален — мы подчеркиваем индивидуальность каждого проекта.'
    }
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        marginTop: { xs: '55px', sm: '65px' },
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        overflowY: 'auto',
        zIndex: 2000,
        fontFamily: '"Unbounded", sans-serif',
        padding: { xs: '12px', sm: '24px' },
        background: 'radial-gradient(circle at center, #111111, #000000 90%)'
      }}
    >
      {/* Движущиеся блики */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              borderRadius: '50%',
              background: accentColor,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: ['0%', '100%'],
              x: [`0%`, `${Math.random() * 50 - 25}%`],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 8 + 6,
              ease: 'linear',
              repeatType: 'loop'
            }}
          />
        ))}
      </Box>

      {/* Основной модал */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(145deg, #1a1a1a, #222222)',
          color: accentColor,
          borderRadius: '20px',
          padding: { xs: '20px', sm: '30px', md: '40px' },
          width: { xs: '100%', sm: '85%', md: '70%', lg: '60%' },
          maxHeight: { xs: '80vh', sm: '85vh' },
          overflowY: 'auto',
          boxShadow: `0 0 50px ${accentColor}77`,
          zIndex: 2
        }}
      >
        {/* Анимированные лучи света */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            overflow: 'hidden',
            borderRadius: '20px',
            zIndex: 1
          }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '100%',
                height: '120%',
                top: '-10%',
                left: `${i * 25}%`,
                background: `linear-gradient(120deg, rgba(247,228,214,0.15), transparent, rgba(247,228,214,0.15))`,
                transform: 'skewX(-25deg)',
                filter: 'blur(20px)'
              }}
              animate={{ y: ['-120%', '120%'] }}
              transition={{ repeat: Infinity, duration: 6 + i, ease: 'linear' }}
            />
          ))}
        </motion.div>

        {/* Кнопка закрытия */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: '#B0B0B0',
            transition: '0.3s',
            '&:hover': {
              color: accentColor,
              backgroundColor: 'rgba(247,228,214,0.2)',
              transform: 'rotate(90deg)'
            },
            zIndex: 3
          }}
        >
          <CloseIcon fontSize='small' />
        </IconButton>

        {/* Заголовок */}
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: { xs: 1.5, sm: 2 },
            color: accentColor,
            letterSpacing: '0.4px',
            textShadow: `0 0 12px ${accentColor}66`,
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.7rem' },
            zIndex: 3
          }}
        >
          Секрет Нашего Успеха: Почему Клиенты Выбирают Нас
        </Typography>

        {/* Контент */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 3 }}
          alignItems='flex-start'
          justifyContent='center'
          sx={{ position: 'relative', zIndex: 3 }}
        >
          {/* Изображение */}
          <Box
            component='img'
            src={rose}
            alt='Rose Creative'
            sx={{
              width: { xs: '100%', md: '35%' },
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: `0 5px 25px ${accentColor}55`,
              animation: 'imgIn 0.6s ease-out forwards',
              opacity: 0,
              '@keyframes imgIn': {
                from: { transform: 'translateX(-30px)', opacity: 0 },
                to: { transform: 'translateX(0)', opacity: 1 }
              }
            }}
          />

          {/* Текст */}
          <Stack
            spacing={1.2}
            sx={{
              flex: 1,
              animation: 'fadeIn 0.8s ease-out 0.2s forwards',
              opacity: 0,
              '@keyframes fadeIn': {
                from: { transform: 'translateY(15px)', opacity: 0 },
                to: { transform: 'translateY(0)', opacity: 1 }
              }
            }}
          >
            {services.map(s => (
              <Box key={s.id}>
                <Typography
                  variant='subtitle2'
                  sx={{
                    color: accentColor,
                    fontWeight: 500,
                    mb: 0.3,
                    fontSize: { xs: '14px', sm: '15px', md: '17px' }
                  }}
                >
                  {`${s.id}. ${s.title}`}
                </Typography>
                <Typography
                  sx={{
                    color: textColor,
                    lineHeight: 1.4,
                    fontSize: { xs: '12px', sm: '13px', md: '15px' }
                  }}
                >
                  {s.text}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>

        {/* Нижняя декоративная линия */}
        <Box
          sx={{
            width: '100%',
            height: '2.5px',
            mt: 3,
            borderRadius: '2px',
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            zIndex: 3
          }}
        />
      </Box>
    </Box>
  );
};
