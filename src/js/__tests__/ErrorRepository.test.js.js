import ErrorRepository from '../ErrorRepository';

test.each([
  ['700', 'Длина имени не соответствует условиям'],
  ['701', 'Не соответствие заданным типам'],
  ['702', 'Персонаж уже в команде'],
])(('show error with %s code'), (code, err) => {
  const newErr = new ErrorRepository();
  const result = newErr.translate(code);
  expect(result).toBe(err);
});


test('test Error ', () => {
  const newErr = new ErrorRepository();
  const result = () => newErr.translate('500');
  expect(result).toThrow('Unknown error');
});
