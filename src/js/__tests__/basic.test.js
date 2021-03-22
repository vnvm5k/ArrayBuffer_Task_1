import Magician from '../Magician';
import Daemon from '../Daemon';

test('Magician_stoned', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = true;
  expect(merlin.attack).toBe(85);
});

test('Daemon_stoned', () => {
  const baltazar = new Daemon('Baltazar');
  baltazar.attack = 100;
  baltazar.distance = 2;
  baltazar.stoned = true;
  expect(baltazar.attack).toBe(85);
});

test('Magician_not stoned', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = false;
  expect(merlin.attack).toBe();
});

test('Daemon_not stoned', () => {
  const baltazar = new Daemon('Baltazar');
  baltazar.attack = 100;
  baltazar.distance = 2;
  baltazar.stoned = false;
  expect(baltazar.attack).toBe();
});

test('Negative Attack', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = - 10;
  merlin.distance = 2;
  merlin.stoned = false;
  expect(merlin.attack).toBe(85);
});