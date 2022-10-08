export const piechartOptions = {
  width: 300,
  height: 200,
  fontName: 'Source Sans Pro',
  fontSize: 9,
  legend: { position: 'labeled', textStyle: { fontSize: 12, color: '#555' } },
  colors: ['#4281A9', '#669FC3', '#91BAD4', '#BDD6E5'],
  backgroundColor: 'none',
  pieSliceText: 'label',
  is3D: true,
  chartArea: { width: '95%', height: '65%'},
  tooltip: { textStyle: { fontName: 'Source Sans Pro', fontSize: 12, color: '#669FC3' }, ignoreBounds: false, showColorCode: false },
  slices: { 0: { offset: 0.2 } }
}

export const barOptions = {
  width: 300,
  height: 200,
  fontName: 'Source Sans Pro',
  fontSize: 12,
  legend: { position: 'bottom', alignment: 'center' },
  colors: ['#669FC3', '#91bAD4'],
  backgroundColor: 'none',
  bar: { groupWidth: '30%' },
  chartArea: { left: '15%', width: '80%', height: '55%'},
  tooltip: { textStyle: {color: '#4281A9'}, isHtml: false },
  vAxis: { format: 'short', gridlines: {color: '#CCC', count: 4} }
}