export const firstToUpperCase = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const makePluralOrSingular = (text, attribute) => {
  attribute =
    attribute.charAt(attribute.length - 1) === 's'
      ? attribute.slice(0, -1)
      : attribute;
  return text > 1 ? ' ' + attribute + 's' : ' ' + attribute;
};

export const formatter = new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
});

export const formatRating = data =>
  data.rating + ' (' + data.reviews.length + ' reviews)';

const firstThreeKeysWithNonFalsyValues = obj =>
  Object.entries(obj)
    .filter(([, value]) => value !== 0 && value !== '')
    .slice(0, 3)
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});

export const parseDataForCatalog = data => {
  const { adults, engine, transmission, details } = data;
  return {
    name: data.name.length > 29 ? data.name.slice(0, 26) + '...' : data.name,
    image: data.gallery[0],
    price: formatter.format(data.price),
    rating: formatRating(data),
    location: data.location,
    description: data.description.slice(0, 64) + '...',
    attributes: {
      adults,
      engine,
      transmission,
      ...firstThreeKeysWithNonFalsyValues(details),
    },
    id: data._id,
  };
};

export const parseDataForFeature = data => {
  const { adults, engine, transmission, details } = data;
  return {
    features: { adults, engine, transmission, ...details },
    details: {
      Form: firstToUpperCase(data.form),
      Length: data.length,
      Width: data.width,
      Height: data.height,
      Tank: data.tank,
      Consumption: data.consumption,
    },
  };
};
