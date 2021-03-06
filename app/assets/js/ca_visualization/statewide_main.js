var my_data = [
	{'2013':116, '2014':0, '2015':108, '2016':92, month: 'Jan'},
  {'2013':108, '2014':0, '2015':105, '2016':93, month: 'Feb'},
  {'2013':136, '2014':0, '2015':130, '2016':192, month: 'Mar'},
  {'2013':160, '2014':0, '2015':138, '2016':116, month: 'Apr'}, 
  {'2013':193, '2014':0, '2015':137, '2016':136, month: 'May'}, 
  {'2013':104, '2014':199, '2015':148, '2016':159, month: 'Jun'}, 
  {'2013':222, '2014':208, '2015':152, '2016':176, month: 'Jul'}, 
  {'2013':218, '2014':194, '2015':159, '2016':178, month: 'Aug'}, 
  {'2013':197, '2014':180, '2015':146, '2016':161, month: 'Sep'}, 
  {'2013':175, '2014':166, '2015':136, '2016':0, month: 'Oct'}, 
  {'2013':142, '2014':129, '2015':112, '2016':0, month: 'Nov'}, 
  {'2013':125, '2014':100, '2015':102, '2016':0, month: 'Dec'},   
];

var chart = c3.generate({
	bindto: '#statewide_chart',
    data: {
        json: my_data,
        keys: {
            value: ['2013', '2014', '2015', '2016'],
        },
        type: 'bar',
    },
    axis: {
    	x: {
      	type: 'category',
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      },
      y:{
        label: 'gpcd'      	
      }
    },
    
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
    },

});