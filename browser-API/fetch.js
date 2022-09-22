// 2. fetch
/*
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));
*/
const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data)
};