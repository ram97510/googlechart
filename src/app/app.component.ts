import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //------------line chart----------
  linechart = Highcharts;
   lineOptions: Highcharts.Options = {   
      chart: {
         type: "spline"
      },
      title: {
         text: "Monthly Average Temperature"
      },
      
      xAxis:{
         categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {          
         title:{
            text:"Temperature °C"
         } 
      },
      tooltip: {
         valueSuffix:" °C"
      },
      series: [
         {
            name: 'Chennai',
            type: 'spline',
            data: [23, 22, 28, 24, 25, 30]
         },
         {
            name: 'Madurai',
            type: 'spline',
            data: [22, 27, 24, 26, 24, 25]
         },
         {
            name: 'Ooty',
            type: 'spline',
            data: [18, 20, 16, 18, 17, 19]
         },

      ]
   };

  //------------------Bar chart---------------------

  barchart = Highcharts;
   barOptions :Highcharts.Options = {   
      chart: {
         type: 'bar'
      },
      title: {
         text: 'School Strength'
      },
      
      legend : {
         layout: 'vertical',
         align: 'center',
         verticalAlign: 'top',
         x: 250,
         y: 100,
         floating: true,
         borderWidth: 1,
        
         },

         xAxis:{
            categories: ['9th', '10th', '11th', '12th'], 
         },

      yAxis : {
        title: {
            text: 'strength', align: 'high'
         },
         labels: {
            overflow: 'justify'
         }
      },

      tooltip : {
         valueSuffix: ' thousand'
      },
      
      plotOptions : {
         bar: {
            dataLabels: {
               enabled: true
            }
         }
      },
      
      series: [
         {
            name: 'Boys',
            type: 'bar',
            data: [207, 131, 335, 253, ]
         }, 
         {
            name: 'Girls',
            type: 'bar',
            data: [133, 156, 347, 208,]
         }, 
       
      ]
   };

  //------------Column Chart----------

  columnchart = Highcharts;
   columnOptions : Highcharts.Options = {   
      chart: {
         type: 'column'
      },
      title: {
        text: "Strength"
      },
  
      yAxis: {
        max: 100
      },
      
      tooltip: {
        enabled: false
      },
      series: [
        {
          type: 'column',
          data: [60],
          name: "Boys",
        },
        {
          type: 'column',
          data: [40],
          name: "Girls",
        
        }
        
      ]
    };

//-------------pie chart------------

piechart = Highcharts;
pieOptions : Highcharts.Options = {   
   chart : {
    type:'pie'

   },
   title : {
      text: 'Marks in Subject wise'   
   },
   plotOptions: {
    pie: {
      allowPointSelect:true,
      cursor: 'pointer',
      dataLabels:{
        enabled: true
      },
      showInLegend: true
    }
   },
   
   series : [{
      type: 'pie',
      name: 'Marks',
      data: [
         ['Tamil',   60],
         ['English', 55],
         ['Maths',   70],
         ['Science', 83]
      ]
   }]
};
//--------------scatter chart-----------

scatterchart = Highcharts;
   scatterOptions : Highcharts.Options= {  
             
      title : {
         text: 'Semester Mark'   
      },     
      
      legend : {
         layout: 'vertical',
         align: 'center',
         verticalAlign: 'top',
         x: 250,
         y: 100,
         floating: true,
         borderWidth: 1,
        
         },
         
      series : [{
         type: 'scatter',
         name: 'Sem I',
         data: [ 63, 66, 70, 67, 73 ]
      },
      {
      type: 'scatter',
         name: 'Sem II',
         data: [ 68, 69, 75, 65, 79 ]
       }]
   };

}
