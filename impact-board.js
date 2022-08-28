<script>

/*Bar-Chart: PLANTED TREES CUM*/

const labelarray_tree = [];
const datapointarray_tree = [];
const datapointarray_tree_cum = [];

/*
const datapointarray_school = [];
const datapointarray_school_cum = [];
const datapointarray_home = [];
const datapointarray_home_cum = [];
*/

$('.data-label-climate-impact-trees').each(function() {
    const labelitem = $(this).text();
    labelarray_tree.push(labelitem);
});

$('.datapoint-item-trees-total').each(function() {
    const datapointitem = $(this).text();
    datapointarray_tree.push(datapointitem);
});

$('.datapoint-item-trees-total-cum').each(function() {
    const datapointitem = $(this).text();
    datapointarray_tree_cum.push(datapointitem);
});

/*
$('.datapoint-item-trees-school').each(function() {
    const datapointitem = $(this).text();
    datapointarray.push(datapointitem);
});
$('.datapoint-item-trees-school-cum').each(function() {
    const datapointitem = $(this).text();
    datapointarray.push(datapointitem);
});
$('.datapoint-item-trees-home').each(function() {
    const datapointitem = $(this).text();
    datapointarray.push(datapointitem);
});
$('.datapoint-item-trees-home-cum').each(function() {
    const datapointitem = $(this).text();
    datapointarray.push(datapointitem);
});
*/

const ctx = document.getElementById('trees-planted-cum').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelarray_tree,
        datasets: [{
            label: 'Inception total planed trees',
            data: datapointarray_tree,
            backgroundColor: [
                '#49654C',
            ],
            borderColor: 'black', 
            borderWidth: 1
        }],
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                  display: false
                }
            }
        }
    }
});

</script>


<script>

/* Seedpods CHART*/

const labelarray_seedpods = [];
const datapointarray_seedpods = [];
const datapointarray_seedpods_cum = [];

$('.data-label-seedpods').each(function() {
    const labelitem = $(this).text();
    labelarray_seedpods.push(labelitem);
});

$('.datapoint-item-seedpods').each(function() {
    const datapointitem = $(this).text();
    datapointarray_seedpods.push(datapointitem);
});

$('.datapoint-item-seedpods-cum').each(function() {
    const datapointitem = $(this).text();
    datapointarray_seedpods_cum.push(datapointitem);
});



const ctx_seedpods = document.getElementById('seedpods-estimate').getContext('2d');
const mixedChart1 = new Chart(ctx_seedpods, {
	data: {
        datasets: [{
       		  type: 'line',
            label: 'Seedpods established cumulative',
            data: datapointarray_seedpods_cum,
            backgroundColor: 'white',
            borderColor: '#49654C', 
            borderWidth: 3
        }, {
        
            type: 'bar',
            label: 'Seedpods established monthly',
            data: datapointarray_seedpods,
             backgroundColor: [
                'rgb(164,117,124)',
            ],
            borderColor: 'black', 
            borderWidth: 1
        }],
        labels: labelarray_seedpods,
    },
    options: {
    		tension: 0.5,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                  display: false
                }
            }
            
        }
    }
});

</script>

<script>

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

</script>


<script>

/* DONUT: EMPOWERED CHILDREN*/

(function() {
const labelarray = ["2021", "2022", "2023"];
const datapointarray = [375, 350, 500];

/*
$('.TANYEL NEED TO ADAPT HERE').each(function() {
    const labelitem = $(this).text();
    labelarray.push(labelitem);
});
$('.datapoint-item-live-climate-impact').each(function() {
    const datapointitem = $(this).text();
    datapointarray.push(datapointitem);
});
*/

const ctx = document.getElementById('educated-children').getContext('2d');
const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: labelarray,
        datasets: [{
            label: 'Empowered Children',
            data: datapointarray,
            backgroundColor: [
                'rgb(73,101,76)',
      					'rgb(164,117,124)',
     						'rgb(231,203,169)',
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
})();


</script>

<script>

const labelarray_school = [];
const datapointarray_school = [];
const datapointarray_school_cum = [];
const datapointarray_educated = [];
const datapointarray_educated_cum = [];



$('.datapoint_schools-in-program').each(function() {
    const datapointitem = $(this).text();
    datapointarray_school.push(datapointitem);
});

$('.datapoint_schools-in-program-cum').each(function() {
    const datapointitem = $(this).text();
    datapointarray_school_cum.push(datapointitem);
});

$('.data-label-month').each(function() {
    const labelitem = $(this).text();
    labelarray_school.push(labelitem);
});


const ctx_schools = document.getElementById('schools-in-programm').getContext('2d');
const mixedChart_schools = new Chart(ctx_schools, {
  data: {
          datasets: [
          {
              type: 'bar',
              label: 'Monthly new schools in porgram',
              data: datapointarray_school,
          },
          {
              type: 'line',
              label: 'Total schools in program',
              data: datapointarray_school_cum,
          }],
          labels: labelarray_school,
      },
      options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

</script>

<script>

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


</script>
