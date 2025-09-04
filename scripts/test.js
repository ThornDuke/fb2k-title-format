const alpha = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  return chars[Math.floor(Math.random() * chars.length)];
};

const num = alpha();

console.log(num);
