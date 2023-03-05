var saveButton=$('.btn.saveBtn.col-2.col-md-1');
var currentDayAndDate=$('#currentDay');
var timeElement=$('.col-2 col-md-1 hour text-center py-3');
var descElement=$('.col-8.col-md-10.description');
var buttonElement=$('.btn saveBtn col-2 col-md-1');

var plannerTime=[];
plannerTime=[9,10,11,12,13,14,15,16,17];
scheduleArray=[];


function colorCode()
{
  var today=dayjs();
  currentDayAndDate.text(today.format('dddd, MMMM Do'));
  var currentTime=today.format('H');
  console.log(currentTime);
  console.log(typeof currentTime);  
  plannerTime.find(element=>element===(parseInt(currentTime)));
  var findCurrentTime=element=>element===(parseInt(currentTime));
  var indexOfTime=plannerTime.findIndex(findCurrentTime);
  console.log("index of time",indexOfTime);
  if(findCurrentTime)
      {
        if(indexOfTime===0)
        {
          $('#hour-'+plannerTime[0]).attr('class','row time-block present');
          for(var j=1;j<plannerTime.length;j++)
          {
            
            $('#hour-'+plannerTime[j]).attr('class','row time-block future');
          }
        }
        else
        {
          if(indexOfTime===plannerTime.length-1)
          {
            $('#hour-'+plannerTime[currentTime.length-1]).attr('class','row time-block present');
            for( var j=plannerTime.length-1;j=1;j--)
            {
              
              $('#hour-'+plannerTime[j-1]).attr('class','row time-block past');
              
            }
          }
          else
          {
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
    else
    {
      for( var j=0;j<plannerTime.length;j++)
      {
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


