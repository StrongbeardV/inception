/*LINE: CLIMATE OFFSET NEW*/
const labelarray = [];
const datapointarray_1sc_carbon = [];
const datapointarray_1sc_carbon_cum = [];

$('.datalabelitem_carbon_month').each(function() {
    const labelitem = $(this).text();
    labelarray.push(labelitem);
});

$('.datapoint_1sc_carbon-offset').each(function() {
    const datapointitem = $(this).text();
    datapointarray_1sc_carbon.push(datapointitem);
});

$('.datapoint_1sc_carbon-offset-cum').each(function() {
    const datapointitem = $(this).text();
    datapointarray_1sc_carbon_cum.push(datapointitem);
});

const ctx_carbon_new = document.getElementById('carbon-offset-new').getContext('2d');
const mixedChart = new Chart(ctx_carbon_new, {

    data: {
        datasets: [{
        		type: 'line',
            label: 'Carbon Offset cumulative',
            //borderDash: [5, 5],
            data: datapointarray_1sc_carbon_cum,
            backgroundColor: 'white',
            borderColor: '#49654C',
            borderWidth: 3
        }, {
        		type: 'bar',
            label: 'Carbon Offset monthly',
            data: datapointarray_1sc_carbon,
            backgroundColor: [
                'rgb(164,117,124)',
            ],
            borderColor: 'black',
            borderWidth: 1
       }],
       labels: labelarray,
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

