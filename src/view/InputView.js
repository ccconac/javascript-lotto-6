import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';
import { INPUT_MESSAGE } from '../constants/messages';

class InputView {
  static async readPurchaseAmount() {
    while (true) {
      const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);
      try {
        Validator.amountValidator(purchaseAmount);
        return purchaseAmount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default InputView;
