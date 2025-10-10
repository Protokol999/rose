import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  Typography
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import {
  aquatoria,
  beSweet,
  bimatex,
  box,
  entourage,
  epilBar,
  gastHaus,
  joma,
  poiana,
  selik,
  svitolart,
  veranda
} from '../assets/portfolio/portfolio';

const MotionButton = motion(Button);

export const Portfolio = () => {
  const works = [
    // ... (данные работ оставлены без изменений)
    {
      id: 1,
      img: entourage,
      description: 'creative / photography',
      title: 'Entourage Restaurant',
      infoText:
        'С рестораном Entourage мы сотрудничаем около двух лет, можно сказать, что с самого открытия.Наша задача — съемки для социальных сетей.'
    },
    {
      id: 2,
      img: veranda,
      description: 'creative / photography',
      title: 'Veranda Restaurant Iași',
      infoText:
        'Задача была создать контент для социальных сетей на 3 месяца за одну съемку, то есть максимально разноплатновые фото.Дополнительно необходимо было отснять позиции для меню.'
    },
    {
      id: 3,
      img: joma,
      description: 'branding / concepts / creative / design',
      title: 'Joma Moldova',
      infoText:
        'Что мы делаем каждый месяц для клиента? Основная наша заслуга — полностью взяли на себя социальные сети. Клиент нам сообщает артикулы, на которые делаем акцент, а далее может пропасть на 2 недели и все будет прекрасно.Сформировали стиль в рекламных креативах, который работает не только на продажу, а и на узнаваемость.Создаем контент (фото/видео), готовим дизайн, продумываем тексты, занимаемся сторителлингом и медленно набираем подписчиков.Прекрасно работаем в связке с таргетологом клиента.'
    },
    {
      id: 4,
      img: box,
      description: 'creative / media / photography / smm',
      title: 'Box Catering',
      infoText:
        'Клиент пришёл с запросом: «Хотим красиво и хотим продаж».Итак, что мы сделали?Проанализировали рынок, конкурентов, целевую аудиторию, опыт СНГ, составили планы по захвату мира, но бюджета не хватало и остановились на захвате КишинёвРазработали стратегию позиционирования бренда, потом 3 раза меняли, но сейчас не об этом.На основе логотипа сделали лого-бук, подобрали шрифты, выделили один основной цвет и палитру, которой придерживаемсяПровели более 30-ти разноплановых фото и видео съемок.Подобрали уникальный стиль ведения социальных сетей'
    },
    {
      id: 5,
      img: beSweet,
      description: 'concepts / creative / photography / smm',
      title: 'BeSweet',
      infoText:
        'Наш самый сладкий клиент с 2022 года 🍬. Основной акцент — на оффлайн-продажах, поэтому задачей стало создать яркое присутствие бренда в социальных сетях. Мы разработали позиционирование новых продуктов, проанализировали конкурентов, предложили обновлённый концепт упаковки и провели редбрендинг. Приняли участие в обновлении сайта и создали современный визуальный стиль для соцсетей. В результате бренд получил узнаваемость, гармоничный визуал и чёткое позиционирование на рынке.'
    },
    {
      id: 6,
      img: poiana,
      description: 'creative / smm',
      title: 'Poiana Nucului Restaurant',
      infoText:
        'Клиент обратился за новым позиционированием и визуальной подачей. Мы провели анализ рынка и конкурентов, определили целевую аудиторию для рекламы, реализовали тематические фотосессии с акцентом на атмосферу и уникальное пространство ресторана. Добавили Stories как инструмент общения с гостями и выстроили единый визуальный стиль. В результате — рост вовлечённости аудитории, увеличение бронирований и стабильное продвижение бренда в социальных сетях.'
    },
    {
      id: 7,
      img: aquatoria,
      description: 'branding / concepts / creative / smm',
      title: 'Aquatoria',
      infoText:
        'Клиент пришёл к нам с заблокированным рекламным аккаунтом, отсутствием доступов к страницам и грандиозными планами покорить мир. Мы немного помолились 😇, создали новые страницы — и в процессе даже удалось разблокировать старые. Разработали единую стилистику, продумали шрифты и визуал, проводим съёмки и создаём рекламные макеты. Запустили таргет и продолжаем молиться, чтобы блок не вернулся, ведь причина первого так и осталась загадкой. Основная работа — вера, креатив и упорство. Через пару месяцев покажем результаты — обещаем, будет красиво!'
    },
    {
      id: 8,
      img: svitolart,
      description: 'branding / concepts / creative',
      title: 'Svitolart',
      infoText:
        'Снимаем продукцию для социальных сетей.Покажем вам несколько работ с последних съемок.Если вам необходим профессиональный подход к фотосъемке вашей продукции — мы с радостью поможем!'
    },
    {
      id: 9,
      img: selik,
      description: 'creative / photography',
      title: 'Selik',
      infoText:
        'Задача — концептуальные фото продукта.Работа проводилась в связке с маркетинговым отделом клиента.'
    },
    {
      id: 10,
      img: gastHaus,
      description: 'creative / photography',
      title: 'GastHaus Restaurant',
      infoText: 'Фотосъемка суши меню для ресторана.'
    },
    {
      id: 11,
      img: bimatex,
      description: 'branding / campaign / creative / design / smm',
      title: 'Bimatex',
      infoText:
        'Bimatex — крупный дистрибьютор оборудования для салонов красоты и клиник эстетической медицины. Начали сотрудничество в 2023 году с задачей полного ребрендинга и создания визуала, подчеркивающего статус и современность компании. Мы разработали новый логотип и брендбук, создали концепт позиционирования в социальных сетях, подготовили баннеры для сайта и печатную продукцию. Клиент остался в восторге и стал нашим постоянным партнёром по ежемесячному ведению соцсетей 💅'
    },
    {
      id: 12,
      img: epilBar,
      description: 'concepts / creative / design / photography / smm',
      title: 'Epil Bar',
      infoText:
        'Epil Bar — это не клиент, это любовь 💖. Мы сотрудничаем уже столько лет, что некоторые агентства за это время успевают только появиться и исчезнуть. Вместе прошли три смены концепции, сотни съёмок и тысячи утверждённых постов. Видели, как нас вдохновенно копируют, воруют идеи, цвета и фотографии — и только улыбались. Наша задача — быть дерзкими, создавать запоминающийся контент и снимать не так, как у всех. Мы сделали это. И гордимся каждым кадром!'
    }
  ];

  const [selectedWork, setSelectedWork] = useState(null);
  const handleOpen = work => setSelectedWork(work);
  const handleClose = () => setSelectedWork(null);

  // Анимации текста
  const textMotion = {
    hidden: { opacity: 0, x: -50 }, // Добавляем выезд слева
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } // Чуть медленнее
    })
  };

  // Анимации изображений
  const imageMotion = {
    hidden: { opacity: 0, scale: 0.95, x: 50 }, // Добавляем выезд справа
    visible: i => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { delay: i * 0.1 + 0.1, duration: 0.6, ease: 'easeOut' }
    }),
    hover: {
      scale: 1.05, // Увеличиваем ховер
      boxShadow: '0 10px 30px rgba(247, 228, 214, 0.4)', // Добавляем тень при ховере
      filter: 'brightness(1.1)',
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  // Анимация модалки (оставлена без изменений, она хороша)
  const modalMotion = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 150, damping: 15 }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.6,
      transition: { duration: 0.3, ease: 'easeIn' }
    }
  };

  // Анимация кнопок
  const buttonMotion = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  return (
    <Box
      sx={{
        background: '#1e1e1e',
        color: '#fff',
        py: { xs: 8, md: 12 }, // Увеличиваем вертикальный padding для акцента
        px: { xs: 2, sm: 4, md: 8 }, // Увеличиваем горизонтальный padding
        overflow: 'hidden'
      }}
    >
      {/* 💅 Стили для градиентной анимации заголовка */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <Typography
        variant='h4'
        sx={{
          textAlign: 'center',
          fontFamily: '"Unbounded", sans-serif',
          fontWeight: 700,
          mb: { xs: 6, md: 8 }, // Увеличиваем отступ
          textTransform: 'uppercase',
          letterSpacing: '3px', // Чуть больше
          background: 'linear-gradient(270deg, #F7E4D6, #ffcc70, #F7E4D6)',
          backgroundSize: '200% auto', // Для анимации градиента
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientShift 5s ease infinite',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' } // Улучшенная адаптивность
        }}
      >
        Наши работы
      </Typography>

      <Stack direction='column' spacing={{ xs: 8, md: 12 }}>
        {works.map((item, index) => (
          <Stack
            key={item.id}
            direction={{
              xs: 'column',
              md: index % 2 === 0 ? 'row' : 'row-reverse'
            }}
            alignItems='center'
            // *** Уменьшаем gap на xs ***
            sx={{
              gap: { xs: 4, md: 8 },
              cursor: 'pointer',
              flexWrap: 'nowrap'
            }}
          >
            {/* Текст */}
            <motion.div
              custom={index}
              variants={textMotion}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              // *** Убираем minWidth, используем flex: 1 и ширину 100% на xs ***
              style={{ flex: 1, width: '100%' }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontFamily: '"Unbounded", sans-serif',
                  mb: 1.5,
                  lineHeight: 1.3,
                  // *** Адаптивный размер заголовка ***
                  fontSize: { xs: 28, sm: 36, md: 45, lg: 50 },
                  background:
                    'linear-gradient(90deg, #F7E4D6, #ffcc70, #F7E4D6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  // Добавляем выравнивание для мобильных
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  textTransform: 'uppercase',
                  letterSpacing: 2, // Чуть больше
                  fontSize: { xs: 16, sm: 18, md: 22 }, // Адаптивный размер
                  color: 'rgba(247,228,214,0.7)',
                  mb: 2.5,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                {item.description}
              </Typography>

              {/* Контейнер для центрирования кнопки на мобильных */}
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <MotionButton
                  variant='outlined'
                  onClick={() => handleOpen(item)}
                  variants={buttonMotion}
                  initial='hidden'
                  whileInView='visible'
                  whileHover='hover'
                  sx={{
                    color: '#4B2E05',
                    borderColor: '#F7E4D6',
                    borderRadius: '50px',
                    px: { xs: 2, md: 3 }, // Меньше padding на xs
                    py: { xs: 0.7, md: 0.8 },
                    // *** Адаптивный размер шрифта кнопки ***
                    fontSize: { xs: 16, md: 20 },
                    textTransform: 'none',
                    background: '#F7E4D6',
                    boxShadow: '0 4px 10px rgba(247,228,214,0.3)',
                    '&:hover': {
                      background: 'transparent',
                      color: '#f7e4d6',
                      borderColor: '#F7E4D6',
                      boxShadow: 'none'
                    }
                  }}
                >
                  Подробнее
                </MotionButton>
              </Box>
            </motion.div>

            {/* Фото */}
            <Box
              sx={{
                flex: 1,
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                custom={index}
                variants={imageMotion}
                initial='hidden'
                whileInView='visible'
                whileHover='hover'
                viewport={{ once: true, amount: 0.2 }}
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  // *** Уменьшаем максимальную высоту на мобильных ***
                  maxHeight: window.innerWidth < 600 ? '300px' : '420px',
                  borderRadius: '14px',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  cursor: 'pointer' // Добавляем курсор
                }}
                onClick={() => handleOpen(item)} // Добавляем открытие модалки по клику на изображение
              />
            </Box>
          </Stack>
        ))}
      </Stack>

      {/* Модалка */}
      <AnimatePresence>
        {selectedWork && (
          <Modal
            open={!!selectedWork}
            onClose={handleClose}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              p: { xs: 1, sm: 2 } // *** Меньше padding на мобильных ***
            }}
          >
            <motion.div
              variants={modalMotion}
              initial='hidden'
              animate='visible'
              exit='exit'
              style={{
                background: '#1a1a1a',
                color: '#fff',
                borderRadius: '16px',
                // *** Адаптивный padding ***
                padding: window.innerWidth < 600 ? '20px 15px' : '30px 40px',
                maxWidth: '600px',
                width: '100%',
                textAlign: 'center',
                position: 'relative',
                boxShadow: '0 0 40px rgba(247, 228, 214, 0.5)'
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  color: '#F7E4D6',
                  position: 'absolute',
                  top: { xs: 4, md: 8 },
                  right: { xs: 4, md: 8 },
                  // Больший хитбокс для мобильных
                  padding: { xs: '8px', md: '12px' }
                }}
              >
                <X size={window.innerWidth < 600 ? 20 : 24} />
              </IconButton>

              <motion.img
                src={selectedWork.img}
                alt={selectedWork.title}
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  margin: '20px 0',
                  maxHeight: '400px',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              <Typography
                variant='h6'
                sx={{
                  fontFamily: '"Unbounded", sans-serif',
                  mb: 1.5,
                  fontSize: { xs: 18, md: 24 }, // Адаптивный размер
                  background:
                    'linear-gradient(90deg, #F7E4D6, #ffcc70, #F7E4D6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {selectedWork.title}
              </Typography>

              <Typography
                sx={{
                  opacity: 0.85,
                  mb: 1.5,
                  fontSize: { xs: 14, md: 16 }, // Адаптивный размер
                  color: '#F7E4D6'
                }}
              >
                {selectedWork.description}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 13, md: 15 }, // Адаптивный размер
                  color: '#F7E4D6',
                  lineHeight: 1.6
                }}
              >
                {selectedWork.infoText}
              </Typography>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};
