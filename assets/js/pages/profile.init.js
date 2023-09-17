var options = {
    chart: { height: 300, type: "bar", toolbar: { show: !1 } },
    plotOptions: {
      bar: { horizontal: !1, columnWidth: "14%", endingShape: "rounded" },
    },
    dataLabels: { enabled: !1 },
    stroke: { show: !0, width: 2, colors: ["transparent"] },
    series: [
      {
        name: "Điểm",
        data: [5.5, 6, 5, 7, 6, 5, 5, 6, 5.5, 4.5, 6.5, 5.5, 6.5],
      },
    ],
    xaxis: {
      categories: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 5",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ],
    },
    yaxis: { title: { text: "Điểm trung bình" } },
    fill: { opacity: 1 },
    colors: ["#556ee6"],
  },
  chart = new ApexCharts(document.querySelector("#revenue-chart"), options);
chart.render();
