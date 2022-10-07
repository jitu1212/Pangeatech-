import React from 'react'
import ReactECharts from 'echarts-for-react'

function LineBar({data,productType}) {
  var option = {
    
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: productType
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['January', 'February', 'March', 'March', 'April', 'May', 'June','July','August','September','October','November','December']
    
    },
    yAxis: {
      type: 'value'
    },
    series: productType.map((product)=>{
         return {
          name: product,
          type: 'line',
          stack: 'Total',
          data: data.filter((item)=>{
            return item.product === product;
           }).map((item)=>{return item.revenue})
         }
    })
  };
  return (
    <div className='bar'>
    <ReactECharts
      option={option}
    style={{ height: 400 }}
    opts={{ renderer: 'svg' }}
     />
      
    </div>
  )
}

export default LineBar


