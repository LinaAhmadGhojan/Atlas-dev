function createEducationScreen(screenType) {
  const screens = {
    dashboard: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <defs>
        <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' style='stop-color:#4F46E5;stop-opacity:1' />
          <stop offset='100%' style='stop-color:#7C3AED;stop-opacity:1' />
        </linearGradient>
      </defs>
      <rect width='360' height='640' fill='%23f8f9fa'/>
      <rect width='360' height='80' fill='url(%23grad1)'/>
      <text x='20' y='50' font-family='Arial' font-size='18' font-weight='bold' fill='%23fff'>My Dashboard</text>
      <rect x='15' y='110' width='330' height='80' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <text x='25' y='135' font-family='Arial' font-size='12' font-weight='bold' fill='%234a6080'>In Progress Courses</text>
      <text x='25' y='160' font-family='Arial' font-size='24' font-weight='bold' fill='%231251a3'>3</text>
      <rect x='15' y='205' width='330' height='80' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <text x='25' y='230' font-family='Arial' font-size='12' font-weight='bold' fill='%234a6080'>Completed</text>
      <text x='25' y='255' font-family='Arial' font-size='24' font-weight='bold' fill='%231251a3'>12</text>
      <rect x='15' y='300' width='330' height='120' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <text x='25' y='325' font-family='Arial' font-size='12' font-weight='bold' fill='%234a6080'>Recent Activity</text>
      <circle cx='25' cy='350' r='3' fill='%234F46E5'/>
      <text x='35' y='355' font-family='Arial' font-size='10' fill='%234a6080'>Completed "Web Dev" lesson</text>
      <circle cx='25' cy='375' r='3' fill='%234F46E5'/>
      <text x='35' y='380' font-family='Arial' font-size='10' fill='%234a6080'>Submitted assignment</text>
      <circle cx='25' cy='400' r='3' fill='%234F46E5'/>
      <text x='35' y='405' font-family='Arial' font-size='10' fill='%234a6080'>Started new course</text>
    </svg>`,
    courses: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <rect width='360' height='640' fill='%23f8f9fa'/>
      <rect width='360' height='80' fill='%237C3AED'/>
      <text x='20' y='50' font-family='Arial' font-size='18' font-weight='bold' fill='%23fff'>My Courses</text>
      <rect x='15' y='110' width='330' height='100' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <rect x='15' y='110' width='330' height='40' fill='%234F46E5'/>
      <text x='25' y='135' font-family='Arial' font-size='12' font-weight='bold' fill='%23fff'>Web Development Basics</text>
      <text x='25' y='165' font-family='Arial' font-size='10' fill='%234a6080'>Progress: 65%</text>
      <rect x='25' y='175' width='310' height='6' rx='3' fill='%23e0e0e0'/>
      <rect x='25' y='175' width='201.5' height='6' rx='3' fill='%234F46E5'/>
      <rect x='15' y='220' width='330' height='100' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <rect x='15' y='220' width='330' height='40' fill='%237C3AED'/>
      <text x='25' y='245' font-family='Arial' font-size='12' font-weight='bold' fill='%23fff'>Data Science 101</text>
      <text x='25' y='275' font-family='Arial' font-size='10' fill='%234a6080'>Progress: 42%</text>
      <rect x='25' y='285' width='310' height='6' rx='3' fill='%23e0e0e0'/>
      <rect x='25' y='285' width='130.2' height='6' rx='3' fill='%237C3AED'/>
    </svg>`,
    lessons: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <rect width='360' height='640' fill='%23f8f9fa'/>
      <rect width='360' height='80' fill='%230891B2'/>
      <text x='20' y='50' font-family='Arial' font-size='18' font-weight='bold' fill='%23fff'>Lesson: JavaScript Basics</text>
      <rect x='15' y='110' width='330' height='200' rx='8' fill='%23000' stroke='%23333' stroke-width='1'/>
      <text x='180' y='215' font-family='Arial' font-size='40' font-weight='bold' text-anchor='middle' fill='%23fff'>▶</text>
      <rect x='15' y='320' width='330' height='80' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <text x='25' y='345' font-family='Arial' font-size='12' font-weight='bold' fill='%234a6080'>Lesson Description</text>
      <text x='25' y='365' font-family='Arial' font-size='10' fill='%234a6080'>Learn the fundamentals of JavaScript programming language...</text>
      <rect x='15' y='410' width='330' height='35' rx='6' fill='%230891B2'/>
      <text x='180' y='432' font-family='Arial' font-size='12' font-weight='bold' text-anchor='middle' fill='%23fff'>Mark as Complete</text>
    </svg>`,
    quiz: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <rect width='360' height='640' fill='%23f8f9fa'/>
      <rect width='360' height='80' fill='%23DC2626'/>
      <text x='20' y='50' font-family='Arial' font-size='18' font-weight='bold' fill='%23fff'>Quiz: Chapter 1</text>
      <rect x='15' y='110' width='330' height='35' rx='4' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <text x='25' y='133' font-family='Arial' font-size='11' font-weight='bold' fill='%234a6080'>Q1 of 5: What is HTML?</text>
      <rect x='15' y='160' width='330' height='30' rx='4' fill='%23fff' stroke='%23e0e0e0' stroke-width='1' style='cursor:pointer'/>
      <circle cx='25' cy='175' r='4' fill='%23DC2626'/>
      <text x='40' y='180' font-family='Arial' font-size='10' fill='%234a6080'>A markup language</text>
      <rect x='15' y='200' width='330' height='30' rx='4' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <circle cx='25' cy='215' r='4' fill='%23999'/>
      <text x='40' y='220' font-family='Arial' font-size='10' fill='%234a6080'>A programming language</text>
      <rect x='15' y='240' width='330' height='30' rx='4' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <circle cx='25' cy='255' r='4' fill='%23999'/>
      <text x='40' y='260' font-family='Arial' font-size='10' fill='%234a6080'>A design tool</text>
      <rect x='15' y='290' width='330' height='35' rx='6' fill='%23DC2626'/>
      <text x='180' y='312' font-family='Arial' font-size='12' font-weight='bold' text-anchor='middle' fill='%23fff'>Next Question</text>
    </svg>`,
    assignment: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <rect width='360' height='640' fill='%23f8f9fa'/>
      <rect width='360' height='80' fill='%23059669'/>
      <text x='20' y='50' font-family='Arial' font-size='18' font-weight='bold' fill='%23fff'>Submit Assignment</text>
      <rect x='15' y='110' width='330' height='50' rx='8' fill='%23e8f5e9' stroke='%23059669' stroke-width='2' stroke-dasharray='5,5'/>
      <text x='180' y='125' font-family='Arial' font-size='24' text-anchor='middle' fill='%23059669'>📄</text>
      <text x='180' y='150' font-family='Arial' font-size='10' text-anchor='middle' fill='%23059669'>Drop file or click to upload</text>
      <rect x='15' y='180' width='330' height='60' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <text x='25' y='205' font-family='Arial' font-size='12' font-weight='bold' fill='%234a6080'>Assignment Details</text>
      <text x='25' y='225' font-family='Arial' font-size='9' fill='%234a6080'>Due: April 30, 2026 • Points: 10</text>
      <rect x='15' y='260' width='330' height='100' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <text x='25' y='285' font-family='Arial' font-size='12' font-weight='bold' fill='%234a6080'>Description</text>
      <text x='25' y='305' font-family='Arial' font-size='9' fill='%234a6080'>Build a responsive website using HTML, CSS, and JavaScript...</text>
      <text x='25' y='320' font-family='Arial' font-size='9' fill='%234a6080'>Submit your code and a brief explanation of your approach.</text>
      <rect x='15' y='380' width='330' height='35' rx='6' fill='%23059669'/>
      <text x='180' y='402' font-family='Arial' font-size='12' font-weight='bold' text-anchor='middle' fill='%23fff'>Upload & Submit</text>
    </svg>`,
    progress: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <rect width='360' height='640' fill='%23f8f9fa'/>
      <rect width='360' height='80' fill='%23F59E0B'/>
      <text x='20' y='50' font-family='Arial' font-size='18' font-weight='bold' fill='%23fff'>My Progress</text>
      <rect x='15' y='110' width='330' height='80' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <text x='25' y='135' font-family='Arial' font-size='12' font-weight='bold' fill='%234a6080'>Overall Progress</text>
      <text x='25' y='160' font-family='Arial' font-size='28' font-weight='bold' fill='%23F59E0B'>58%</text>
      <rect x='25' y='170' width='310' height='8' rx='4' fill='%23e0e0e0'/>
      <rect x='25' y='170' width='179.8' height='8' rx='4' fill='%23F59E0B'/>
      <rect x='15' y='210' width='330' height='150' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <text x='25' y='235' font-family='Arial' font-size='12' font-weight='bold' fill='%234a6080'>Course Breakdown</text>
      <text x='25' y='260' font-family='Arial' font-size='10' fill='%234a6080'>Web Dev: 75% ████████░</text>
      <text x='25' y='280' font-family='Arial' font-size='10' fill='%234a6080'>Data Science: 42% ████░░░░░░</text>
      <text x='25' y='300' font-family='Arial' font-size='10' fill='%234a6080'>front-end Vue: 88% █████████░</text>
      <text x='25' y='320' font-family='Arial' font-size='10' fill='%234a6080'>Mobile Dev: 35% ███░░░░░░░</text>
    </svg>`,
    forum: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <rect width='360' height='640' fill='%23f8f9fa'/>
      <rect width='360' height='80' fill='%2306B6D4'/>
      <text x='20' y='50' font-family='Arial' font-size='18' font-weight='bold' fill='%23fff'>Discussion Forum</text>
      <rect x='15' y='110' width='330' height='70' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <circle cx='25' cy='130' r='6' fill='%2306B6D4'/>
      <text x='40' y='125' font-family='Arial' font-size='11' font-weight='bold' fill='%234a6080'>Sarah Ahmed</text>
      <text x='40' y='145' font-family='Arial' font-size='9' fill='%234a6080'>How to optimize database queries?</text>
      <text x='40' y='160' font-family='Arial' font-size='8' fill='%23999'>2 replies • 10 mins ago</text>
      <rect x='15' y='195' width='330' height='70' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
      <circle cx='25' cy='215' r='6' fill='%2306B6D4'/>
      <text x='40' y='210' font-family='Arial' font-size='11' font-weight='bold' fill='%234a6080'>John Smith</text>
      <text x='40' y='230' font-family='Arial' font-size='9' fill='%234a6080'>Best practices for API design</text>
      <text x='40' y='245' font-family='Arial' font-size='8' fill='%23999'>5 replies • 1 hour ago</text>
      <rect x='15' y='280' width='330' height='35' rx='6' fill='%2306B6D4'/>
      <text x='180' y='302' font-family='Arial' font-size='12' font-weight='bold' text-anchor='middle' fill='%23fff'>Start New Discussion</text>
    </svg>`
  };
  const encoded = screens[screenType] || screens.dashboard;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(encoded)}`;
}

function createTransportScreen(screenType) {
  const screens = {
    tracking: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <rect width='360' height='640' fill='%23f6f8fb'/>
      <rect width='360' height='80' fill='%2312568f'/>
      <text x='20' y='50' font-family='Arial' font-size='17' font-weight='bold' fill='%23fff'>Live Tracking</text>
      <rect x='15' y='100' width='330' height='220' rx='10' fill='%23dceeff' stroke='%23b7d6ef' stroke-width='1'/>
      <path d='M35 250 C90 180, 130 260, 190 200 S285 190, 325 145' stroke='%2312568f' stroke-width='4' fill='none' stroke-linecap='round'/>
      <circle cx='191' cy='201' r='7' fill='%23ef4444'/>
      <circle cx='325' cy='145' r='7' fill='%2310b981'/>
      <rect x='15' y='335' width='330' height='95' rx='10' fill='%23fff' stroke='%23e2e8f0' stroke-width='1'/>
      <text x='25' y='360' font-family='Arial' font-size='12' font-weight='bold' fill='%23334e68'>Shipment #TRK-5481</text>
      <text x='25' y='382' font-family='Arial' font-size='10' fill='%2362788f'>Status: In Transit</text>
      <text x='25' y='399' font-family='Arial' font-size='10' fill='%2362788f'>ETA: 14:30 • Distance: 12.4 km</text>
      <rect x='25' y='410' width='290' height='8' rx='4' fill='%23e5e7eb'/>
      <rect x='25' y='410' width='205' height='8' rx='4' fill='%2312568f'/>
    </svg>`,
    fleet: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <rect width='360' height='640' fill='%23f8fafc'/>
      <rect width='360' height='80' fill='%230f766e'/>
      <text x='20' y='50' font-family='Arial' font-size='17' font-weight='bold' fill='%23fff'>Fleet Manager</text>
      <rect x='15' y='105' width='330' height='75' rx='9' fill='%23fff' stroke='%23dbe2ea' stroke-width='1'/>
      <text x='25' y='130' font-family='Arial' font-size='12' font-weight='bold' fill='%23254856'>Active Vehicles</text>
      <text x='25' y='158' font-family='Arial' font-size='24' font-weight='bold' fill='%230f766e'>487</text>
      <rect x='15' y='195' width='330' height='150' rx='9' fill='%23fff' stroke='%23dbe2ea' stroke-width='1'/>
      <text x='25' y='220' font-family='Arial' font-size='11' font-weight='bold' fill='%23254856'>Availability</text>
      <rect x='25' y='238' width='290' height='10' rx='5' fill='%23e5e7eb'/>
      <rect x='25' y='238' width='232' height='10' rx='5' fill='%230f766e'/>
      <text x='25' y='264' font-family='Arial' font-size='10' fill='%2362788f'>On Route: 80%</text>
      <text x='25' y='282' font-family='Arial' font-size='10' fill='%2362788f'>Maintenance: 12%</text>
      <text x='25' y='300' font-family='Arial' font-size='10' fill='%2362788f'>Idle: 8%</text>
      <rect x='15' y='360' width='330' height='82' rx='9' fill='%23fff' stroke='%23dbe2ea' stroke-width='1'/>
      <text x='25' y='385' font-family='Arial' font-size='11' font-weight='bold' fill='%23254856'>Top Utilized Unit</text>
      <text x='25' y='410' font-family='Arial' font-size='10' fill='%2362788f'>Vehicle TR-044 • 21 deliveries today</text>
    </svg>`,
    routes: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <rect width='360' height='640' fill='%23f8fafc'/>
      <rect width='360' height='80' fill='%237c3aed'/>
      <text x='20' y='50' font-family='Arial' font-size='17' font-weight='bold' fill='%23fff'>Route Planner</text>
      <rect x='15' y='105' width='330' height='60' rx='9' fill='%23fff' stroke='%23e2e8f0' stroke-width='1'/>
      <text x='25' y='132' font-family='Arial' font-size='10' fill='%2362788f'>Origin: Central Warehouse</text>
      <text x='25' y='150' font-family='Arial' font-size='10' fill='%2362788f'>Destination: North District</text>
      <rect x='15' y='178' width='330' height='170' rx='9' fill='%23efe8ff' stroke='%23ddd6fe' stroke-width='1'/>
      <path d='M38 314 L82 266 L136 286 L200 224 L255 245 L320 198' stroke='%237c3aed' stroke-width='4' fill='none' stroke-linecap='round'/>
      <circle cx='38' cy='314' r='6' fill='%23ef4444'/>
      <circle cx='320' cy='198' r='6' fill='%2310b981'/>
      <rect x='15' y='362' width='330' height='95' rx='9' fill='%23fff' stroke='%23e2e8f0' stroke-width='1'/>
      <text x='25' y='387' font-family='Arial' font-size='11' font-weight='bold' fill='%234b2b7f'>Optimization Summary</text>
      <text x='25' y='408' font-family='Arial' font-size='10' fill='%2362788f'>Stops: 12 • Fuel saved: 18%</text>
      <text x='25' y='426' font-family='Arial' font-size='10' fill='%2362788f'>Estimated time reduced: 22 min</text>
    </svg>`,
    deliveries: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <rect width='360' height='640' fill='%23f8fafc'/>
      <rect width='360' height='80' fill='%230891b2'/>
      <text x='20' y='50' font-family='Arial' font-size='17' font-weight='bold' fill='%23fff'>Delivery Queue</text>
      <rect x='15' y='105' width='330' height='85' rx='9' fill='%23fff' stroke='%23e2e8f0' stroke-width='1'/>
      <text x='25' y='130' font-family='Arial' font-size='11' font-weight='bold' fill='%2330546a'>Pending Orders</text>
      <text x='25' y='158' font-family='Arial' font-size='24' font-weight='bold' fill='%230891b2'>42</text>
      <rect x='15' y='205' width='330' height='60' rx='9' fill='%23fff' stroke='%23e2e8f0' stroke-width='1'/>
      <text x='25' y='229' font-family='Arial' font-size='10' fill='%2362788f'>ORD-1092 • Priority High • Zone A</text>
      <rect x='15' y='277' width='330' height='60' rx='9' fill='%23fff' stroke='%23e2e8f0' stroke-width='1'/>
      <text x='25' y='301' font-family='Arial' font-size='10' fill='%2362788f'>ORD-1091 • Priority Medium • Zone C</text>
      <rect x='15' y='349' width='330' height='60' rx='9' fill='%23fff' stroke='%23e2e8f0' stroke-width='1'/>
      <text x='25' y='373' font-family='Arial' font-size='10' fill='%2362788f'>ORD-1087 • Priority Low • Zone B</text>
      <rect x='15' y='424' width='330' height='35' rx='7' fill='%230891b2'/>
      <text x='180' y='447' font-family='Arial' font-size='12' font-weight='bold' text-anchor='middle' fill='%23fff'>Assign Next Batch</text>
    </svg>`,
    driver: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <rect width='360' height='640' fill='%23f8fafc'/>
      <rect width='360' height='80' fill='%2315803d'/>
      <text x='20' y='50' font-family='Arial' font-size='17' font-weight='bold' fill='%23fff'>Driver Profile</text>
      <rect x='15' y='105' width='330' height='120' rx='10' fill='%23fff' stroke='%23dbe2ea' stroke-width='1'/>
      <circle cx='60' cy='148' r='24' fill='%2315803d' opacity='0.16'/>
      <text x='95' y='144' font-family='Arial' font-size='12' font-weight='bold' fill='%232b5b3f'>Ahmad Khaled</text>
      <text x='95' y='164' font-family='Arial' font-size='10' fill='%2362788f'>License: A-2026-94</text>
      <text x='95' y='181' font-family='Arial' font-size='10' fill='%2362788f'>Rating: 4.9/5 • Trips: 328</text>
      <rect x='15' y='240' width='330' height='130' rx='10' fill='%23fff' stroke='%23dbe2ea' stroke-width='1'/>
      <text x='25' y='265' font-family='Arial' font-size='11' font-weight='bold' fill='%232b5b3f'>Performance Metrics</text>
      <text x='25' y='288' font-family='Arial' font-size='10' fill='%2362788f'>On-time Delivery: 97%</text>
      <text x='25' y='306' font-family='Arial' font-size='10' fill='%2362788f'>Fuel Efficiency: 8.4 L/100km</text>
      <text x='25' y='324' font-family='Arial' font-size='10' fill='%2362788f'>Safety Score: 95/100</text>
      <rect x='15' y='385' width='330' height='35' rx='7' fill='%2315803d'/>
      <text x='180' y='408' font-family='Arial' font-size='12' font-weight='bold' text-anchor='middle' fill='%23fff'>Contact Driver</text>
    </svg>`,
    analytics: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
      <rect width='360' height='640' fill='%23f8fafc'/>
      <rect width='360' height='80' fill='%23d97706'/>
      <text x='20' y='50' font-family='Arial' font-size='17' font-weight='bold' fill='%23fff'>Logistics Analytics</text>
      <rect x='15' y='105' width='160' height='90' rx='10' fill='%23fff' stroke='%23e2e8f0' stroke-width='1'/>
      <text x='25' y='130' font-family='Arial' font-size='10' fill='%2362788f'>Avg Delivery Time</text>
      <text x='25' y='160' font-family='Arial' font-size='22' font-weight='bold' fill='%23d97706'>26 min</text>
      <rect x='185' y='105' width='160' height='90' rx='10' fill='%23fff' stroke='%23e2e8f0' stroke-width='1'/>
      <text x='195' y='130' font-family='Arial' font-size='10' fill='%2362788f'>Success Rate</text>
      <text x='195' y='160' font-family='Arial' font-size='22' font-weight='bold' fill='%23d97706'>98.7%</text>
      <rect x='15' y='210' width='330' height='170' rx='10' fill='%23fff' stroke='%23e2e8f0' stroke-width='1'/>
      <text x='25' y='235' font-family='Arial' font-size='11' font-weight='bold' fill='%23815b20'>Weekly Throughput</text>
      <rect x='35' y='330' width='24' height='24' rx='4' fill='%23f6ad55'/>
      <rect x='72' y='304' width='24' height='50' rx='4' fill='%23f59e0b'/>
      <rect x='109' y='290' width='24' height='64' rx='4' fill='%23d97706'/>
      <rect x='146' y='315' width='24' height='39' rx='4' fill='%23fb923c'/>
      <rect x='183' y='278' width='24' height='76' rx='4' fill='%23d97706'/>
      <rect x='220' y='300' width='24' height='54' rx='4' fill='%23f59e0b'/>
      <rect x='257' y='286' width='24' height='68' rx='4' fill='%23ea580c'/>
      <rect x='15' y='395' width='330' height='62' rx='10' fill='%23fff' stroke='%23e2e8f0' stroke-width='1'/>
      <text x='25' y='420' font-family='Arial' font-size='10' fill='%2362788f'>Cost per route down by 14% this month</text>
      <text x='25' y='438' font-family='Arial' font-size='10' fill='%2362788f'>Peak delivery window: 16:00 - 19:00</text>
    </svg>`
  };

  const encoded = screens[screenType] || screens.tracking;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(encoded)}`;
}

function createPlaceholder(title, color, emoji) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'>
    <rect width='360' height='640' fill='${color}' opacity='0.1'/>
    <rect width='360' height='100' fill='${color}'/>
    <text x='180' y='55' font-family='Arial' font-size='32' font-weight='bold' text-anchor='middle' fill='%23fff'>${emoji}</text>
    <rect x='20' y='130' width='320' height='40' rx='8' fill='%23fff' stroke='${color}' stroke-width='2'/>
    <text x='180' y='162' font-family='Arial' font-size='16' font-weight='bold' text-anchor='middle' fill='${color}'>${title}</text>
    <rect x='20' y='190' width='320' height='80' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
    <text x='30' y='220' font-family='Arial' font-size='12' font-weight='bold' fill='%234a6080'>Feature Overview</text>
    <text x='30' y='245' font-family='Arial' font-size='10' fill='%23999'>Real-time updates</text>
    <text x='30' y='260' font-family='Arial' font-size='10' fill='%23999'>Advanced analytics</text>
    <rect x='20' y='290' width='320' height='100' rx='8' fill='%23fff' stroke='%23e0e0e0' stroke-width='1'/>
    <text x='30' y='320' font-family='Arial' font-size='12' font-weight='bold' fill='%234a6080'>Interface Preview</text>
    <circle cx='50' cy='350' r='4' fill='${color}'/>
    <rect x='65' y='345' width='250' height='6' rx='3' fill='${color}' opacity='0.3'/>
    <circle cx='50' cy='375' r='4' fill='${color}'/>
    <rect x='65' y='370' width='200' height='6' rx='3' fill='${color}' opacity='0.3'/>
    <rect x='20' y='420' width='320' height='50' rx='8' fill='${color}' opacity='0.2'/>
    <text x='180' y='450' font-family='Arial' font-size='12' font-weight='bold' text-anchor='middle' fill='${color}'>Interactive Controls</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const PROJECTS_SHOWCASE = [
  {
    id: "restaurant",
    title: "Restaurant Ordering & Reservation Platform",
    category: "restaurant",
    icon: "🍽️",
    description: "A full-featured restaurant discovery and ordering platform with real-time reservations, menu browsing, and checkout flow. Seamless user experience from discovery to order confirmation with live tracking.",
    tags: ["Mobile App", "Vue.js", "Real-time", "Payment"],
    stats: [
      { label: "Screens", value: "18+" },
      { label: "Features", value: "12" },
      { label: "Active Users", value: "1000+" }
    ],
    images: [
      { file: "resturant/Screenshot 2026-04-23 212429.png", caption: "Home & Discovery" },
      { file: "resturant/Screenshot 2026-04-23 212445.png", caption: "Menu Browse" },
      { file: "resturant/Screenshot 2026-04-23 212453.png", caption: "Item Details" },
      { file: "resturant/Screenshot 2026-04-23 212523.png", caption: "Reservation" },
      { file: "resturant/Screenshot 2026-04-23 212500.png", caption: "Shopping Cart" },
      { file: "resturant/Screenshot 2026-04-23 213120.png", caption: "Checkout" }
    ]
  },
  {
    id: "education",
    title: "Learning Management System (LMS)",
    category: "education",
    icon: "📚",
    description: "A comprehensive educational platform enabling teachers to create courses, manage assignments, track student progress, and facilitate interactive learning. Features include video lectures, quizzes, discussion forums, and performance analytics.",
    tags: ["EdTech", "Full Stack", "Real-time", "Analytics"],
    stats: [
      { label: "Courses", value: "100+" },
      { label: "Students", value: "5000+" },
      { label: "Content", value: "500+ hrs" }
    ],
    images: [
      { file: createEducationScreen("dashboard"), caption: "Student Dashboard" },
      { file: createEducationScreen("courses"), caption: "Course Library" },
      { file: createEducationScreen("lessons"), caption: "Video Lessons" },
      { file: createEducationScreen("quiz"), caption: "Interactive Quizzes" },
      { file: createEducationScreen("assignment"), caption: "Submit Assignments" },
      { file: createEducationScreen("progress"), caption: "Progress Tracking" },
      { file: createEducationScreen("forum"), caption: "Discussion Forum" }
    ]
  },
  {
    id: "transport",
    title: "Transportation Booking & Tracking App",
    category: "transport",
    icon: "🚗",
    description: "A ride-booking mobile app with live map tracking, vehicle selection, trip details, payment options, and trip history. Built to show a realistic end-to-end booking flow from pickup request to payment confirmation.",
    tags: ["Mobile App", "Booking Flow", "Maps", "Payments"],
    stats: [
      { label: "Fleet Size", value: "500+" },
      { label: "Daily Routes", value: "1000+" },
      { label: "Uptime", value: "99.9%" }
    ],
    images: [
      { file: "Transport/transport-app-home.svg", caption: "Pickup & Destination" },
      { file: "Transport/transport-app-vehicle-selection.svg", caption: "Choose Vehicle" },
      { file: "Transport/transport-app-map-tracking.svg", caption: "Live Driver Tracking" },
      { file: "Transport/transport-app-booking-details.svg", caption: "Trip Details" },
      { file: "Transport/transport-app-payment.svg", caption: "Payment Methods" },
      { file: "Transport/transport-app-trip-history.svg", caption: "Trip History" }
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Shopping Platform",
    category: "ecommerce",
    icon: "🛒",
    description: "A modern e-commerce platform with product discovery, advanced search and filtering, secure payment processing, and order management. Built for high conversion with responsive design and personalized recommendations.",
    tags: ["Frontend", "Vue.js", "Payments", "Responsive"],
    stats: [
      { label: "Products", value: "10k+" },
      { label: "Transactions", value: "100k+" },
      { label: "Conversion", value: "3.5%" }
    ],
    images: [
      { file: "E-Commerce/Screenshot 2026-04-24 062502.svg",  caption: "Home Storefront" },
      { file: "E-Commerce/Screenshot 2026-04-24 062515.svg",  caption: "Product Grid" },
      { file: "E-Commerce/Screenshot 2026-04-24 062524.svg",  caption: "Product Details" },
      { file: "E-Commerce/Screenshot 2026-04-24 062546.svg",  caption: "Category View" },
      { file: "E-Commerce/Screenshot 2026-04-24 062556.svg",  caption: "Search Results" },
      { file: "E-Commerce/Screenshot 2026-04-24 062618.svg",  caption: "Wishlist" },
      { file: "E-Commerce/Screenshot 2026-04-24 062739.svg",  caption: "Shopping Cart" },
      { file: "E-Commerce/Screenshot 2026-04-24 062751.svg",  caption: "Checkout" },
      { file: "E-Commerce/Screenshot 2026-04-24 062800.svg",  caption: "Payment Method" },
      { file: "E-Commerce/Screenshot 2026-04-24 062810.svg",  caption: "Order Confirmation" },
      { file: "E-Commerce/Screenshot 2026-04-24 062630.svg",  caption: "Admin Dashboard" },
      { file: "E-Commerce/Screenshot 2026-04-24 062639.svg",  caption: "Orders Management" },
      { file: "E-Commerce/Screenshot 2026-04-24 062646.svg",  caption: "Analytics" },
      { file: "E-Commerce/Screenshot 2026-04-24 062653.svg",  caption: "Product Manager" },
      { file: "E-Commerce/Screenshot 2026-04-24 062700.svg",  caption: "Reports" }
    ]
  }
];

const SCREENSHOTS = [
  /* ── E-Commerce ── */
  { file: "ecommerce/Screenshot 2026-04-22 210202.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210309.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210402.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210429.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210438.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210522.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210541.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210552.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210613.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210654.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210706.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210719.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210726.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210848.png", category: "ecommerce", project: "E-Commerce" },
  { file: "ecommerce/Screenshot 2026-04-22 210921.png", category: "ecommerce", project: "E-Commerce" },

  /* ── Restaurant ── */
  { file: "Screenshot 2026-04-22 205225.png",              category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 210934.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 210942.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 210953.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211010.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211025.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211049.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211058.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211107.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211125.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211144.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211152.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211208.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211224.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211248.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211300.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211315.png",    category: "restaurant", project: "Restaurant App" },
  { file: "resturant/Screenshot 2026-04-22 211328.png",    category: "restaurant", project: "Restaurant App" },

  /* ── Transport ── */
  { file: "transport/Screenshot 2026-04-22 205304.png",    category: "transport", project: "Transport App" },
  { file: "transport/Screenshot 2026-04-22 211137.png",    category: "transport", project: "Transport App" },
  { file: "transport/Screenshot 2026-04-22 211426.png",    category: "transport", project: "Transport App" },
  { file: "transport/Screenshot 2026-04-22 211503.png",    category: "transport", project: "Transport App" },
  { file: "transport/Screenshot 2026-04-22 211512.png",    category: "transport", project: "Transport App" },
  { file: "transport/Screenshot 2026-04-22 211518.png",    category: "transport", project: "Transport App" },
  { file: "transport/Screenshot 2026-04-22 211537.png",    category: "transport", project: "Transport App" },
  { file: "transport/Screenshot 2026-04-22 211546.png",    category: "transport", project: "Transport App" },
  { file: "transport/Screenshot 2026-04-22 211602.png",    category: "transport", project: "Transport App" },
  { file: "transport/Screenshot 2026-04-22 211617.png",    category: "transport", project: "Transport App" },
  { file: "transport/Screenshot 2026-04-22 211641.png",    category: "transport", project: "Transport App" },
  { file: "transport/Screenshot 2026-04-22 211707.png",    category: "transport", project: "Transport App" },
  { file: "transport/Screenshot 2026-04-22 211746.png",    category: "transport", project: "Transport App" }
];

const CATEGORY_ORDER = [
  { key: "ecommerce",  label: "E-Commerce",  icon: "🛒" },
  { key: "restaurant", label: "Restaurant",  icon: "🍽️" },
  { key: "transport",  label: "Transport",   icon: "🚗" }
];

const board = document.getElementById("portfolio-board");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lb-img");
const lightboxCaption = document.getElementById("lb-caption");
const closeButton = document.querySelector(".lb-close");
const prevButton = document.querySelector(".lb-prev");
const nextButton = document.querySelector(".lb-next");

let allBoardItems = [];
let currentIndex = 0;

function isMobileShot(filePath) {
  const match = filePath.match(/(\d{6})\.png$/);
  const number = match ? Number(match[1]) : 0;
  return number >= 210613 && number <= 211546;
}

function makeCaption(item, localIndex) {
  const cleaned = item.file.replace("Screenshot ", "").replace(".png", "");
  return `${item.project} - Screen ${String(localIndex + 1).padStart(2, "0")} - ${cleaned}`;
}

function buildRow(category, rowIndex) {
  const rowItems = SCREENSHOTS.filter((item) => item.category === category.key);

  if (!rowItems.length) {
    return "";
  }

  const cards = rowItems
    .map((item, itemIndex) => {
      const globalIndex = allBoardItems.length;
      allBoardItems.push(item);
      const mockupType = isMobileShot(item.file)
        ? "mobile"
        : "desktop";
      const caption = makeCaption(item, itemIndex);

      return `
        <figure
          class="board-card"
          data-board-index="${globalIndex}"
          tabindex="0"
          role="button"
          aria-label="View ${caption}"
        >
          <div class="board-cell">
            <div class="device-mock ${mockupType}">
              <img src="${item.file}" alt="${caption}" loading="lazy" />
            </div>
          </div>
        </figure>
      `;
    })
    .join("");

  return `
    <section class="board-row">
      <header class="board-row-header">
        <h3><span class="row-icon">${category.icon}</span>${category.label}</h3>
        <p>${rowItems.length} screens</p>
      </header>
      <div class="board-row-grid">
        ${cards}
      </div>
    </section>
  `;
}

function renderBoard() {
  if (!board) {
    return;
  }

  allBoardItems = [];
  board.innerHTML = CATEGORY_ORDER.map((category, index) => buildRow(category, index)).join("");
}

function openLightbox(globalIndex) {
  currentIndex = globalIndex;
  const item = allBoardItems[globalIndex];
  if (!item) {
    return;
  }
  lightboxImage.src = item.file;
  lightboxImage.alt = item.project;
  lightboxCaption.textContent = item.project;
  lightbox.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.setAttribute("hidden", "");
  document.body.style.overflow = "";
}

function move(step) {
  if (!allBoardItems.length) {
    return;
  }
  currentIndex = (currentIndex + step + allBoardItems.length) % allBoardItems.length;
  openLightbox(currentIndex);
}

renderBoard();

document.addEventListener("click", (event) => {
  const card = event.target.closest(".board-card[data-board-index]");
  if (card) {
    openLightbox(Number(card.dataset.boardIndex));
  }
});

document.addEventListener("keydown", (event) => {
  const card = event.target.closest && event.target.closest(".board-card[data-board-index]");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openLightbox(Number(card.dataset.boardIndex));
    return;
  }

  if (lightbox.hasAttribute("hidden")) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  }

  if (event.key === "ArrowLeft") {
    move(-1);
  }

  if (event.key === "ArrowRight") {
    move(1);
  }
});

closeButton.addEventListener("click", closeLightbox);
prevButton.addEventListener("click", () => move(-1));
nextButton.addEventListener("click", () => move(1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.getElementById("year").textContent = String(new Date().getFullYear());

/* ── PROJECTS SHOWCASE RENDERING ── */
function renderProjectsShowcase() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS_SHOWCASE.map((project) => `
    <article class="project-card" data-category="${project.category}">
      <div class="project-card-header">
        <div class="project-card-title-block">
          <span class="project-icon">${project.icon}</span>
          <div>
            <h3>${project.title}</h3>
            <p class="project-desc">${project.description}</p>
          </div>
        </div>
      </div>

      <div class="project-card-stats">
        ${project.stats.map((stat) => `
          <div class="stat-mini">
            <strong>${stat.value}</strong>
            <span>${stat.label}</span>
          </div>
        `).join("")}
      </div>

      <div class="project-card-gallery">
        <div class="gallery-header">
          <h4>Featured Screens</h4>
          <span class="screen-count">${project.images.length} screens</span>
        </div>
        <div class="gallery-grid">
          ${project.images.map((img, idx) => `
            <figure class="gallery-thumbnail">
              <img src="${img.file}" alt="${img.caption}" loading="lazy" />
              <figcaption>${img.caption}</figcaption>
            </figure>
          `).join("")}
        </div>
      </div>

      <div class="project-card-tags">
        ${project.tags.map((tag) => `<span class="tag-badge">${tag}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
      setTimeout(() => card.classList.add("visible"), 10);
    } else {
      card.classList.remove("visible");
      setTimeout(() => (card.style.display = "none"), 300);
    }
  });
}

document.querySelectorAll(".filter-tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-tab-btn").forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    filterProjects(btn.dataset.filter);
  });
});

renderProjectsShowcase();
filterProjects("all");
