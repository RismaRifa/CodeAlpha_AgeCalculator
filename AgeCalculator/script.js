document.getElementById('myageform').addEventListener('submit',function(event)
{
    event.preventDefault();
    const mydob = new Date(document.getElementById('mydob').value);
    const today = new Date();
    let calculateAge = today.getFullYear() - mydob.getFullYear();
    const monthDifference = today.getMonth() - mydob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < mydob.getDate()))
    {
        calculateAge--;
    }

        
    document.getElementById('myresult').textContent = `Your Age is ${calculateAge} years`;

});