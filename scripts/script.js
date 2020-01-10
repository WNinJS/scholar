

am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.RadarChart);
chart.hiddenState.properties.opacity = -1; // this creates initial fade-in

chart.data = [ 
	{
	  "category": "Самоорганизация",
	  "value": 1,
	  "color": chart.colors.next()
	}, {
	  "category": "Проектирование и моделирование деятельности",
	  "value": 4,
	  "color": chart.colors.next()
	}, 
	{
	  "category": "Создание платформ, сетей, экосистем",
	  "value": 5,
	  "color": chart.colors.next()
	}, 
	{
	  "category": "Нормативно-правовое регулирование",
	  "value": 10,
	  "color": chart.colors.next()
	}, 
	{
	  "category": "Практики управления и орг.деятельности",
	  "value": 7,
	  "color": chart.colors.next()
	}, 
	{
	  "category": "Вывод продукта на рынки",
	  "value": 5,
	  "color": chart.colors.next()
	}, 
	{
	  "category": "Создание IT-продукта",
	  "value": 5,
	  "color": chart.colors.next()
	}, 
	{
	  "category": "Коммуникация",
	  "value": 10,
	  "color": chart.colors.next()
	}, 
	{
	  "category": "Работа с будущим",
	  "value": 7,
	  "color": chart.colors.next()
	}
];

chart.padding(20, 20, 20, 20);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.labels.template.location = 0.5;
categoryAxis.renderer.tooltipLocation = -2;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.labels.template.disabled = true;
valueAxis.min = 0;
valueAxis.max = 20;
valueAxis.renderer.minGridDistance = 10;

var series = chart.series.push(new am4charts.RadarColumnSeries());
series.columns.template.tooltipText = "{categoryX}: {valueY.value}";
series.columns.template.width = am4core.percent(100);
series.columns.template.strokeWidth = 0;
series.columns.template.column.propertyFields.fill = "color";
series.dataFields.categoryX = "category";
series.dataFields.valueY = "value";


}); // end am4core.ready()





// logout button
function logout() {
	location.href = "login.html";
}


// load digital print
function goToLoadPrint() {
	location.href = "loadprint.html";
}



// login functions
function studentLogin() {
	location.href = "index.html";
}
function teacherLogin() {
	location.href = "teacherprofile.html";
}


// tabpanel script
function openTab(e, tabId) {
	var i, tabcontent, tablink;

	// hide all tabcontent content when tab button is click
	tabcontent = document.getElementsByClassName('tab-content');
	for(i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// remove active for the tablinks if its actvie
	tablink = document.getElementsByClassName('tab-link');
	for(i = 0; i < tablink.length; i++) {
		tablink[i].className = tablink[i].className.replace('btn-left-menu-active', "");
	}

	document.getElementById(tabId).style.display = "block";
	e.currentTarget.className += ' btn-left-menu-active';
}