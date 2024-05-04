export default function FormatDate(date) {
  return date && typeof date === 'string' ? date.slice(11, 16) : 'n/a';
}
