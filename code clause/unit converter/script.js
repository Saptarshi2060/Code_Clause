const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const fromValue = Number(document.querySelector('#from-value').value);
  const fromUnit = document.querySelector('#from-unit').value;
  const toUnit = document.querySelector('#to-unit').value;
  
  const convertedValue = convert(fromValue, fromUnit, toUnit);
  
  document.querySelector('#to-value').value = convertedValue.toFixed(2);
});

function convert(value, fromUnit, toUnit) {
  const conversionFactors = {
    meter: {
      centimeter: 100,
      inch: 39.37,
      foot: 3.28,
      meter: 1
    },
    centimeter: {
      meter: 0.01,
      inch: 0.39,
      foot: 0.0328,
      centimeter: 1
    },
    inch: {
      meter: 0.0254,
      centimeter: 2.54,
      foot: 0.0833,
      inch: 1
    },
    foot: {
      meter: 0.3048,
      centimeter: 30.48,
      inch: 12,
      foot: 1
    }
  };
  
  const factor = conversionFactors[fromUnit][toUnit];
  const result = value * factor;
  
  return result;
}
