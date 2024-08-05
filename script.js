//your JS code here. If required.
const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Function to clean the band name for sorting
function cleanBandName(band) {
    return band.replace(/^(a|an|the)\s+/i, '').toLowerCase();
}

// Sort the bands array
const sortedBands = bands.sort((a, b) => {
    const nameA = cleanBandName(a);
    const nameB = cleanBandName(b);
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

// Display sorted bands in the unordered list
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
