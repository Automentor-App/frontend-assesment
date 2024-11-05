// contains API mock responses


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