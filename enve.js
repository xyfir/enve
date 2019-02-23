process.enve = { ...process.env };
for (let k in process.enve) {
  try {
    process.enve[k] = JSON.parse(process.enve[k]);
  } catch (e) {}
}
