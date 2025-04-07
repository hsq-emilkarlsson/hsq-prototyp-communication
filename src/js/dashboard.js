<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Husqvarna Partner Dashboard</title>
  <style>
    :root {
      --husqvarna-orange: #FF6B00;
      --husqvarna-dark: #273A60;
      --husqvarna-light-gray: #f5f5f5;
      --husqvarna-gray: #BEBEBE;
      --husqvarna-border: #E0E0E0;
      --husqvarna-blue: #273A60;
      --husqvarna-green: #5EC577;
    }
    
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: var(--husqvarna-light-gray);
      margin: 0;
      padding: 0;
      color: var(--husqvarna-dark);
    }
    
    .dashboard-container {
      display: flex;
      min-height: 100vh;
    }
    
    .sidebar {
      width: 250px;
      background-color: var(--husqvarna-dark);
      color: white;
      padding-top: 20px;
      flex-shrink: 0;
    }
    
    .logo {
      max-width: 100%;
      height: 40px;
      margin: 0 20px;
    }
    
    .nav-menu {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    
    .nav-menu a {
      display: block;
      padding: 12px 20px;
      color: rgba(255, 255, 255, 0.85);
      text-decoration: none;
      transition: all 0.2s;
    }
    
    .nav-menu a:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
    }
    
    .main-content {
      flex-grow: 1;
      padding: 20px;
    }
    
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
    
    .page-title {
      margin: 0;
      font-weight: 500;
      font-size: 24px;
    }
    
    .active-cases {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      padding: 20px;
      margin-bottom: 30px;
    }
    
    .active-cases h2 {
      margin: 0 0 20px;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th, td {
      padding: 12px;
      border: 1px solid var(--husqvarna-border);
      text-align: left;
    }
    
    th {
      background-color: var(--husqvarna-light-gray);
    }
    
    tr:nth-child(even) {
      background-color: #fafafa;
    }
    
    tr:hover {
      background-color: #f0f0f0;
    }
    
    .footer {
      text-align: center;
      padding: 20px;
      background-color: var(--husqvarna-dark);
      color: white;
      position: relative;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>
  <div class="dashboard-container">
    <aside class="sidebar">
      <img src="https://portal.husqvarnagroup.com/static/b2b/assets/with-name.e34798d1.svg" alt="Husqvarna" class="logo">
      <ul class="nav-menu">
        <li><a href="#" class="active">Dashboard Overview</a></li>
        <li><a href="active-cases.html">Active Support Cases</a></li>
        <li><a href="notifications.html">Notifications</a></li>
        <li><a href="reports.html">Reports</a></li>
        <li><a href="settings.html">Settings</a></li>
        <li><a href="logout.html">Logout</a></li>
      </ul>
    </aside>
    
    <main class="main-content">
      <div class="dashboard-header">
        <h1 class="page-title">Partner Dashboard</h1>
        <div class="user-menu">
          <div class="user-avatar">U</div>
          <div class="user-info">
            <span class="user-name">John Doe</span>
            <span class="user-role">Partner</span>
          </div>
        </div>
      </div>
      
      <div class="active-cases">
        <h2>Active Support Cases</h2>
        <table>
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Issue with Product A</td>
              <td>Open</td>
              <td>2025-03-30</td>
              <td><a href="#">View</a></td>
            </tr>
            <tr>
              <td>002</td>
              <td>Request for Support</td>
              <td>In Progress</td>
              <td>2025-03-28</td>
              <td><a href="#">View</a></td>
            </tr>
            <tr>
              <td>003</td>
              <td>Feedback on Product B</td>
              <td>Closed</td>
              <td>2025-03-25</td>
              <td><a href="#">View</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="footer">
        <p>&copy; 2025 Husqvarna Group. Alla rättigheter förbehållna.</p>
      </div>
    </main>
  </div>
</body>
</html>