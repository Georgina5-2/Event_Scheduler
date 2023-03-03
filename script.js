var saveButton=$('.btn.saveBtn.col-2.col-md-1');

var currentDayAndDate=$('#currentDay');
var timeElement=$('.col-2 col-md-1 hour text-center py-3');
var descElement=$('.col-8.col-md-10.description');
var buttonElement=$('.btn saveBtn col-2 col-md-1');



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.





});

var plannerTime=[];
plannerTime=[9,10,11,12,1,2,3,4,5];
scheduleArray=[];


function colorCode()
{
  var today=dayjs();
  currentDayAndDate.text(today.format('dddd, MMMM Do'));
  var currentTime=today.format('h');
  console.log(currentTime);
  console.log(typeof currentTime);  

  // {
    var foundTime=plannerTime.find(element=>element===(parseInt(currentTime)));
    console.log("Value of foundtime",foundTime);
    console.log("Type of foundtime",typeof foundTime);

    if(foundTime)
    {
      var findCurrentTime=element=>element===(parseInt(currentTime));
      var indexOfTime=plannerTime.findIndex(findCurrentTime);
      console.log("index of time",indexOfTime);
      // {
        if(indexOfTime=0)
        {
          // $('#hour-'+plannerTime[0]).classList.remove('row time-block');
          // $('#hour-'+plannerTime[0]).classList.add('row time-block present');
          $('#hour-'+plannerTime[0]).attr('class','row time-block present');
          for(var j=1;j<plannerTime.length;j++)
          {
            // $('#hour-'+plannerTime[j]).classList.remove('row time-block');
            // $('#hour-'+plannerTime[j]).classList.add('row time-block future');
            $('#hour-'+plannerTime[j]).attr('class','row time-block future');
          }
        }
        else
        {
          if(indexOfTime=plannerTime.length-1)
          {
            // $('#hour-'+plannerTime[currentTime.length-1]).classList.remove('row time-block');
            // $('#hour-'+plannerTime[currentTime.length-1]).classList.add('row time-block present');
            $('#hour-'+plannerTime[currentTime.length-1]).attr('class','row time-block present');
            for( var j=plannerTime.length-1;j=1;j--)
            {
              // $('#hour-'+plannerTime[j-1]).classList.remove('row time-block');
              // $('#hour-'+plannerTime[j-1]).classList.add('row time-block past');
              $('#hour-'+plannerTime[j-1]).attr('class','row time-block past');
              
            }
          }
          else
          {
            // $('#hour-'+plannerTime[indexOfTime]).classList.remove('row time-block');
            // $('#hour-'+plannerTime[indexOfTime]).classList.add('row time-block present');
            $('#hour-'+plannerTime[indexOfTime]).attr('class','row time-block present');
            for(var k=0;k<indexOfTime;k++)
            {
              ($('#hour-'+plannerTime[k]).attr('class','row time-block past'));
              
            }

            for(var l=indexOfTime+1;l<plannerTime.length;l++)
            {
              ($('#hour-'+plannerTime[l]).attr('class','row time-block future'));
            }
          }
        }
    }
    // }
    else
    {
      for( var j=0;j<plannerTime.length;j++)
      {
        // $('#hour-'+plannerTime[j]).classList.remove('row time-block');
        // $('#hour-'+plannerTime[j]).classList.add('row time-block past');
        $('#hour-'+plannerTime[j]).attr('class','row time-block past');
      }
    }
  

}


function loadLocalStorageData()
{
  var currentSchedule=JSON.parse(localStorage.getItem("mySchedules"));
  scheduleArray=(!currentSchedule)?[]:currentSchedule;
  console.log("Current Schedule in the planner: ", currentSchedule, typeof currentSchedule);
  if(scheduleArray.length)
  {
    console.log("Array length: ", scheduleArray.length);
    $.each(scheduleArray, function( index, scheduleArrayItem ) {
      console.log('scheduleArrayItem :: ', scheduleArrayItem)
      $('button[data-hour="'+scheduleArrayItem.hour+'"]').prev().val(scheduleArrayItem.description);
    });
    
  }
}



 function init()
 {
   
  colorCode();
  loadLocalStorageData();
   
}

 function StoreEvent(event)
{
  console.log("this: ", this);
  var selectedHour=this.dataset['hour'];
  var desc=$(this).prev().val();
  console.log("selected hour: ", selectedHour);
  console.log("description: ", desc);
  var dataToSave={ "hour":selectedHour, "description": desc };
console.log(dataToSave);
  if(!desc)
  {
    alert("Please enter the event scheduled");
  }
  else
  {
    event.preventDefault();
    objIndex = scheduleArray.findIndex((obj => obj.hour == selectedHour));
    if(objIndex > -1)
    {
      scheduleArray[objIndex].description = desc;

    }
    else
    {
      scheduleArray.push(dataToSave);
    }
    console.log("Array contents: ", scheduleArray);
      localStorage.setItem("mySchedules",JSON.stringify(scheduleArray ));

  }
}
init();


console.log("saveButton: ", saveButton);
this.saveButton.on('click',StoreEvent);


