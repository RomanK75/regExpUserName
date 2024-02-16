import Validator from '../main';

const validator = new Validator('john_doe');

test('Должен вернуть true если username валиден', () => {
  expect(validator.validateUserName()).toBe(true);
  validator.setUsername('Jho-n__12DoE');
  expect(validator.validateUserName()).toBe(true);
});

test('Тест на латинские буквы', () => {
  validator.setUsername('john_дoe');
  expect(validator.validateUserName()).toBe(false);
});

test('Тест на невалидные символы', () => {
  validator.setUsername('john_@doe');
  expect(validator.validateUserName()).toBe(false);
});

test('Тест на символы тире и подчеркивания в нчале и конце', () => {
  validator.setUsername('-john_doe');
  expect(validator.validateUserName()).toBe(false);
  validator.setUsername('john_doe-');
  expect(validator.validateUserName()).toBe(false);
  validator.setUsername('_john_doe');
  expect(validator.validateUserName()).toBe(false);
  validator.setUsername('john_doe_');
  expect(validator.validateUserName()).toBe(false);
});

test('Тест на 3 цифры подряд', () => {
  validator.setUsername('john_1234doe');
  expect(validator.validateUserName()).toBe(false);
});

test('Тест на цифры в нчале и конце имени', () => {
  validator.setUsername('john_13');
  expect(validator.validateUserName()).toBe(false);
  validator.setUsername('12john_doe');
  expect(validator.validateUserName()).toBe(false);
});
