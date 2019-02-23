process.env = {
  BOOL_VAR: 'true',
  NUMBER_VAR: '1234',
  STRING_VAR: '"Hello"',
  OBJECT_VAR: '{"foo":"bar"}',
  // This will fail parse and fall back to original
  ALSO_STRING_VAR: 'Hello'
};

require('./enve');

if (process.enve.BOOL_VAR !== true) throw 'BOOL_VAR';
if (process.enve.NUMBER_VAR !== 1234) throw 'NUMBER_VAR';
if (process.enve.STRING_VAR !== 'Hello') throw 'STRING_VAR';
if (process.enve.OBJECT_VAR.foo !== 'bar') throw 'OBJECT_VAR';
if (process.enve.ALSO_STRING_VAR !== 'Hello') throw 'ALSO_STRING_VAR';

console.log('Tests complete');
