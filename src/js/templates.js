<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Husqvarna Partner Dashboard</title>
  <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file -->
</head>
<body>
  <div class="dashboard-container">
    <aside class="sidebar">
      <div class="logo-container">
        <img src="https://portal.husqvarnagroup.com/static/b2b/assets/with-name.e34798d1.svg" alt="Husqvarna" class="logo">
      </div>
      <ul class="nav-menu">
        <li><a href="customer-dashboard.html" class="active">Dashboard</a></li>
        <li><a href="active-cases.html">Active Support Cases</a></li>
        <li><a href="notifications.html">Notifications</a></li>
        <li><a href="reports.html">Reports</a></li>
        <li><a href="settings.html">Settings</a></li>
      </ul>
    </aside>

    <main class="main-content">
      <header class="dashboard-header">
        <h1 class="page-title">Partner Dashboard</h1>
        <div class="user-menu">
          <div class="user-avatar">
            <!-- User avatar SVG or image -->
          </div>
          <div class="user-info">
            <span class="user-name">John Doe</span>
            <span class="user-role">Partner</span>
          </div>
        </div>
      </header>

      <section class="dashboard-section">
        <div class="section-header">
          <h2 class="section-title">Active Support Cases</h2>
        </div>
        <div class="section-content">
          <table>
            <thead>
              <tr>
                <th>Case ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Issue with Product A</td>
                <td>Open</td>
                <td>2025-03-30</td>
                <td><a href="view-case.html">View</a> | <a href="edit-case.html">Edit</a></td>
              </tr>
              <tr>
                <td>002</td>
                <td>Request for Support</td>
                <td>In Progress</td>
                <td>2025-03-28</td>
                <td><a href="view-case.html">View</a> | <a href="edit-case.html">Edit</a></td>
              </tr>
              <!-- More cases -->
            </tbody>
          </table>
        </div>
      </section>

      <section class="dashboard-section">
        <div class="section-header">
          <h2 class="section-title">Recent Notifications</h2>
        </div>
        <div class="section-content">
          <ul>
            <li>Notification 1</li>
            <li>Notification 2</li>
            <!-- More notifications -->
          </ul>
        </div>
      </section>
    </main>
  </div>

  <footer>
    <p>&copy; 2025 Husqvarna Group. Alla rättigheter förbehållna.</p>
  </footer>
</body>
</html>