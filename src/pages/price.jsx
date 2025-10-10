import { Box, Button, Stack, Typography } from '@mui/material';
import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useTransform
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const Price = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-150px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const prices = [
    {
      title: 'Базовый',
      price: '600 €/мес',
      features: [
        'Анализ бизнеса, составление портрета клиента',
        'Создание или реконструкция страниц в соцсетях',
        'Разработка контент-плана на 9 постов',
        'Фотосъемка — 1 час'
      ],
      color: '#F7E4D6',
      glow: 'rgba(247,228,214,0.5)'
    },
    {
      title: 'Продвинутый',
      price: '850 €/мес',
      features: [
        'Всё из пакета за 600 евро +',
        'Создание сценариев для Reels (2–3 видео)',
        'Фото/видеосъемка — 3 часа'
      ],
      color: '#F7E4D6',
      glow: 'rgba(247,228,214,0.4)'
    },
    {
      title: 'Премиум',
      price: '1200 €/мес',
      features: [
        'Всё из пакета за 850 евро +',
        'Комплексная стратегия присутствия',
        'Дизайн макеты и Stories (20 слайдов)',
        'Таргетинг и продвижение постов'
      ],
      color: '#F7E4D6',
      glow: 'rgba(247,228,214,0.4)'
    }
  ];

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 2, md: 4 },
        background: 'linear-gradient(180deg, #0A0A0A 0%, #141414 100%)',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* фоновая дымка */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 40%, rgba(247,228,214,0.12), transparent 70%), radial-gradient(circle at 80% 70%, rgba(247,228,214,0.1), transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0
        }}
      />

      {/* заголовок */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: { xs: 6, md: 10 },
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
          height: { xs: 80, md: 150 }
        }}
      >
        <Typography
          variant='h2'
          sx={{
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 700,
            color: '#F7E4D6',
            display: 'inline-block',
            fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' },
            textShadow: '0 0 15px rgba(247,228,214,0.7)'
          }}
        >
          {'Наши тарифы'.split('').map((char, i) => {
            const isSpace = char === ' ';
            const fromLeft = i < 5;
            return (
              <motion.span
                key={i}
                initial='hidden'
                animate={controls}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: fromLeft ? -500 : 500,
                    y: -80,
                    rotateZ: fromLeft ? -10 : 10,
                    scale: 0.95,
                    filter: 'blur(6px)'
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: [-80, 0, -10, 0],
                    rotateZ: 0,
                    scale: 1,
                    filter: 'blur(0px)'
                  }
                }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: 'easeOut' }}
                style={{
                  display: 'inline-block',
                  marginRight: isSpace ? '0.3em' : '0.05em'
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </Typography>
      </Box>

      {/* карточки */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
        spacing={{ xs: 4, md: 5 }}
        sx={{ position: 'relative', zIndex: 2 }}
      >
        {prices.map((plan, index) => (
          <PriceCard
            key={index}
            {...plan}
            delay={index * 0.2}
            controls={controls}
          />
        ))}
      </Stack>
    </Box>
  );
};

const PriceCard = ({
  title,
  price,
  features,
  color,
  glow,
  delay,
  controls
}) => {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -180, scale: 0.8 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.8, delay }
        },
        hidden: { opacity: 0, y: -180, scale: 0.8 }
      }}
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        x.set(0);
        y.set(0);
      }}
      style={{
        flex: '1 1 320px',
        maxWidth: 380,
        minHeight: 480,
        borderRadius: '28px',
        cursor: 'pointer',
        perspective: 1200
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          scale: hovered ? 1.08 : 1,
          y: hovered ? -30 : 0,
          transition: 'all 0.35s ease'
        }}
      >
        <Box
          sx={{
            background: '#1e1e1e',
            backdropFilter: 'blur(25px)',
            borderRadius: '28px',
            p: { xs: 4, sm: 5 },
            border: `2px solid ${hovered ? color : 'rgba(255,255,255,0.05)'}`,
            boxShadow: hovered
              ? `0 0 50px ${glow}, inset 0 0 30px rgba(255,255,255,0.03)`
              : `0 0 15px rgba(255,255,255,0.05)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            transition: '0.4s'
          }}
        >
          <Typography
            variant='h4'
            sx={{
              fontWeight: 700,
              mb: 1,
              color,
              fontFamily: '"Poppins", sans-serif',
              textShadow: `0 0 10px ${glow}`
            }}
          >
            {title}
          </Typography>

          <Typography
            variant='h4'
            sx={{
              fontWeight: 700,
              color: '#fff',
              mb: 3,
              textShadow: `0 0 15px ${glow}`
            }}
          >
            {price}
          </Typography>

          {features.map((feature, i) => (
            <Typography
              key={i}
              sx={{
                fontSize: { xs: '14px', sm: '15px' },
                color: '#ddd',
                mb: 1.4,
                opacity: 0.9
              }}
            >
              • {feature}
            </Typography>
          ))}

          <Button
            variant='contained'
            sx={{
              mt: 4,
              borderRadius: '40px',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: { xs: '18px', sm: '22px' },
              background: `linear-gradient(90deg, ${color}, ${color}CC)`,
              color: '#000',
              px: { xs: 4, sm: 5 },
              py: { xs: 1.2, sm: 1.4 },
              '&:hover': {
                transform: 'translateY(-6px)',
                background: `linear-gradient(90deg, ${color}CC, ${color})`
              },
              transition: 'all 0.3s ease'
            }}
          >
            Выбрать
          </Button>
        </Box>
      </motion.div>
    </motion.div>
  );
};
