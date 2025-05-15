import { defineEventHandler, readBody, createError } from 'h3'

interface FeedbackData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Валидация данных формы
function validateFormData(data: FeedbackData) {
  const errors: Record<string, string> = {};
  
  // Валидация имени (не пустое и не менее 2 символов)
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Имя должно содержать не менее 2 символов';
  }
  
  // Валидация email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Пожалуйста, введите корректный email';
  }
  
  // Валидация телефона с помощью regex (поддержка узбекских и российских номеров)
  const phoneRegex = /^(\+998|998|8)?[\s\-]?(\d{2}|\(\d{2}\))[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$|^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  if (!data.phone || !phoneRegex.test(data.phone)) {
    errors.phone = 'Пожалуйста, введите корректный номер телефона';
  }
  
  // Валидация сообщения (не пустое и не менее 10 символов)
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Сообщение должно содержать не менее 10 символов';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    const validation = validateFormData(body);
    
    if (!validation.isValid) {
      return {
        success: false,
        errors: validation.errors
      };
    }
    
    // Например, можно использовать nodemailer для отправки email или prisma для сохранения в БД
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      success: true,
      message: 'Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.'
    };
  } catch (error) {
    console.error('Ошибка при обработке запроса:', error);
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Внутренняя ошибка сервера',
      data: {
        message: 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.'
      }
    });
  }
});
