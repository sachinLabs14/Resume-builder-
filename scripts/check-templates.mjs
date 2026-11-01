import { templates } from '../src/data/templates.js';

const fail = (m) => { console.error('FAIL:', m); process.exit(1); };
const count = (f) => templates.filter(f).length;

if (templates.length !== 20) fail(`expected 20 templates, got ${templates.length}`);
if (count((x) => x.category === 'fresher') !== 5) fail('expected 5 fresher templates');
if (count((x) => x.category === 'experienced') !== 15) fail('expected 15 experienced templates');
if (count((x) => x.category === 'fresher' && x.photo) !== 2) fail('expected 2 fresher photo templates');
if (count((x) => x.category === 'experienced' && x.photo) !== 4) fail('expected 4 experienced photo templates');
if (new Set(templates.map((x) => x.id)).size !== 20) fail('template ids must be unique');
console.log('OK: 20 templates (5 fresher, 15 experienced), photo rules satisfied.');
