const tDate = (

  function tStamp(dateRec) {

    var timeStamp = '';

    // Set the unit values in milliseconds.
    var msecPerMinute = 1000 * 60;
    var msecPerHour = msecPerMinute * 60;
    var msecPerDay = msecPerHour * 24;

    // Set a currDate and get the milliseconds
    var currDate = new Date();
    var startDate = new Date(dateRec);

    // Get the difference in milliseconds.
    var interval = currDate.getTime() - startDate.getTime();


    // Calculate how many days the interval contains. Subtract that
    // many days from the interval to determine the remainder.
    var days = Math.floor(interval / msecPerDay );
    interval = interval - (days * msecPerDay );

    // Calculate the hours, minutes, and seconds.
    var hours = Math.floor(interval / msecPerHour );
    interval = interval - (hours * msecPerHour );

    var minutes = Math.floor(interval / msecPerMinute );
    interval = interval - (minutes * msecPerMinute );

    var seconds = Math.floor(interval / 1000 );
    //console.log(days);

    // Display the result.
    if (days > 0){
      timeStamp = days + " days ago";
    } else if (hours > 0) {
      timeStamp = hours + " hours ago";
    } else if (minutes > 0) {
      timeStamp = minutes + " minutes ago";
    } else {
      timeStamp = "just now";
    }

    return timeStamp;
  })
