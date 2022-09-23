/*LINE: CLIMATE OFFSET*/
const labelarray1 = [];
const datapointarray_carbon = [];
const datapointarray_carbon_cum = [];

$('.data-label-climate-impact-carbon').each(function() {
    const labelitem1 = $(this).text();
    labelarray1.push(labelitem1);
});

$('.datapoint-item-carbon-offset').each(function() {
    const datapointitem1 = $(this).text();
    datapointarray_carbon.push(datapointitem1);
});

$('.datapoint-item-carbon-offset-cum').each(function() {
    const datapointitem1 = $(this).text();
    datapointarray_carbon_cum.push(datapointitem1);
});

const ctx_offset = document.getElementById('carbon-offset-line').getContext('2d');
const mixedChart = new Chart(ctx_offset, {

    data: {
        datasets: [{
        		type: 'line',
            label: 'Carbon Offset cumulative',
            //borderDash: [5, 5],
            data: datapointarray_carbon_cum,
            backgroundColor: 'white',
            borderColor: '#49654C',
            borderWidth: 3
        }, {
        		type: 'bar',
            label: 'Carbon Offset monthly',
            data: datapointarray_carbon,
            backgroundColor: [
                'rgb(164,117,124)',
            ],
            borderColor: 'black',
            borderWidth: 1
       }],
       labels: labelarray1,
    },
    options: {
    		tension: 0.5,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

/*BAR: LESSONS GIVEN*/

const labelarray_educationgiven = [];
const datapointarray_educationgiven = [];

$('.data-item-month-educationlessons').each(function() {
const labelitem = $(this).text();
labelarray_educationgiven.push(labelitem);
});

$('.datapoint-item_education-given').each(function() {
const datapointitem = $(this).text();
datapointarray_educationgiven.push(datapointitem);
});

const ctx_educationgiven = document.getElementById('lessons_given').getContext('2d');
const chart_educationgiven = new Chart(ctx_educationgiven, {
type: 'bar',
data: {
labels: labelarray_educationgiven,
datasets: [{
label: 'Bar Chart Climate Impact Inception LIVE',
data: datapointarray_educationgiven,
backgroundColor: [
'rgb(255, 99, 132)',
],
borderColor: [
'#333333',
],
hoverOffset: 4
}]
},
options: {
scales: {
y: {
beginAtZero: true
}
}
}
});
