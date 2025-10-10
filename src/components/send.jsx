export const Send = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    if (!formData.message.trim()) newErrors.message = 'Сообщение обязательно';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setAlert({ visible: false });

    const text = `Новое сообщение:\nИмя: ${formData.name}\nEmail: ${formData.email}\nСообщение: ${formData.message}`;
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
          setFormData({ name: '', email: '', message: '' });
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
  return (
    <Container
      maxWidth={false}
      sx={{ position: 'relative', zIndex: 2, maxWidth: 450 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        style={{ rotateX, rotateY, perspective: 800 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        sx={{
          background: 'rgba(25,25,25,0.85)',
          backdropFilter: 'blur(18px)',
          borderRadius: 3,
          p: { xs: 3, sm: 4 },
          border: `1px solid ${mainColor}33`,
          boxShadow: `0 15px 50px rgba(247,228,214,0.3)`
        }}
      >
        <Box mb={3} textAlign='center'>
          <Typography
            variant='h4'
            fontWeight={700}
            mb={1}
            sx={{ color: mainColor, textShadow: `0 0 15px ${mainColor}55` }}
          >
            СВЯЖИТЕСЬ С НАМИ
          </Typography>
          <Typography variant='body2' sx={{ color: mainColor, opacity: 0.8 }}>
            Оставьте свои данные, и мы свяжемся с вами в ближайшее время.
          </Typography>
        </Box>

        <Stack spacing={2.5}>
          {['name', 'email', 'message'].map((field, i) => (
            <motion.div
              key={field}
              initial='hidden'
              animate='visible'
              variants={fieldVariant}
              custom={0.1 * (i + 1)}
            >
              <TextField
                fullWidth
                label={
                  field === 'name'
                    ? 'Имя'
                    : field === 'email'
                    ? 'Email'
                    : 'Сообщение'
                }
                name={field}
                type={field === 'email' ? 'email' : 'text'}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
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
                fontWeight: 600,
                py: 1.5,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                color: '#000',
                '&:hover': {
                  transform: 'scale(1.05)',
                  background: `linear-gradient(90deg, ${mainColor}CC, ${mainColor})`,
                  boxShadow: `0 8px 20px ${mainColor}55`
                }
              }}
            >
              {isSubmitting ? (
                <CircularProgress size={20} color='inherit' />
              ) : (
                'Отправить'
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
                  borderRadius: 1,
                  background: 'rgba(247,228,214,0.05)',
                  color: mainColor,
                  '& .MuiAlert-icon': {
                    color: alert.severity === 'success' ? '#4caf50' : '#f44336'
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
  );
};
