 let title =document.querySelector('#title');
 let city =document.querySelector('#city');
 let country =document.querySelector('#country');
  let postal =document.querySelector('#postal');
  let region =document.querySelector('#region');
   let timezone =document.querySelector('#timezone');
let org = document.querySelector('#org');





async function fetchData() {
   
    try {
        // First API call
        const response1 = await fetch('https://api.ipify.org?format=json');
        const data1 = await response1.json();

        // Second API call
        const response2 = await fetch(`https://ipinfo.io/${data1.ip}/geo`);
        const data2 = await response2.json();

        // Handle the results
        console.log(data1.ip, data2);
        title.innerHTML = ` <b>Your IP Is :</b> ${data1.ip}`;
        city.innerHTML = ` <b>City Is:</b>  ${data2.city}`;
        country.innerHTML = ` <b>Country Is:</b>  ${data2.country}`;
        org.innerHTML = ` <b>Org Is:</b>  ${data2.org}`;
        postal.innerHTML = ` <b>Postal Is:</b>  ${data2.postal}`;
        region.innerHTML = ` <b>Region Is:</b>  ${data2.region}`;
        timezone.innerHTML = ` <b>TimeZone Is:</b> ${data2.timezone}`;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function
fetchData();
