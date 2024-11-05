// contains API mock responses
// you may modify the contents in a way
// 1. can add more data
// 2. add some keys
// as much as possible retain the old keys, it is ok if some or most of them were not used, just retain
// if there is modification, explain why it was done.


export async function fetchMockSubscribers() {
  // Simulates Subscribers Key for autocomplete
  // can modify to extend more subscribers or so

  const mockResponse = {
    success: true,
    data: [
      { subscriber_id: "sample-key-1", subscriber_name: "John Doe" },
      { subscriber_id: "sample-key-2", subscriber_name: "Jane Doe" },
      { subscriber_id: "sample-key-3", subscriber_name: "Terry Cruz" },
    ]
  };

  // Simulate a delay to mimic network latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return mock data
  if (mockResponse.success) {
    return {
      data: mockResponse
    };
  } else {
    throw new Error("Failed to fetch subscribers");
  }
}


export async function fecthMockSubscriberTrend(subscriber_id, start_date, end_date) {
  // Simulates a Subscriber trend for 15 date range
  // YOU CAN ADD MORE DATA HERE e.g expanding to 30 days or so
  // ADD SIMPLE LOGIC HERE, IF another subscriber show another data set here
  
  // here explains the details
  // computations here take it as grain of salt as it was WIP
  /*
    date_range - date
    slots - how many appointsment is the subscriber had available
    distrib - distributed plan in a given time period , if subscriber avail 500 plan and the date range was 7 days , ceil(500 / 7) = 72 static on this api
    total_distribution - in the given date range, actual distributed candidate number
    total_cbl - in that total_distribution, how many click a booking link
    total_booked - in that total_distribution, how many cbl and booked an appointment
    total_cil - in that total_distribution, how many cbl, booked and actually attend an interview
    total_crl - in that total_distribution, how many cbl, booked and review

    over_total_distribution - total_distribution / distrib
    over_total_cbl - total_cbl / distrib
    over_total_booked - total_booked / distrib
    over_total_cil - total_cil / distrib
    over_total_crl - total_crl / distrib

    distrib_metric - total_distribution / distrib
    cbl_metric - total_cbl / distrib
    ib_metric - total_ib / total_cbl
    crl_metric - base 20
    cil_metric - total_cil / total_ib
  */

  const mockResponse = {
      "success": true,
      "data": {
          "items": [
              {
                  "date_range": "2024-10-01T00:00:00.000Z",
                  "slots": 1,
                  "distrib": "36",
                  "total_distribution": 18,
                  "total_cbl": 12,
                  "total_booked": 4,
                  "total_cil": 3,
                  "total_crl": 2,
                  "over_total_distribution": "0.50000000000000000000",
                  "over_total_cbl": "0.33333333333333333333",
                  "over_total_booked": "0.11111111111111111111",
                  "over_total_cil": "0.08333333333333333333",
                  "over_total_crl": "0.05555555555555555556",
                  "distrib_metric": "10",
                  "cbl_metric": "8.33333333333333",
                  "ib_metric": "16.6666666666667",
                  "crl_metric": "20",
                  "cil_metric": "37.5"
              },
              {
                  "date_range": "2024-10-02T00:00:00.000Z",
                  "slots": 1,
                  "distrib": "36",
                  "total_distribution": 21,
                  "total_cbl": 16,
                  "total_booked": 5,
                  "total_cil": 0,
                  "total_crl": 0,
                  "over_total_distribution": "0.58333333333333333333",
                  "over_total_cbl": "0.44444444444444444444",
                  "over_total_booked": "0.13888888888888888889",
                  "over_total_cil": "0.00000000000000000000",
                  "over_total_crl": "0.00000000000000000000",
                  "distrib_metric": "11.6666666666667",
                  "cbl_metric": "11.1111111111111",
                  "ib_metric": "15.625",
                  "crl_metric": "20",
                  "cil_metric": "0"
              },
              {
                  "date_range": "2024-10-03T00:00:00.000Z",
                  "slots": 1,
                  "distrib": "36",
                  "total_distribution": 14,
                  "total_cbl": 10,
                  "total_booked": 3,
                  "total_cil": 0,
                  "total_crl": 1,
                  "over_total_distribution": "0.38888888888888888889",
                  "over_total_cbl": "0.27777777777777777778",
                  "over_total_booked": "0.08333333333333333333",
                  "over_total_cil": "0.00000000000000000000",
                  "over_total_crl": "0.02777777777777777778",
                  "distrib_metric": "7.77777777777778",
                  "cbl_metric": "6.94444444444444",
                  "ib_metric": "15",
                  "crl_metric": "20",
                  "cil_metric": "0"
              },
              {
                  "date_range": "2024-10-04T00:00:00.000Z",
                  "slots": 1,
                  "distrib": "36",
                  "total_distribution": 18,
                  "total_cbl": 16,
                  "total_booked": 7,
                  "total_cil": 3,
                  "total_crl": 4,
                  "over_total_distribution": "0.50000000000000000000",
                  "over_total_cbl": "0.44444444444444444444",
                  "over_total_booked": "0.19444444444444444444",
                  "over_total_cil": "0.08333333333333333333",
                  "over_total_crl": "0.11111111111111111111",
                  "distrib_metric": "10",
                  "cbl_metric": "11.1111111111111",
                  "ib_metric": "21.875",
                  "crl_metric": "20",
                  "cil_metric": "21.4285714285714"
              },
              {
                  "date_range": "2024-10-05T00:00:00.000Z",
                  "slots": 0,
                  "distrib": "36",
                  "total_distribution": 8,
                  "total_cbl": 7,
                  "total_booked": 1,
                  "total_cil": 0,
                  "total_crl": 0,
                  "over_total_distribution": "0.22222222222222222222",
                  "over_total_cbl": "0.19444444444444444444",
                  "over_total_booked": "0.02777777777777777778",
                  "over_total_cil": "0.00000000000000000000",
                  "over_total_crl": "0.00000000000000000000",
                  "distrib_metric": "4.44444444444444",
                  "cbl_metric": "4.86111111111111",
                  "ib_metric": "7.14285714285714",
                  "crl_metric": "20",
                  "cil_metric": "0"
              },
              {
                  "date_range": "2024-10-06T00:00:00.000Z",
                  "slots": 0,
                  "distrib": "36",
                  "total_distribution": 5,
                  "total_cbl": 2,
                  "total_booked": 0,
                  "total_cil": 0,
                  "total_crl": 0,
                  "over_total_distribution": "0.13888888888888888889",
                  "over_total_cbl": "0.05555555555555555556",
                  "over_total_booked": "0.00000000000000000000",
                  "over_total_cil": "0.00000000000000000000",
                  "over_total_crl": "0.00000000000000000000",
                  "distrib_metric": "2.77777777777778",
                  "cbl_metric": "1.38888888888889",
                  "ib_metric": "0",
                  "crl_metric": "20",
                  "cil_metric": "0"
              },
              {
                  "date_range": "2024-10-07T00:00:00.000Z",
                  "slots": 0,
                  "distrib": "36",
                  "total_distribution": 16,
                  "total_cbl": 14,
                  "total_booked": 8,
                  "total_cil": 3,
                  "total_crl": 3,
                  "over_total_distribution": "0.44444444444444444444",
                  "over_total_cbl": "0.38888888888888888889",
                  "over_total_booked": "0.22222222222222222222",
                  "over_total_cil": "0.08333333333333333333",
                  "over_total_crl": "0.08333333333333333333",
                  "distrib_metric": "8.88888888888889",
                  "cbl_metric": "9.72222222222222",
                  "ib_metric": "28.5714285714286",
                  "crl_metric": "20",
                  "cil_metric": "18.75"
              },
              {
                  "date_range": "2024-10-08T00:00:00.000Z",
                  "slots": 1,
                  "distrib": "36",
                  "total_distribution": 14,
                  "total_cbl": 11,
                  "total_booked": 4,
                  "total_cil": 2,
                  "total_crl": 0,
                  "over_total_distribution": "0.38888888888888888889",
                  "over_total_cbl": "0.30555555555555555556",
                  "over_total_booked": "0.11111111111111111111",
                  "over_total_cil": "0.05555555555555555556",
                  "over_total_crl": "0.00000000000000000000",
                  "distrib_metric": "7.77777777777778",
                  "cbl_metric": "7.63888888888889",
                  "ib_metric": "18.1818181818182",
                  "crl_metric": "20",
                  "cil_metric": "25"
              },
              {
                  "date_range": "2024-10-09T00:00:00.000Z",
                  "slots": 0,
                  "distrib": "36",
                  "total_distribution": 18,
                  "total_cbl": 15,
                  "total_booked": 2,
                  "total_cil": 2,
                  "total_crl": 2,
                  "over_total_distribution": "0.50000000000000000000",
                  "over_total_cbl": "0.41666666666666666667",
                  "over_total_booked": "0.05555555555555555556",
                  "over_total_cil": "0.05555555555555555556",
                  "over_total_crl": "0.05555555555555555556",
                  "distrib_metric": "10",
                  "cbl_metric": "10.4166666666667",
                  "ib_metric": "6.66666666666667",
                  "crl_metric": "20",
                  "cil_metric": "50"
              },
              {
                  "date_range": "2024-10-10T00:00:00.000Z",
                  "slots": 1,
                  "distrib": "36",
                  "total_distribution": 23,
                  "total_cbl": 18,
                  "total_booked": 7,
                  "total_cil": 3,
                  "total_crl": 2,
                  "over_total_distribution": "0.63888888888888888889",
                  "over_total_cbl": "0.50000000000000000000",
                  "over_total_booked": "0.19444444444444444444",
                  "over_total_cil": "0.08333333333333333333",
                  "over_total_crl": "0.05555555555555555556",
                  "distrib_metric": "12.7777777777778",
                  "cbl_metric": "12.5",
                  "ib_metric": "19.4444444444444",
                  "crl_metric": "20",
                  "cil_metric": "21.4285714285714"
              },
              {
                  "date_range": "2024-10-11T00:00:00.000Z",
                  "slots": 1,
                  "distrib": "36",
                  "total_distribution": 20,
                  "total_cbl": 16,
                  "total_booked": 5,
                  "total_cil": 2,
                  "total_crl": 3,
                  "over_total_distribution": "0.55555555555555555556",
                  "over_total_cbl": "0.44444444444444444444",
                  "over_total_booked": "0.13888888888888888889",
                  "over_total_cil": "0.05555555555555555556",
                  "over_total_crl": "0.08333333333333333333",
                  "distrib_metric": "11.1111111111111",
                  "cbl_metric": "11.1111111111111",
                  "ib_metric": "15.625",
                  "crl_metric": "20",
                  "cil_metric": "20"
              },
              {
                  "date_range": "2024-10-12T00:00:00.000Z",
                  "slots": 0,
                  "distrib": "36",
                  "total_distribution": 12,
                  "total_cbl": 9,
                  "total_booked": 3,
                  "total_cil": 2,
                  "total_crl": 0,
                  "over_total_distribution": "0.33333333333333333333",
                  "over_total_cbl": "0.25000000000000000000",
                  "over_total_booked": "0.08333333333333333333",
                  "over_total_cil": "0.05555555555555555556",
                  "over_total_crl": "0.00000000000000000000",
                  "distrib_metric": "6.66666666666666",
                  "cbl_metric": "6.25",
                  "ib_metric": "16.6666666666667",
                  "crl_metric": "20",
                  "cil_metric": "33.3333333333333"
              },
              {
                  "date_range": "2024-10-13T00:00:00.000Z",
                  "slots": 0,
                  "distrib": "36",
                  "total_distribution": 4,
                  "total_cbl": 3,
                  "total_booked": 1,
                  "total_cil": 0,
                  "total_crl": 0,
                  "over_total_distribution": "0.11111111111111111111",
                  "over_total_cbl": "0.08333333333333333333",
                  "over_total_booked": "0.02777777777777777778",
                  "over_total_cil": "0.00000000000000000000",
                  "over_total_crl": "0.00000000000000000000",
                  "distrib_metric": "2.22222222222222",
                  "cbl_metric": "2.08333333333333",
                  "ib_metric": "16.6666666666667",
                  "crl_metric": "20",
                  "cil_metric": "0"
              },
              {
                  "date_range": "2024-10-14T00:00:00.000Z",
                  "slots": 0,
                  "distrib": "36",
                  "total_distribution": 15,
                  "total_cbl": 11,
                  "total_booked": 4,
                  "total_cil": 2,
                  "total_crl": 1,
                  "over_total_distribution": "0.41666666666666666667",
                  "over_total_cbl": "0.30555555555555555556",
                  "over_total_booked": "0.11111111111111111111",
                  "over_total_cil": "0.05555555555555555556",
                  "over_total_crl": "0.02777777777777777778",
                  "distrib_metric": "8.33333333333333",
                  "cbl_metric": "7.63888888888889",
                  "ib_metric": "18.1818181818182",
                  "crl_metric": "20",
                  "cil_metric": "25"
              },
              {
                  "date_range": "2024-10-15T00:00:00.000Z",
                  "slots": 1,
                  "distrib": "0",
                  "total_distribution": 0,
                  "total_cbl": 0,
                  "total_booked": 0,
                  "total_cil": 0,
                  "total_crl": 0,
                  "over_total_distribution": "0",
                  "over_total_cbl": "0",
                  "over_total_booked": "0",
                  "over_total_cil": "0",
                  "over_total_crl": "0",
                  "distrib_metric": "0",
                  "cbl_metric": "0",
                  "ib_metric": "0",
                  "crl_metric": "20",
                  "cil_metric": "0"
              }
          ]
      }
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return mock data
  if (mockResponse.success) {
    return {
      data: mockResponse
    };
  } else {
    throw new Error("Failed to fetch subscribers");
  }

}


export async function fecthMockSubscriberTimeline(subscriber_id, start_date, end_date) {
  // new. health: overall metric average

  const mockResponse = {
    success: true,
    data: {
      items: [
        {
          "date_range": "2024-10-01",
          "health": "76.0580762703404",
          "slots": 1,
          "distrib": "108",
          "total_distribution": 88,
          "total_cbl": 53,
          "total_booked": 14,
          "total_cil": 4,
          "total_crl": 2,
          "over_total_distribution": "0.81481481481481481481",
          "over_total_cbl": "0.49074074074074074074",
          "over_total_booked": "0.12962962962962962963",
          "over_total_cil": "0.03703703703703703704",
          "over_total_crl": "0.01851851851851851852"
        },
        {
          "date_range": "2024-10-02",
          "health": "78.4448653198652",
          "slots": 1,
          "distrib": "108",
          "total_distribution": 71,
          "total_cbl": 48,
          "total_booked": 11,
          "total_cil": 5,
          "total_crl": 3,
          "over_total_distribution": "0.65740740740740740741",
          "over_total_cbl": "0.44444444444444444444",
          "over_total_booked": "0.10185185185185185185",
          "over_total_cil": "0.04629629629629629630",
          "over_total_crl": "0.02777777777777777778"
        },
        {
          "date_range": "2024-10-03",
          "health": "77.44708994708992",
          "slots": 1,
          "distrib": "108",
          "total_distribution": 50,
          "total_cbl": 40,
          "total_booked": 14,
          "total_cil": 6,
          "total_crl": 6,
          "over_total_distribution": "0.46296296296296296296",
          "over_total_cbl": "0.37037037037037037037",
          "over_total_booked": "0.12962962962962962963",
          "over_total_cil": "0.05555555555555555556",
          "over_total_crl": "0.05555555555555555556"
        },
        {
          "date_range": "2024-10-04",
          "health": "81.5530303030303",
          "slots": 1,
          "distrib": "108",
          "total_distribution": 82,
          "total_cbl": 55,
          "total_booked": 15,
          "total_cil": 6,
          "total_crl": 6,
          "over_total_distribution": "0.75925925925925925926",
          "over_total_cbl": "0.50925925925925925926",
          "over_total_booked": "0.13888888888888888889",
          "over_total_cil": "0.05555555555555555556",
          "over_total_crl": "0.05555555555555555556"
        },
        {
          "date_range": "2024-10-05",
          "health": "59.07407407407407",
          "slots": 0,
          "distrib": "108",
          "total_distribution": 16,
          "total_cbl": 12,
          "total_booked": 2,
          "total_cil": 1,
          "total_crl": 1,
          "over_total_distribution": "0.14814814814814814815",
          "over_total_cbl": "0.11111111111111111111",
          "over_total_booked": "0.01851851851851851852",
          "over_total_cil": "0.00925925925925925926",
          "over_total_crl": "0.00925925925925925926"
        },
        {
          "date_range": "2024-10-06",
          "health": "86.34259259259258",
          "slots": 0,
          "distrib": "108",
          "total_distribution": 17,
          "total_cbl": 9,
          "total_booked": 2,
          "total_cil": 2,
          "total_crl": 1,
          "over_total_distribution": "0.15740740740740740741",
          "over_total_cbl": "0.08333333333333333333",
          "over_total_booked": "0.01851851851851851852",
          "over_total_cil": "0.01851851851851851852",
          "over_total_crl": "0.00925925925925925926"
        },
        {
          "date_range": "2024-10-07",
          "health": "64.6003898635478",
          "slots": 1,
          "distrib": "108",
          "total_distribution": 69,
          "total_cbl": 38,
          "total_booked": 8,
          "total_cil": 2,
          "total_crl": 4,
          "over_total_distribution": "0.63888888888888888889",
          "over_total_cbl": "0.35185185185185185185",
          "over_total_booked": "0.07407407407407407407",
          "over_total_cil": "0.01851851851851851852",
          "over_total_crl": "0.03703703703703703704"
        },
        {
          "date_range": "2024-10-08",
          "health": "58.73303427651245",
          "slots": 1,
          "distrib": "108",
          "total_distribution": 72,
          "total_cbl": 46,
          "total_booked": 7,
          "total_cil": 1,
          "total_crl": 1,
          "over_total_distribution": "0.66666666666666666667",
          "over_total_cbl": "0.42592592592592592593",
          "over_total_booked": "0.06481481481481481481",
          "over_total_cil": "0.00925925925925925926",
          "over_total_crl": "0.00925925925925925926"
        },
        {
          "date_range": "2024-10-09",
          "health": "75.3009259259260",
          "slots": 1,
          "distrib": "108",
          "total_distribution": 62,
          "total_cbl": 45,
          "total_booked": 16,
          "total_cil": 5,
          "total_crl": 4,
          "over_total_distribution": "0.57407407407407407407",
          "over_total_cbl": "0.41666666666666666667",
          "over_total_booked": "0.14814814814814814815",
          "over_total_cil": "0.04629629629629629630",
          "over_total_crl": "0.03703703703703703704"
        },
        {
          "date_range": "2024-10-10",
          "health": "83.6382890988154",
          "slots": 1,
          "distrib": "108",
          "total_distribution": 84,
          "total_cbl": 65,
          "total_booked": 19,
          "total_cil": 7,
          "total_crl": 8,
          "over_total_distribution": "0.77777777777777777778",
          "over_total_cbl": "0.60185185185185185185",
          "over_total_booked": "0.17592592592592592593",
          "over_total_cil": "0.06481481481481481481",
          "over_total_crl": "0.07407407407407407407"
        },
        {
          "date_range": "2024-10-11",
          "health": "61.7667958656331",
          "slots": 1,
          "distrib": "108",
          "total_distribution": 55,
          "total_cbl": 43,
          "total_booked": 10,
          "total_cil": 2,
          "total_crl": 1,
          "over_total_distribution": "0.50925925925925925926",
          "over_total_cbl": "0.39814814814814814815",
          "over_total_booked": "0.09259259259259259259",
          "over_total_cil": "0.01851851851851851852",
          "over_total_crl": "0.00925925925925925926"
        },
        {
          "date_range": "2024-10-12",
          "health": "66.30698005698005",
          "slots": 0,
          "distrib": "108",
          "total_distribution": 49,
          "total_cbl": 39,
          "total_booked": 13,
          "total_cil": 3,
          "total_crl": 3,
          "over_total_distribution": "0.45370370370370370370",
          "over_total_cbl": "0.36111111111111111111",
          "over_total_booked": "0.12037037037037037037",
          "over_total_cil": "0.02777777777777777778",
          "over_total_crl": "0.02777777777777777778"
        },
        {
          "date_range": "2024-10-13",
          "health": "69.07407407407404",
          "slots": 0,
          "distrib": "108",
          "total_distribution": 10,
          "total_cbl": 6,
          "total_booked": 4,
          "total_cil": 1,
          "total_crl": 2,
          "over_total_distribution": "0.09259259259259259259",
          "over_total_cbl": "0.05555555555555555556",
          "over_total_booked": "0.03703703703703703704",
          "over_total_cil": "0.00925925925925925926",
          "over_total_crl": "0.01851851851851851852"
        },
        {
          "date_range": "2024-10-14",
          "health": "79.35185185185183",
          "slots": 1,
          "distrib": "108",
          "total_distribution": 43,
          "total_cbl": 18,
          "total_booked": 8,
          "total_cil": 4,
          "total_crl": 0,
          "over_total_distribution": "0.39814814814814814815",
          "over_total_cbl": "0.16666666666666666667",
          "over_total_booked": "0.07407407407407407407",
          "over_total_cil": "0.03703703703703703704",
          "over_total_crl": "0.00000000000000000000"
        },
        {
          "date_range": "2024-10-15",
          "health": null,
          "slots": 1,
          "distrib": "0",
          "total_distribution": 0,
          "total_cbl": 0,
          "total_booked": 0,
          "total_cil": 0,
          "total_crl": 0,
          "over_total_distribution": null,
          "over_total_cbl": null,
          "over_total_booked": null,
          "over_total_cil": null,
          "over_total_crl": null
        }
      ]
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return mock data
  if (mockResponse.success) {
    return {
      data: mockResponse
    };
  } else {
    throw new Error("Failed to fetch subscribers");
  }
}