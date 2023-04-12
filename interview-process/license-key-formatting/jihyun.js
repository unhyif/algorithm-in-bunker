function reformatLicenseKey(s, k) {
  const base = s.replaceAll('-', '').toUpperCase();
  const baseLength = base.length;
  let answer = '';

  if (baseLength % k) {
    answer += base.substr(0, baseLength % k);
    for (let i = 0; i < (baseLength - (baseLength % k)) / k; i++) {
      answer += '-' + base.substr(k * i + (baseLength % k), k);
    }
  } else {
    for (let i = 0; i < baseLength / k; i++) {
      answer += base.substr(k * i, k) + '-';
    }
    answer = answer.slice(0, answer.length - 1);
  }

  return answer;
}
