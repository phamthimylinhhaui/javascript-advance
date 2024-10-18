const cars = ['BMV', 'Porsche', 'Mes']

const output = `
    <ul>
        ${cars.map(car => `<li>${car}</li>`).join('')}
    </ul>
`;
console.log(output)
