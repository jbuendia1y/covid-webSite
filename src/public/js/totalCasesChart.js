const totalCasesChart = (data,ctx,title)=>{
    const cases = Object.values(data.cases)
    const recovered = Object.values(data.recovered)
    const death = Object.values(data.deaths)

    const chart = new Chart(ctx,{
        type : 'line',
        data : {
            labels : Object.getOwnPropertyNames(data.cases),
            datasets : [
                {
                    label : 'Deaths',
                    borderColor : 'red',
                    data : death
                },
                {
                    label : 'Recovered',
                    borderColor :"green",
                    data : recovered
                },
                {
                    label : 'Confirmed',
                    borderColor : "orange",
                    data : cases
                }
            ]
        },
        options : {
            scales : {
                xAxes : [{
                    gridLines : {
                        display : false
                    }
                }]
            },
            title : {
                display : true,
                text : title,
                fontSize : 30,
                padding : 30
            },
            legend : {
                position : 'bottom',
                labels : {
                    padding : 20,
                    boxWidth : 15,
                    fontColor : 'black'
                }
            },
            layout : {
                padding : {
                    top : 20,
                    bottom : 20
                }
            },
            tooltips : {
                backgroundColor : '#0584F6',
                titleFontSize : 20,
                bodyFontSize : 15,
                bodySpacing : 10,
                xPadding : 20,
                yPadding : 20,
                mode : 'point'
            },
            elements : {
                line : {
                    borderWidth : 7,
                    fill : false
                },
                point : {
                    radius : 2,
                    borderWidth : 0.5,
                    backgroundColor : '',
                    hoverRadius : 0,
                    hoverBorderWidth : 5
                }
            }
        }
    })
}