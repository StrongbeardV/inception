/*LINE: CLIMATE OFFSET NEW*/
const labelarray = [];
const datapointarray_sc_carbon = [];
const datapointarray_sc_carbon_cum = [];

$('.datalabelitem_carbon_month').each(function() {
    const labelitem = $(this).text();
    labelarray.push(labelitem);
});

$('.datapoint_sc_carbon-offset').each(function() {
    const datapointitem = $(this).text();
    datapointarray_sc_carbon.push(datapointitem);
});

$('.datapoint_sc_carbon-offset-cum').each(function() {
    const datapointitem1 = $(this).text();
    datapointarray_sc_carbon_cum.push(datapointitem1);
});

const ctx_carbon_new = document.getElementById('carbon-offset-new').getContext('2d');
const mixedChart = new Chart(ctx_carbon_new, {

    data: {
        datasets: [{
        		type: 'line',
            label: 'Carbon Offset cumulative',
            //borderDash: [5, 5],
            data: datapointarray_sc_carbon_cum,
            backgroundColor: 'white',
            borderColor: '#49654C',
            borderWidth: 3
        }, {
        		type: 'bar',
            label: 'Carbon Offset monthly',
            data: datapointarray_sc_carbon,
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

/*LINE: CLIMATE OFFSET SCHOOL MONTHLY*/
const labelarray_s_carbon = [];
const datapointarray_s_carbon = [];
const datapointarray_s_carbon_cum = [];

$('.datalabelitem_s_carbon_month').each(function() {
    const labelitem1 = $(this).text();
    labelarray.push(labelitem1);
});

$('.datapoint_s_carbon-offset').each(function() {
    const datapointitem2 = $(this).text();
    datapointarray_s_carbon.push(datapointitem2);
});

$('.datapoint_s_carbon-offset-cum').each(function() {
    const datapointitem3 = $(this).text();
    datapointarray_s_carbon_cum.push(datapointitem3);
});

const ctx_carbon_school_monthly = document.getElementById('carbon-offset-schools-monthly').getContext('2d');
const mixedChart1 = new Chart(ctx_carbon_school_monthly, {

    data: {
        datasets: [{
        		type: 'line',
            label: 'Carbon Offset cumulative',
            //borderDash: [5, 5],
            data: datapointarray_s_carbon_cum,
            backgroundColor: 'white',
            borderColor: '#49654C',
            borderWidth: 3
        }, {
        		type: 'bar',
            label: 'Carbon Offset monthly',
            data: datapointarray_s_carbon,
            backgroundColor: [
                'rgb(164,117,124)',
            ],
            borderColor: 'black',
            borderWidth: 1
       }],
       labels: labelarray_s_carbon,
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
