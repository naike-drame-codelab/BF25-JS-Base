// en JS, les mois sont compris entre 0 et 11
const april = new Date(1970, 3, 1); // 01/04/1970
const d = new Date();
d.getYear(); // 2025
d.getMonth(); // 0 (janvier)
d.getMinutes(); // 43
d.setDate(d.getDate() + 1); // augmente date d'un jour

d.toString(); // 'Thu Jan 30 2025 09:50:29 GMT+0100 (heure normale d’Europe centrale)'
d.toDateString(); // 'Thu Jan 30 2025'
d.toISOString(); // '2025-01-30T08:50:29.271Z'
d.toLocaleDateString(); //'30/01/2025'
d.toLocaleDateString("en-US"); // '1/30/2025'
d.toLocaleTimeString(); // '09:50:29'
d.toLocaleTimeString("en-US"); // '9:50:29 AM'
