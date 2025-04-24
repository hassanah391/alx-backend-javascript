export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  const filtered = [...set].filter(
    (string) => typeof string === 'string' && string.startsWith(startString),
  );

  return filtered
    .map((element) => element.slice(startString.length)) // remove the startString
    .join('-');
}
