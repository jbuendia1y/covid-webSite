const getData = async()=>{
    return await fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=100`)
        .then(res => res.json())
}

const renderChart = async(title)=>{
    const ctx = document.getElementById('chart').getContext('2d')
    const data = await getData()
    
    totalCasesChart(data,ctx,title)
}

renderChart('Statistics')