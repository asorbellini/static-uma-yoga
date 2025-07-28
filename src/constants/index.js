

export function getTextDate(dateString) {
  const date = new Date(dateString + 'T00:00:00+01:00');
  const options = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Rome'};
  const section = date.toLocaleDateString('it-IT', options).split(" ");
  return `${section[0]} ${section[1]} ${section[2]}`;
}

export function getSlug(title){
  const slug = title.split(" ").join("-")
  return slug
}