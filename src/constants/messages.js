const INPUT_MESSAGE = Object.freeze({
  purchaseAmount: '구매금액을 입력해 주세요.\n',
  winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  prefix: '[ERROR]',
  invalidNumber: '숫자만 입력 가능합니다.',
  invalidDivision: '구매 금액은 1,000원 단위로 입력해 주세요.',
  invalidQuantity: '한 장 이상 구매해야 합니다.',
  invalidRange: '로또 번호는 1부터 45까지로 입력해 주세요.',
  invalidLength: '로또 번호는 6개여야 합니다.',
  invalidBonus: '숫자와 콤마(,)만 입력 가능합니다.',
  invalidUnique: '당첨 번호는 중복되지 않게 입력해 주세요.',
});

export { INPUT_MESSAGE, ERROR_MESSAGE };
