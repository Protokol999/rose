import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  // ... импорты клиентов ...
  bibliotheque,
  bimatex,
  boxCatering,
  bradetchi,
  certificat,
  combinatul,
  deia,
  eco,
  entourag,
  epil,
  estel,
  garden,
  gaviar,
  heel,
  hespera,
  hugge,
  jomaclient,
  lemonique,
  luna,
  lv,
  miPiace,
  personal,
  radacini,
  sakura,
  sushiMaster,
  svitol,
  sweet,
  teatrum,
  villa,
  yapona
} from '../assets/clientsi/client';

export const Clients = () => {
  const clients = [
    // ... список 31 клиента ...
    bibliotheque,
    bimatex,
    boxCatering,
    bradetchi,
    certificat,
    combinatul,
    deia,
    eco,
    entourag,
    epil,
    estel,
    garden,
    gaviar,
    heel,
    hespera,
    hugge,
    jomaclient,
    lemonique,
    luna,
    lv,
    miPiace,
    personal,
    radacini,
    sakura,
    sushiMaster,
    svitol,
    sweet,
    teatrum,
    villa,
    yapona
  ]; // Всего 31 элемент

  // --- Разделение на 3 подмассива ---
  const chunkSize = Math.ceil(clients.length / 3); // 31 / 3 = 11 (округляем вверх)

  const clientsLine1 = clients.slice(0, chunkSize); // 11 логотипов
  const clientsLine2 = clients.slice(chunkSize, chunkSize * 2); // 10 логотипов
  const clientsLine3 = clients.slice(chunkSize * 2); // 10 логотипов

  // Дублируем каждую линию отдельно для бесшовной прокрутки
  const repeatedClients1 = [...clientsLine1, ...clientsLine1];
  const repeatedClients2 = [...clientsLine2, ...clientsLine2];
  const repeatedClients3 = [...clientsLine3, ...clientsLine3];

  // Настройки Marquee
  // Скорости подобраны для создания многослойности:
  // 1. Быстрая: 8s (вправо)
  // 2. Средняя: 15s (влево)
  // 3. Медленная: 22s (вправо)
  const marqueeVariants = (direction = 1, speed) => ({
    animate: {
      x: direction === 1 ? ['0%', '-50%'] : ['-50%', '0%'],
      transition: {
        x: { repeat: Infinity, duration: speed, ease: 'linear' }
      }
    }
  });

  const mainColor = '#F7E4D6';

  const marqueeContainerStyles = {
    position: 'relative',
    zIndex: 1,
    // Градиентная маска по краям
    maskImage:
      'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
    WebkitMaskImage:
      'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
  };

  const logoStyles = {
    width: '120px', // Немного уменьшим размер логотипов, чтобы вместить 3 ленты
    height: 'auto',
    filter: 'grayscale(70%) brightness(1.3)',
    opacity: 0.85,
    transition: 'all 0.3s ease',
    borderRadius: '8px'
  };

  const hoverStyles = {
    scale: 1.2, // Увеличим ховер-эффект
    filter: 'grayscale(0%) brightness(1.05)',
    opacity: 1,
    boxShadow: `0 0 20px ${mainColor}, 0 0 40px ${mainColor}66`
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        background: '#0D0D0F',
        color: '#fff',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* 🌌 Фон с мягким свечением */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '1000px',
          height: '1000px',
          background: `radial-gradient(circle, ${mainColor}40, transparent 70%)`,
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          filter: 'blur(100px)',
          animation: 'pulse 5s ease-in-out infinite alternate'
        }}
      />

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.95); }
            100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.05); }
          }
        `}
      </style>

      {/* 💎 Заголовок и описание */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
            position: 'relative',
            zIndex: 1
          }}
        >
          <Typography
            variant='h3'
            sx={{
              fontFamily: '"Unbounded", sans-serif',
              fontWeight: 700,
              background: `linear-gradient(90deg, ${mainColor}, ${mainColor}CC)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: `0 0 15px ${mainColor}77`,
              mb: 1
            }}
          >
            КЛИЕНТЫ, С КОТОРЫМИ МЫ РАБОТАЕМ
          </Typography>

          <Typography
            variant='h5'
            sx={{
              color: `${mainColor}aa`,
              fontFamily: '"Inter", sans-serif',
              maxWidth: '800px',
              lineHeight: 1.5,
              fontSize: { xs: '1rem', md: '1.2rem' },
              textShadow: `0 0 10px #00000088`,
              mx: 'auto', // Центрируем
              mt: 2
            }}
          >
            За годы работы мы реализовали десятки digital-проектов и заслужили
            доверие **ведущих брендов**. Наш фокус — на эффективности, росте и
            узнаваемости в digital-среде 💫
          </Typography>
        </Box>
      </motion.div>

      {/* ------------------- */}

      {/* 🔁 Лента 1 (Быстрая: 8s, Вправо) */}
      <Box sx={{ ...marqueeContainerStyles, mb: '40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={marqueeVariants(1, 8)}
          animate='animate'
          style={{
            display: 'flex',
            gap: '60px', // Уменьшаем зазор, чтобы лента выглядела плотнее
            whiteSpace: 'nowrap',
            alignItems: 'center',
            width: '200%'
          }}
        >
          {repeatedClients1.map((img, i) => (
            <motion.img
              key={`line1-${i}`}
              src={img}
              alt={`client-${i}`}
              style={logoStyles}
              whileHover={hoverStyles}
            />
          ))}
        </motion.div>
      </Box>

      {/* 🔁 Лента 2 (Средняя: 15s, Влево) */}
      <Box sx={{ ...marqueeContainerStyles, mb: '40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          variants={marqueeVariants(-1, 15)}
          animate='animate'
          style={{
            display: 'flex',
            gap: '60px',
            whiteSpace: 'nowrap',
            alignItems: 'center',
            width: '200%'
          }}
        >
          {repeatedClients2.map((img, i) => (
            <motion.img
              key={`line2-${i}`}
              src={img}
              alt={`client-${i}`}
              style={logoStyles}
              whileHover={hoverStyles}
            />
          ))}
        </motion.div>
      </Box>

      {/* 🔁 Лента 3 (Медленная: 22s, Вправо) */}
      <Box sx={marqueeContainerStyles}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          variants={marqueeVariants(1, 22)}
          animate='animate'
          style={{
            display: 'flex',
            gap: '60px',
            whiteSpace: 'nowrap',
            alignItems: 'center',
            width: '200%'
          }}
        >
          {repeatedClients3.map((img, i) => (
            <motion.img
              key={`line3-${i}`}
              src={img}
              alt={`client-${i}`}
              style={logoStyles}
              whileHover={hoverStyles}
            />
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};
