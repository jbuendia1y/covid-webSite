const getData = async()=>{
    const country = document.getElementsByClassName('card-title')[0].textContent
    return await fetch(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=100`)
        .then(res => res.json())
}
const renderChart = async()=>{
    const ctx = document.getElementById('chartCountry').getContext('2d')
    const data = await getData()
    
    totalCasesChart(data.timeline,ctx,data.country)
}

renderChart()