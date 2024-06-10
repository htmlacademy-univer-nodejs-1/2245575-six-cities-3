export const CommentValidationMessage = {
  comment: {
    min: 'Слишком короткий комментарий!',
    max: 'Слишком длинный комментарий!'
  },
  rating: {
    invalid: 'Рейтинг не число',
    invalidDecimal: 'Неверный диапазон рейтинга'
  },
  offerId: {
    invalid: 'Такого офера не существует'
  },
  userId: { invalid: 'Такой пользователь не существует'},
} as const;
