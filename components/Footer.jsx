import React from 'react'

function Footer() {
  return (
    <div className="bg-[#333333] sm:px-3 px-20 py-[40px]">
    <div className="flex sm:flex-col justify-between">
      <img
        className="w-[218px] h-[44px]"
        src="https://www.student.uni-stuttgart.de/system/modules/de.stuttgart.uni.v3.basics/resources/img/svg/logo-inverted-en.svg"
        alt=""
      />
      <div className="flex sm:grid sm:grid-cols-1 sm:mt-8 sm:mx-auto gap-6">
        <div>
          <div className="pb-[30px] flex sm:grid sm:grid-cols-3 sm:mt-8 sm:mx-auto gap-6  leading-[25px] text-white font-light">
            <div>
              <div className="bg-[#333333] border-2 border-white rounded-[50%] h-[75px] w-[75px] p-1">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <span>Facebook</span>
            </div>

            <div>
              <div className="bg-[#333333] border-2 border-white rounded-[50%] h-[75px] w-[75px] p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  width="60px"
                  height="60px"
                  viewBox="0 0 32 32"
                  version="1.1"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>twitter</title>{" "}
                    <path d="M30.917 6.728c-1.026 0.465-2.217 0.805-3.464 0.961l-0.061 0.006c1.268-0.771 2.222-1.952 2.687-3.354l0.013-0.044c-1.124 0.667-2.431 1.179-3.82 1.464l-0.082 0.014c-1.123-1.199-2.717-1.946-4.485-1.946-3.391 0-6.14 2.749-6.14 6.14 0 0.496 0.059 0.979 0.17 1.441l-0.008-0.042c-5.113-0.254-9.613-2.68-12.629-6.366l-0.025-0.031c-0.522 0.873-0.831 1.926-0.831 3.052 0 0.013 0 0.026 0 0.039v-0.002c0 0.001 0 0.003 0 0.005 0 2.12 1.075 3.989 2.709 5.093l0.022 0.014c-1.026-0.034-1.979-0.315-2.811-0.785l0.031 0.016v0.075c0 0.001 0 0.002 0 0.002 0 2.961 2.095 5.434 4.884 6.014l0.040 0.007c-0.484 0.135-1.040 0.212-1.614 0.212-0.406 0-0.802-0.039-1.186-0.113l0.039 0.006c0.813 2.459 3.068 4.212 5.739 4.264l0.006 0c-2.072 1.638-4.721 2.627-7.602 2.627-0.005 0-0.009 0-0.014 0h0.001c-0.515-0.001-1.022-0.031-1.521-0.089l0.061 0.006c2.663 1.729 5.92 2.757 9.418 2.757 0.005 0 0.009 0 0.014 0h-0.001c0.037 0 0.082 0 0.126 0 9.578 0 17.343-7.765 17.343-17.343 0-0.039-0-0.077-0-0.116l0 0.006c0-0.262 0-0.524-0.019-0.786 1.21-0.878 2.229-1.931 3.042-3.136l0.028-0.044z" />{" "}
                  </g>
                </svg>
              </div>
              <span>Facebook</span>
            </div>

            <div>
              <div className="bg-[#333333] border-2 border-white rounded-[50%] h-[75px] w-[75px] pt-3 pl-3 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  width="50px"
                  height="50px"
                  viewBox="0 0 32 32"
                  version="1.1"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>linkedin</title>{" "}
                    <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z" />{" "}
                  </g>
                </svg>
              </div>
              <span>Facebook</span>
            </div>

            <div>
              <div className="bg-[#333333] border-2 border-white rounded-[50%] h-[75px] w-[75px] p-1">
                <svg
                  width="60px"
                  height="60px"
                  viewBox="-10 -5 1034 1034"
                  version="1.1"
                  fill="#77767b"
                  stroke="#77767b"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="#ffffff"
                      d="M499 112q-93 1 -166 11q-81 11 -128 33l-14 8q-16 10 -32 25q-22 21 -38 47q-21 33 -32 73q-14 47 -14 103v37q0 77 1 119q3 113 18 188q19 95 62 154q50 67 134 89q109 29 210 24q46 -3 88 -12q30 -7 55 -17l19 -8l-4 -75l-22 6q-28 6 -57 10q-41 6 -78 4q-53 -1 -80 -7 q-43 -8 -67 -30q-29 -25 -35 -72q-2 -14 -2 -29l25 6q31 6 65 10q48 7 93 9q42 2 92 -2q32 -2 88 -9t107 -30q49 -23 81.5 -54.5t38.5 -63.5q9 -45 13 -109q4 -46 5 -97v-41q0 -56 -14 -103q-11 -40 -32 -73q-16 -26 -38 -47q-15 -15 -32 -25q-12 -8 -14 -8 q-46 -22 -127 -33q-74 -10 -166 -11h-3zM367 267q73 0 109 56l24 39l24 -39q36 -56 109 -56q63 0 101 43t38 117v239h-95v-232q0 -74 -61 -74q-69 0 -69 88v127h-94v-127q0 -88 -69 -88q-61 0 -61 74v232h-95v-239q0 -74 38 -117t101 -43z"
                    />{" "}
                  </g>
                </svg>
              </div>
              <span>Facebook</span>
            </div>

            <div>
              <div className="bg-[#333333] border-2 border-white rounded-[50%] h-[75px] w-[75px] p-1">
                <svg
                  width="60px"
                  height="60px"
                  viewBox="0 0 76 76"
                  version="1.1"
                  baseProfile="full"
                  enable-background="new 0 0 76.00 76.00"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="#ffffff"
                      fill-opacity="1"
                      stroke-width="0.2"
                      stroke-linejoin="round"
                      d="M 52.6345,35.4799L 52.651,35.4806L 53.0632,35.4806C 55.9679,35.4806 58.3308,37.8127 58.3308,40.6788L 58.3308,40.7092L 58.3334,40.7392C 58.5256,43.2474 58.619,45.8695 58.6112,48.5327C 58.619,51.2007 58.5256,53.8228 58.3334,56.331L 58.3308,56.3611L 58.3308,56.3914C 58.3308,59.2579 55.5721,61.5898 52.6674,61.5898L 53.0304,61.5903C 48.391,61.784 43.081,61.8775 38.0293,61.8682C 32.9745,61.8775 27.6648,61.784 23.0254,61.5903L 23.3883,61.5898C 20.4836,61.5898 17.7247,59.2579 17.7247,56.3914L 17.7247,56.3611L 17.7224,56.331C 17.5301,53.8241 17.4366,51.202 17.4445,48.5372C 17.4366,45.8691 17.53,43.247 17.7224,40.7392L 17.7247,40.7092L 17.7247,40.6788C 17.7247,37.8127 20.4836,35.4806 23.3882,35.4806L 23.0253,35.4799C 27.664,35.2862 32.974,35.1928 38.0263,35.202C 43.0818,35.1928 47.9959,35.2862 52.6345,35.4799 Z M 50.6688,47.5132C 50.6688,46.9401 50.7567,46.5294 50.9337,46.281C 51.1102,46.0331 51.4009,45.9087 51.806,45.9087C 52.1936,45.9087 52.4759,46.0331 52.6528,46.281C 52.8293,46.5294 52.9176,46.9401 52.9176,47.5132L 52.9176,48.8991L 50.6688,48.8991L 50.6688,47.5132 Z M 55.5374,51.0244L 55.5374,47.5387C 55.5374,46.2393 55.2245,45.2434 54.5997,44.5507C 53.9744,43.8579 53.0797,43.5115 51.9152,43.5115C 50.7761,43.5115 49.847,43.8857 49.1281,44.6337C 48.4085,45.3821 48.0489,46.3501 48.0489,47.5387L 48.0489,53.684C 48.0489,55.0019 48.3764,56.0373 49.0313,56.7904C 49.6864,57.5432 50.5835,57.9197 51.7226,57.9197C 52.9898,57.9197 53.9426,57.5644 54.5806,56.8543C 55.2184,56.1441 55.5374,55.0873 55.5374,53.684L 55.5374,52.6557L 52.9176,52.6557L 52.9176,53.6072C 52.9176,54.4127 52.8335,54.9338 52.6656,55.1691C 52.4976,55.4047 52.2024,55.5224 51.7805,55.5224C 51.3749,55.5224 51.0885,55.3835 50.9205,55.1047C 50.7526,54.8262 50.6688,54.3269 50.6688,53.6072L 50.6688,51.0244L 55.5374,51.0244 Z M 43.5091,54.34C 43.5091,54.7764 43.4353,55.0911 43.2887,55.2835C 43.1419,55.4757 42.9128,55.5719 42.602,55.5719L 41.9862,55.4245L 41.3837,54.9434L 41.3837,46.4112L 41.9085,45.9941L 42.4464,45.8593C 42.7916,45.8593 43.0555,45.9794 43.2368,46.2188C 43.4185,46.4582 43.5091,46.8089 43.5091,47.2708L 43.5091,54.34 Z M 43.647,43.6845C 43.2522,43.6845 42.8624,43.7934 42.4764,44.0107C 42.0908,44.2286 41.7267,44.546 41.3837,44.9638L 41.3837,38.9888L 38.8134,38.9888L 38.8134,57.549L 41.3837,57.549L 41.3837,56.4965C 41.7181,56.9133 42.0805,57.222 42.4705,57.422C 42.8603,57.622 43.3041,57.722 43.8016,57.722C 44.5557,57.722 45.1322,57.4642 45.5307,56.9475C 45.9292,56.4308 46.129,55.6858 46.129,54.7123L 46.129,47.1166C 46.129,45.9983 45.9165,45.1465 45.4921,44.5618C 45.0677,43.9771 44.4526,43.6845 43.647,43.6845 Z M 33.7844,54.2502L 32.9975,54.9873C 32.7116,55.1797 32.4753,55.2754 32.2877,55.2754C 32.0487,55.2754 31.876,55.2027 31.7694,55.0575C 31.6629,54.9123 31.6096,54.6776 31.6096,54.353L 31.6096,43.8575L 29.064,43.8575L 29.064,55.3012C 29.064,56.1163 29.2132,56.7278 29.5117,57.1356C 29.8103,57.5432 30.2539,57.7468 30.8424,57.7468C 31.3196,57.7468 31.8124,57.6008 32.3197,57.3102C 32.8274,57.019 33.3152,56.5944 33.7844,56.0376L 33.7844,57.549L 36.3299,57.549L 36.3299,43.8575L 33.7844,43.8575L 33.7844,54.2502 Z M 29.0989,38.9888L 20.3006,38.9888L 20.3006,41.6826L 23.2664,41.6826L 23.2664,57.549L 26.133,57.549L 26.133,41.6826L 29.0989,41.6826L 29.0989,38.9888 Z M 24.4274,14.4817L 27.3146,14.4817L 29.1747,21.9004L 29.3547,21.9004L 31.1283,14.4817L 34.0411,14.4817L 30.7047,25.3403L 30.7047,33.0419L 27.8379,33.0419L 27.8379,25.6871L 24.4274,14.4817 Z M 36.5309,29.8344C 36.5309,30.2114 36.6213,30.5021 36.8028,30.7076C 36.9839,30.913 37.2426,31.0152 37.5793,31.0152C 37.9245,31.0152 38.1984,30.9106 38.4015,30.701C 38.6042,30.4912 38.7057,30.2026 38.7057,29.8344L 38.7057,22.3777C 38.7057,22.0785 38.6019,21.8367 38.3949,21.653C 38.1879,21.4691 37.9161,21.3768 37.5793,21.3768C 37.2688,21.3768 37.0163,21.4691 36.8221,21.653C 36.6279,21.8367 36.5309,22.0785 36.5309,22.3777L 36.5309,29.8344 Z M 33.9112,22.4805C 33.9112,21.4201 34.2537,20.5759 34.9391,19.9473C 35.6247,19.3186 36.5455,19.0043 37.7025,19.0043C 38.756,19.0043 39.619,19.3359 40.2917,19.9986C 40.9645,20.6612 41.3008,21.5142 41.3008,22.5577L 41.3008,29.6293C 41.3008,30.8011 40.9705,31.7203 40.311,32.3872C 39.6514,33.0542 38.7432,33.3877 37.5866,33.3877C 36.473,33.3877 35.5817,33.0433 34.9137,32.3552C 34.2453,31.667 33.9112,30.7413 33.9112,29.5781L 33.9112,22.4805 Z M 50.7274,19.3503L 50.7274,33.0419L 48.1819,33.0419L 48.1819,31.5304C 47.7127,32.0873 47.2246,32.5117 46.7172,32.8029C 46.2097,33.0936 45.717,33.2396 45.2397,33.2396C 44.6513,33.2396 44.2075,33.0361 43.9091,32.6281C 43.6105,32.2206 43.4615,31.6092 43.4615,30.794L 43.4615,19.3503L 46.0071,19.3503L 46.0071,29.8457C 46.0071,30.1705 46.0604,30.4051 46.1669,30.5503C 46.2735,30.6955 46.4461,30.7683 46.6852,30.7683C 46.8728,30.7683 47.1091,30.6723 47.3949,30.4801L 48.1819,29.7429L 48.1819,19.3503L 50.7274,19.3503 Z "
                    />{" "}
                  </g>
                </svg>
              </div>
              <span>Facebook</span>
            </div>

            <div>
              <div className="bg-[#333333] border-2 border-white rounded-[50%] h-[75px] w-[75px] p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex sm:flex-col justify-between">
      {[1, 2, 3, 4].map((item) => {
        return (
          <ul>
            <li className="font-bold leading-[20.8px] text-white mt-[20px] mb-[15px]">
              {" "}
              Audience
            </li>
            <li className="leading-[25.6px] text-white font-light border-b border-b-white">
              {" "}
              Students
            </li>
            <li className="leading-[25.6px] text-white font-light border-b border-b-white">
              Employees
            </li>
            <li className="leading-[25.6px] text-white font-light border-b border-b-white">
              Alumni and supporters
            </li>
            <li className="leading-[25.6px] text-white font-light border-b border-b-white">
              Industry
            </li>
          </ul>
        );
      })}
    </div>
  </div>
  )
}

export default Footer