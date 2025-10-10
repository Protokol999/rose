import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useTransform
} from 'framer-motion';
import { useRef, useState } from 'react'; // Добавляем useRef
import { get, handle, photo, smm } from '../assets/contact/contact';

// Увеличенный и стилизованный массив данных для фоновых изображений
const backgroundImages = [
  {
    src: get,
    position: { top: 0, left: 0 },
    initial: { x: '-120%', y: '-120%', opacity: 0, rotate: -30 }
  },
  {
    src: handle,
    position: { top: 0, right: 0 },
    initial: { x: '120%', y: '-120%', opacity: 0, rotate: 30 }
  },
  {
    src: photo,
    position: { bottom: 0, left: 0 },
    initial: { x: '-120%', y: '120%', opacity: 0, rotate: 30 }
  },
  {
    src: smm,
    position: { bottom: 0, right: 0 },
    initial: { x: '120%', y: '120%', opacity: 0, rotate: -30 }
  }
];

// Общие настройки анимации для фона (конечное состояние)
const imageAnimate = {
  x: '0%',
  y: '0%',
  opacity: 0.7,
  rotate: 5,
  transition: { duration: 1.8, ease: [0.42, 0, 0.58, 1] }
};

export const Contact = () => {
  // --- HOOKS ДЛЯ АНИМАЦИИ В ОБЛАСТИ ВИДИМОСТИ ---
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Анимация один раз, когда видно 30%
  const controls = useAnimation();
  // ----------------------------------------------

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    severity: '',
    message: '',
    visible: false
  });

  const BOT_TOKEN = '7941942970:AAGesD8DXAUe09bmNBdPFoIF4tVqXKnM_-s';
  const CHAT_ID = '807422319';

  // --- ЗАПУСК АНИМАЦИИ ПРИ ПОЯВЛЕНИИ В ОБЛАСТИ ВИДИМОСТИ ---
  // Запускаем анимацию один раз, когда компонент виден
  if (isInView) {
    controls.start({ opacity: 1, scale: 1, rotate: 0 });
  }
  // -----------------------------------------------------------

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.email.trim()) newErrors.email = 'Email обязателен';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Некорректный email';
    if (!formData.phone.trim()) newErrors.phone = 'Телефон обязателен';
    else if (!/^[+0-9 ]{10,20}$/.test(formData.phone))
      newErrors.phone = 'Некорректный формат телефона';
    if (!formData.message.trim()) newErrors.message = 'Сообщение обязательно';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setAlert({ visible: false });

    const text = `Новое сообщение:\nИмя: ${formData.name}\nEmail: ${formData.email}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
      text
    )}`;

    try {
      const maxRetries = 3;
      for (let attempt = 0; attempt < maxRetries; attempt++) {
        const response = await fetch(url, { method: 'GET' });
        if (response.ok) {
          setAlert({
            severity: 'success',
            message: 'Сообщение успешно отправлено!',
            visible: true
          });
          setFormData({ name: '', email: '', phone: '', message: '' });
          break;
        } else if (attempt === maxRetries - 1)
          throw new Error('Telegram API error');
        else
          await new Promise(res =>
            setTimeout(res, Math.pow(2, attempt) * 1000)
          );
      }
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      setAlert({
        severity: 'error',
        message: 'Ошибка при отправке. Попробуйте позже.',
        visible: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldVariant = {
    hidden: { opacity: 0, x: 30 },
    visible: delay => ({
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.5, ease: 'easeOut' }
    })
  };

  const mainColor = '#F7E4D6';
  const accentColor = '#ff6f3c';

  const textFieldStyles = {
    '& .MuiInputBase-input': {
      color: mainColor,
      fontSize: '0.95rem',
      padding: '12px 16px',
      borderRadius: '10px',
      transition: 'all 0.3s ease'
    },
    '& .MuiInputLabel-root': {
      color: `${mainColor}99`,
      fontSize: '0.95rem',
      '&.Mui-focused, &.MuiFormLabel-filled': { color: mainColor }
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: `${mainColor}66`
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: `${mainColor}99`
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: mainColor
    },
    '& .MuiFormHelperText-root': { color: accentColor, fontSize: '0.85rem' }
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Параллакс для формы
  const rotateX = useTransform(mouseY, [-50, 50], [8, -8]);
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8]);

  // Параллакс для фотографий
  const imageParallaxX = useTransform(mouseX, [-100, 100], [-10, 10]);
  const imageParallaxY = useTransform(mouseY, [-100, 100], [-10, 10]);

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 10);
    mouseY.set(y / 10);
  };

  return (
    <Box
      component='section'
      ref={ref} // Привязываем ref к главному контейнеру
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        px: { xs: 2, sm: 4 },
        backgroundColor: '#1E1E1E'
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Фоновые фотографии с анимацией */}
      {backgroundImages.map((img, index) => (
        <motion.img
          key={index}
          src={img.src}
          initial={img.initial}
          // Используем управляемую анимацию, которая запускается через controls
          animate={isInView ? imageAnimate : img.initial}
          alt={`Background visual ${index + 1}`}
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '300px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '16px',
            opacity: 0.7,
            ...img.position,
            margin: '5vh 5vw',
            filter: 'grayscale(30%) brightness(0.9) blur(1px)',

            x: imageParallaxX,
            y: imageParallaxY,

            display: { xs: 'none', md: 'block' }
          }}
        />
      ))}

      {/* Затемняющий оверлей для лучшей читаемости формы */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'radial-gradient(circle at 50% 50%, rgba(30,30,30,0.2) 0%, rgba(30,30,30,0.9) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Контейнер формы с параллаксом */}
      <Container
        maxWidth={false}
        sx={{ position: 'relative', zIndex: 3, maxWidth: 450 }}
      >
        <motion.form
          onSubmit={handleSubmit}
          style={{ rotateX, rotateY, perspective: 800 }}
          // --- ИЗМЕНЕНИЕ: Используем whileInView вместо фиксированного animate ---
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          // ------------------------------------------------------------------------
          sx={{
            background: 'rgba(35,35,35,0.9)',
            backdropFilter: 'blur(15px)',
            borderRadius: 3,
            p: { xs: 3, sm: 4 },
            border: `1px solid ${mainColor}33`,
            boxShadow: `0 15px 50px rgba(0,0,0,0.5), 0 0 30px ${mainColor}22`
          }}
        >
          <Box mb={3} textAlign='center'>
            <Typography
              variant='h4'
              fontWeight={700}
              mb={1}
              sx={{ color: mainColor, textShadow: `0 0 10px ${mainColor}66` }}
            >
              СВЯЖИТЕСЬ С НАМИ
            </Typography>
            <Typography variant='body1' sx={{ color: mainColor, opacity: 0.7 }}>
              Оставьте свои данные, и мы ответим в ближайшее время.
            </Typography>
          </Box>

          <Stack spacing={2.5}>
            {['name', 'email', 'phone', 'message'].map((field, i) => (
              <motion.div
                key={field}
                // --- ИЗМЕНЕНИЕ: Используем whileInView для полей ввода ---
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={fieldVariant}
                custom={0.5 + 0.1 * (i + 1)}
                // -----------------------------------------------------------
              >
                <TextField
                  fullWidth
                  label={
                    field === 'name'
                      ? 'Имя'
                      : field === 'email'
                      ? 'Email'
                      : field === 'phone'
                      ? 'Телефон'
                      : 'Сообщение'
                  }
                  name={field}
                  type={
                    field === 'email'
                      ? 'email'
                      : field === 'phone'
                      ? 'tel'
                      : 'text'
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  multiline={field === 'message'}
                  rows={field === 'message' ? 4 : undefined}
                  error={!!errors[field]}
                  helperText={errors[field]}
                  variant='standard'
                  sx={textFieldStyles}
                />
              </motion.div>
            ))}

            <motion.div
              // --- ИЗМЕНЕНИЕ: Используем whileInView для кнопки ---
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.5 }}
              // -----------------------------------------------------
            >
              <Button
                type='submit'
                variant='contained'
                disabled={isSubmitting}
                fullWidth
                sx={{
                  mt: 1,
                  background: `linear-gradient(90deg, ${mainColor}, ${mainColor}CC)`,
                  borderRadius: 3,
                  fontWeight: 700,
                  py: 1.5,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  color: '#1E1E1E',
                  boxShadow: `0 4px 15px ${mainColor}55`,
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.01)',
                    background: `linear-gradient(90deg, ${mainColor}, ${mainColor})`,
                    boxShadow: `0 8px 25px ${mainColor}77`
                  },
                  '&:disabled': {
                    background: `${mainColor}66`,
                    color: '#00000088'
                  }
                }}
              >
                {isSubmitting ? (
                  <CircularProgress size={20} color='inherit' />
                ) : (
                  'ОТПРАВИТЬ ЗАЯВКУ'
                )}
              </Button>
            </motion.div>

            {alert.visible && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Alert
                  severity={alert.severity}
                  sx={{
                    mt: 2,
                    borderRadius: 1.5,
                    background: 'rgba(247,228,214,0.1)',
                    color: mainColor,
                    '& .MuiAlert-icon': {
                      color:
                        alert.severity === 'success' ? '#66bb6a' : accentColor
                    }
                  }}
                >
                  {alert.message}
                </Alert>
              </motion.div>
            )}
          </Stack>
        </motion.form>
      </Container>
    </Box>
  );
};
