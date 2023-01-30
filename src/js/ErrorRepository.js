export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      ['700', 'Длина имени не соответствует условиям'],
      ['701', 'Не соответствие заданным типам'],
      ['702', 'Персонаж уже в команде'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    throw new Error('Unknown error');
  }
}
