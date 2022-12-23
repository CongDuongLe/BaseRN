

export default dataChart = [
  {
    title: "Xu hướng doanh thu theo dịch vụ",
    data: {
    useUTC: true,
    grid: {
        "containLabel": true,
        "left": 10,
        "right": 30,
        "top": 20,
        "bottom": 40
    },
    xAxis: {
        type: "time",
        nameGap: 5,
        nameLocation: "middle",
        axisLabel: {
            "hideOverlap": true,
            "borderWidth": 10,
            "borderType": "solid",
            "borderColor": "transparent"
        }
    },
    yAxis: {
        "scale": true,
        "type": "value",
        "minorTick": {
            "show": true
        },
        "minorSplitLine": {
            "show": false
        },
        "axisLabel": {
            "padding": [
                0,
                0,
                0,
                10
            ]
        },
        "nameGap": 15,
        "nameLocation": "middle"
    },
    tooltip: {
        "confine": true,
        "appendToBody": false,
        "trigger": "axis",
        "className": "echart-tooltip"
    },
    legend: {
        "orient": "horizontal",
        "show": true,
        "type": "scroll",
        "bottom": 0,
        "data": [
            "Doanh thu, Data",
            "Doanh thu, GTGT",
            "Doanh thu, Khác",
            "Doanh thu, Nội dung số",
            "Doanh thu, Thoại/SMS"
        ]
    },
    series: [
        {
            "id": "Doanh thu, Data",
            "name": "Doanh thu, Data",
            "data": [
                [
                    1668988800000,
                    29.273232838093737
                ],
                [
                    1669075200000,
                    26.322596401373026
                ],
                [
                    1669161600000,
                    27.830743043480425
                ],
                [
                    1669248000000,
                    26.7246250142422
                ],
                [
                    1669334400000,
                    28.617669512292952
                ],
                [
                    1669420800000,
                    28.652565263083968
                ],
                [
                    1669507200000,
                    27.42796245208204
                ],
                [
                    1669593600000,
                    27.433986121437506
                ],
                [
                    1669680000000,
                    28.15596424670507
                ],
                [
                    1669766400000,
                    26.17588858207031
                ],
                [
                    1669852800000,
                    29.861388344183588
                ],
                [
                    1669939200000,
                    29.238176158726592
                ],
                [
                    1670025600000,
                    26.975476974249954
                ],
                [
                    1670112000000,
                    27.82721533740626
                ],
                [
                    1670198400000,
                    27.625932748046885
                ],
                [
                    1670284800000,
                    27.625113194515627
                ],
                [
                    1670371200000,
                    25.53021664606642
                ],
                [
                    1670457600000,
                    26.832889888185814
                ],
                [
                    1670544000000,
                    28.949686372328138
                ],
                [
                    1670630400000,
                    25.740127330937508
                ],
                [
                    1670716800000,
                    26.200044314824233
                ],
                [
                    1670803200000,
                    28.34746084727733
                ],
                [
                    1670889600000,
                    27.963004506296862
                ],
                [
                    1670976000000,
                    25.63522071839063
                ],
                [
                    1671062400000,
                    25.716454857171865
                ],
                [
                    1671148800000,
                    28.15414443202342
                ],
                [
                    1671235200000,
                    26.83635323670695
                ],
                [
                    1671321600000,
                    26.343418276066394
                ],
                [
                    1671408000000,
                    29.18179584193554
                ],
                [
                    1671494400000,
                    29.267350635109395
                ]
            ],
            "yAxisIndex": 0,
            "itemStyle": {
                "color": "#e64d3c",
                "opacity": 1
            },
            "type": "bar",
            "smooth": false,
            "triggerLineEvent": true,
            "stack": "obs",
            "lineStyle": {
                "opacity": 1
            },
            "emphasis": {
                "lineStyle": {
                    "width": "bolder"
                }
            },
            "showSymbol": false,
            "symbolSize": 6,
            "label": {
                "show": false,
                "position": "top"
            },
            "barMaxWidth": 15
        },
        {
            "id": "Doanh thu, GTGT",
            "name": "Doanh thu, GTGT",
            "data": [
                [
                    1668988800000,
                    28.6170742389414
                ],
                [
                    1669075200000,
                    26.429243851070275
                ],
                [
                    1669161600000,
                    28.05326042907424
                ],
                [
                    1669248000000,
                    26.38391340106248
                ],
                [
                    1669334400000,
                    28.65258839298206
                ],
                [
                    1669420800000,
                    26.28558919971485
                ],
                [
                    1669507200000,
                    27.235166386990233
                ],
                [
                    1669593600000,
                    25.838423899664065
                ],
                [
                    1669680000000,
                    27.20763346885156
                ],
                [
                    1669766400000,
                    28.928261834039052
                ],
                [
                    1669852800000,
                    27.546908523562514
                ],
                [
                    1669939200000,
                    28.031108385787146
                ],
                [
                    1670025600000,
                    29.878562600421866
                ],
                [
                    1670112000000,
                    25.498854534234347
                ],
                [
                    1670198400000,
                    27.68195356191803
                ],
                [
                    1670284800000,
                    27.886288216875016
                ],
                [
                    1670371200000,
                    26.988235577802737
                ],
                [
                    1670457600000,
                    27.9196426273047
                ],
                [
                    1670544000000,
                    28.073025618031252
                ],
                [
                    1670630400000,
                    28.07724304637309
                ],
                [
                    1670716800000,
                    26.202436183666983
                ],
                [
                    1670803200000,
                    27.281097858187493
                ],
                [
                    1670889600000,
                    27.139154912894483
                ],
                [
                    1670976000000,
                    27.50053171132805
                ],
                [
                    1671062400000,
                    29.213325254734393
                ],
                [
                    1671148800000,
                    29.493792351437495
                ],
                [
                    1671235200000,
                    27.798629251015612
                ],
                [
                    1671321600000,
                    27.380692168707043
                ],
                [
                    1671408000000,
                    26.57488366296873
                ],
                [
                    1671494400000,
                    25.990445033781263
                ]
            ],
            "yAxisIndex": 0,
            "itemStyle": {
                "color": "#de3ce7",
                "opacity": 1
            },
            "type": "bar",
            "smooth": false,
            "triggerLineEvent": true,
            "stack": "obs",
            "lineStyle": {
                "opacity": 1
            },
            "emphasis": {
                "lineStyle": {
                    "width": "bolder"
                }
            },
            "showSymbol": false,
            "symbolSize": 6,
            "label": {
                "show": false,
                "position": "top"
            },
            "barMaxWidth": 15
        },
        {
            "id": "Doanh thu, Khác",
            "name": "Doanh thu, Khác",
            "data": [
                [
                    1668988800000,
                    818.9960703235854
                ],
                [
                    1669075200000,
                    821.8514278664017
                ],
                [
                    1669161600000,
                    813.0386360641088
                ],
                [
                    1669248000000,
                    813.3422029679072
                ],
                [
                    1669334400000,
                    823.6427677891938
                ],
                [
                    1669420800000,
                    829.8569162434545
                ],
                [
                    1669507200000,
                    823.3784226024687
                ],
                [
                    1669593600000,
                    821.4313127677503
                ],
                [
                    1669680000000,
                    829.5878972103833
                ],
                [
                    1669766400000,
                    817.6141031366286
                ],
                [
                    1669852800000,
                    811.6034558027228
                ],
                [
                    1669939200000,
                    818.9335720273369
                ],
                [
                    1670025600000,
                    822.0213304844515
                ],
                [
                    1670112000000,
                    828.5689935541773
                ],
                [
                    1670198400000,
                    811.2715695731246
                ],
                [
                    1670284800000,
                    833.4184761331962
                ],
                [
                    1670371200000,
                    829.7694475099498
                ],
                [
                    1670457600000,
                    824.4128103070628
                ],
                [
                    1670544000000,
                    824.8630808408054
                ],
                [
                    1670630400000,
                    820.5411238340511
                ],
                [
                    1670716800000,
                    836.2182493390196
                ],
                [
                    1670803200000,
                    817.609065717838
                ],
                [
                    1670889600000,
                    823.1595451853639
                ],
                [
                    1670976000000,
                    821.8214665965195
                ],
                [
                    1671062400000,
                    834.4144971499782
                ],
                [
                    1671148800000,
                    832.4927111502565
                ],
                [
                    1671235200000,
                    803.1172184067689
                ],
                [
                    1671321600000,
                    830.9338648345231
                ],
                [
                    1671408000000,
                    819.9640247861889
                ],
                [
                    1671494400000,
                    825.5526238153557
                ]
            ],
            "yAxisIndex": 0,
            "itemStyle": {
                "color": "#8b3ce8",
                "opacity": 1
            },
            "type": "bar",
            "smooth": false,
            "triggerLineEvent": true,
            "stack": "obs",
            "lineStyle": {
                "opacity": 1
            },
            "emphasis": {
                "lineStyle": {
                    "width": "bolder"
                }
            },
            "showSymbol": false,
            "symbolSize": 6,
            "label": {
                "show": false,
                "position": "top"
            },
            "barMaxWidth": 15
        },
        {
            "id": "Doanh thu, Nội dung số",
            "name": "Doanh thu, Nội dung số",
            "data": [
                [
                    1668988800000,
                    57.87960735891066
                ],
                [
                    1669075200000,
                    54.69735116711714
                ],
                [
                    1669161600000,
                    53.07561214270308
                ],
                [
                    1669248000000,
                    53.76969003420325
                ],
                [
                    1669334400000,
                    54.241348594429645
                ],
                [
                    1669420800000,
                    56.56056382521685
                ],
                [
                    1669507200000,
                    54.6587981023858
                ],
                [
                    1669593600000,
                    56.25313953695505
                ],
                [
                    1669680000000,
                    53.796056778184834
                ],
                [
                    1669766400000,
                    56.74083662679833
                ],
                [
                    1669852800000,
                    56.24904472472463
                ],
                [
                    1669939200000,
                    51.807560617793115
                ],
                [
                    1670025600000,
                    54.356085912351496
                ],
                [
                    1670112000000,
                    52.38834741468738
                ],
                [
                    1670198400000,
                    52.8484648382998
                ],
                [
                    1670284800000,
                    55.436667504335986
                ],
                [
                    1670371200000,
                    54.53634029151172
                ],
                [
                    1670457600000,
                    56.321798625625036
                ],
                [
                    1670544000000,
                    56.82810479319535
                ],
                [
                    1670630400000,
                    53.80768376958784
                ],
                [
                    1670716800000,
                    55.04822239571877
                ],
                [
                    1670803200000,
                    55.99110248890233
                ],
                [
                    1670889600000,
                    54.917106910183676
                ],
                [
                    1670976000000,
                    56.425831128351746
                ],
                [
                    1671062400000,
                    55.34329598628515
                ],
                [
                    1671148800000,
                    56.04440886075295
                ],
                [
                    1671235200000,
                    54.4428501097637
                ],
                [
                    1671321600000,
                    55.767820457597686
                ],
                [
                    1671408000000,
                    57.87567853013279
                ],
                [
                    1671494400000,
                    56.25908050445702
                ]
            ],
            "yAxisIndex": 0,
            "itemStyle": {
                "color": "#533ce6",
                "opacity": 1
            },
            "type": "bar",
            "smooth": false,
            "triggerLineEvent": true,
            "stack": "obs",
            "lineStyle": {
                "opacity": 1
            },
            "emphasis": {
                "lineStyle": {
                    "width": "bolder"
                }
            },
            "showSymbol": false,
            "symbolSize": 6,
            "label": {
                "show": false,
                "position": "top"
            },
            "barMaxWidth": 15
        },
        {
            "id": "Doanh thu, Thoại/SMS",
            "name": "Doanh thu, Thoại/SMS",
            "data": [
                [
                    1668988800000,
                    53.78802090824023
                ],
                [
                    1669075200000,
                    55.24069294217961
                ],
                [
                    1669161600000,
                    56.446733953015446
                ],
                [
                    1669248000000,
                    55.56950634542382
                ],
                [
                    1669334400000,
                    53.50202441408003
                ],
                [
                    1669420800000,
                    54.20710070232023
                ],
                [
                    1669507200000,
                    54.71397618813483
                ],
                [
                    1669593600000,
                    54.86320942779588
                ],
                [
                    1669680000000,
                    53.402258202499965
                ],
                [
                    1669766400000,
                    53.77932427582665
                ],
                [
                    1669852800000,
                    56.071439253710935
                ],
                [
                    1669939200000,
                    53.96162589674415
                ],
                [
                    1670025600000,
                    53.6594273051735
                ],
                [
                    1670112000000,
                    53.69015926633697
                ],
                [
                    1670198400000,
                    55.689510321395595
                ],
                [
                    1670284800000,
                    55.3738652269155
                ],
                [
                    1670371200000,
                    53.5427406981358
                ],
                [
                    1670457600000,
                    54.514749334925654
                ],
                [
                    1670544000000,
                    56.122365471721565
                ],
                [
                    1670630400000,
                    57.20912583445691
                ],
                [
                    1670716800000,
                    56.52146709275
                ],
                [
                    1670803200000,
                    54.144486335287056
                ],
                [
                    1670889600000,
                    55.86108251188667
                ],
                [
                    1670976000000,
                    54.76407140773041
                ],
                [
                    1671062400000,
                    54.369258258984374
                ],
                [
                    1671148800000,
                    53.028418104789026
                ],
                [
                    1671235200000,
                    54.89543392773426
                ],
                [
                    1671321600000,
                    55.77381186823108
                ],
                [
                    1671408000000,
                    54.7445604614453
                ],
                [
                    1671494400000,
                    56.11562862142185
                ]
            ],
            "yAxisIndex": 0,
            "itemStyle": {
                "color": "#3dade6",
                "opacity": 1
            },
            "type": "bar",
            "smooth": false,
            "triggerLineEvent": true,
            "stack": "obs",
            "lineStyle": {
                "opacity": 1
            },
            "emphasis": {
                "lineStyle": {
                    "width": "bolder"
                }
            },
            "showSymbol": false,
            "symbolSize": 6,
            "label": {
                "show": false,
                "position": "top"
            },
            "barMaxWidth": 15
        }
    ],
    "toolbox": {
        "show": false,
        "top": 0,
        "right": 5,
        "feature": {
            "dataZoom": {
                "yAxisIndex": false,
                "title": {
                    "zoom": "zoom area",
                    "back": "restore zoom"
                }
            }
        }
    },
    "dataZoom": []
    }
  },
  {
    title: "So sánh doanh thu cùng kỳ năm trước",
    data: {
    "grid": {
      "containLabel": true,
      "left": 10,
      "right": 30
  },
  "tooltip": {
      "confine": true,
      "trigger": "item",
      "appendToBody": false,
      "className": "echart-tooltip"
  },
  "legend": {
      "orient": "horizontal",
      "show": true,
      "type": "scroll",
      "bottom": 0,
      "data": [
          "CTY5",
          "CTY9",
          "CTY4",
          "CTY8",
          "CTY3",
          "CTY7",
          "CTY6",
          "CTY1",
          "CTY2",
          "KXĐ"
      ]
  },
  "graphic": null,
  "series": [
      {
          "type": "pie",
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 20,
          "animation": false,
          "radius": [
              "30%",
              "70%"
          ],
          "center": [
              "50%",
              "50%"
          ],
          "avoidLabelOverlap": true,
          "labelLine": {
              "show": true
          },
          "minShowLabelAngle": 0,
          "label": {
              "show": true,
              "color": "#000000",
              "position": "outer",
              "alignTo": "none",
              "bleedMargin": 5
          },
          "emphasis": {
              "label": {
                  "show": true,
                  "fontWeight": "bold",
                  "backgroundColor": "white"
              }
          },
          "data": [
              {
                  "value": 187.77691205095664,
                  "name": "CTY5",
                  "itemStyle": {
                      "color": "#d7e83c",
                      "opacity": 1
                  }
              },
              {
                  "value": 175.9682550810334,
                  "name": "CTY9",
                  "itemStyle": {
                      "color": "#e7b43c",
                      "opacity": 1
                  }
              },
              {
                  "value": 162.38393773071857,
                  "name": "CTY4",
                  "itemStyle": {
                      "color": "#3c53e7",
                      "opacity": 1
                  }
              },
              {
                  "value": 132.88696482173145,
                  "name": "CTY8",
                  "itemStyle": {
                      "color": "#e66f3c",
                      "opacity": 1
                  }
              },
              {
                  "value": 116.96306797281238,
                  "name": "CTY3",
                  "itemStyle": {
                      "color": "#e73cce",
                      "opacity": 1
                  }
              },
              {
                  "value": 72.62723604633197,
                  "name": "CTY7",
                  "itemStyle": {
                      "color": "#ae3ce8",
                      "opacity": 1
                  }
              },
              {
                  "value": 59.474739828515695,
                  "name": "CTY6",
                  "itemStyle": {
                      "color": "#753ce6",
                      "opacity": 1
                  }
              },
              {
                  "value": 43.392301958054674,
                  "name": "CTY1",
                  "itemStyle": {
                      "color": "#3d8be6",
                      "opacity": 1
                  }
              },
              {
                  "value": 28.31013504798436,
                  "name": "CTY2",
                  "itemStyle": {
                      "color": "#3de690",
                      "opacity": 1
                  }
              },
              {
                  "value": 13.401578071984371,
                  "name": "KXĐ",
                  "itemStyle": {
                      "color": "#7ce73c",
                      "opacity": 1
                  }
              }
          ]
      }
  ]
    }
  },
  {
    title: "Tỷ trọng doanh thu TKC",
    data: {
    "useUTC": true,
    "grid": {
        "containLabel": true,
        "left": 10,
        "right": 30,
        "top": 20,
        "bottom": 40
    },
    "xAxis": {
        "type": "time",
        "nameGap": 15,
        "nameLocation": "middle",
        "axisLabel": {
            "hideOverlap": true,
            "borderWidth": 10,
            "borderType": "solid",
            "borderColor": "transparent"
        }
    },
    "yAxis": {
        "scale": true,
        "type": "value",
        "minorTick": {
            "show": true
        },
        "minorSplitLine": {},
        "axisLabel": {
            "padding": [
                0,
                0,
                0,
                10
            ]
        },
        "nameGap": 15,
        "nameLocation": "middle"
    },
    "tooltip": {
        "confine": true,
        "appendToBody": false,
        "trigger": "axis",
        "className": "echart-tooltip"
    },
    "legend": {
        "orient": "horizontal",
        "show": true,
        "type": "scroll",
        "bottom": 0,
        "data": [
            "Doanh thu, Năm nay"
        ]
    },
    "series": [
        {
            "id": "Doanh thu, Năm nay",
            "name": "Doanh thu, Năm nay",
            "data": [
                [
                    1669075200000,
                    984.5413122281387
                ],
                [
                    1669161600000,
                    978.444985632394
                ],
                [
                    1669248000000,
                    975.7899377628402
                ],
                [
                    1669334400000,
                    988.6563987029737
                ],
                [
                    1669420800000,
                    995.5627352337884
                ],
                [
                    1669507200000,
                    987.4143257320657
                ],
                [
                    1669593600000,
                    985.8200717536049
                ],
                [
                    1669680000000,
                    992.1498099066243
                ],
                [
                    1669766400000,
                    983.2384144553633
                ],
                [
                    1669852800000,
                    981.3322366489053
                ],
                [
                    1669939200000,
                    981.9720430863866
                ],
                [
                    1670025600000,
                    986.8908832766542
                ],
                [
                    1670112000000,
                    987.9735701068477
                ],
                [
                    1670198400000,
                    975.1174310427866
                ],
                [
                    1670284800000,
                    999.7404102758577
                ],
                [
                    1670371200000,
                    990.3669807234663
                ],
                [
                    1670457600000,
                    990.0018907831095
                ],
                [
                    1670544000000,
                    994.8362630960783
                ],
                [
                    1670630400000,
                    985.3753038154143
                ],
                [
                    1670716800000,
                    1000.190419325982
                ],
                [
                    1670803200000,
                    983.3732132474945
                ],
                [
                    1670889600000,
                    989.0398940266373
                ],
                [
                    1670976000000,
                    986.1471215623218
                ],
                [
                    1671062400000,
                    999.0568315071533
                ],
                [
                    1671148800000,
                    999.2134748992542
                ],
                [
                    1671235200000,
                    967.0904849319863
                ],
                [
                    1671321600000,
                    996.199607605123
                ],
                [
                    1671408000000,
                    988.340943282677
                ],
                [
                    1671494400000,
                    993.1851286101247
                ],
                [
                    1671580800000,
                    985.9822362411223
                ]
            ],
            "yAxisIndex": 0,
            "itemStyle": {
                "color": "#3de66e",
                "opacity": 1
            },
            "type": "line",
            "smooth": false,
            "triggerLineEvent": true,
            "lineStyle": {
                "opacity": 1
            },
            "emphasis": {
                "lineStyle": {
                    "width": "bolder"
                }
            },
            "showSymbol": true,
            "symbolSize": 6,
            "label": {
                "show": false,
                "position": "top"
            }
        }
    ],
    "toolbox": {
        "top": 0,
        "right": 5,
        "feature": {
            "dataZoom": {
                "yAxisIndex": false,
                "title": {
                    "zoom": "zoom area",
                    "back": "restore zoom"
                }
            }
        }
    },
    "dataZoom": []
    }
  }
  
]
