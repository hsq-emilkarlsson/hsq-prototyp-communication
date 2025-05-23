### Proposed Structure for the Dashboard

Here’s a proposed structure for the `customer-dashboard.html` file, integrating the necessary components:

```html
<!-- filepath: /Users/emilkarlsson/Documents/Dev/hsq-prototyp-communication/customer-dashboard.html -->
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
    
    .logo-container {
      padding: 0 20px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 20px;
    }
    
    .logo {
      max-width: 100%;
      height: 40px;
    }
    
    .nav-menu {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    
    .nav-menu li {
      margin-bottom: 5px;
    }
    
    .nav-menu a {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      color: rgba(255, 255, 255, 0.85);
      text-decoration: none;
      transition: all 0.2s;
    }
    
    .nav-menu a:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
    }
    
    .nav-menu a.active {
      background-color: var(--husqvarna-orange);
      color: white;
      position: relative;
    }
    
    .nav-menu a.active::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background-color: white;
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
    
    .dashboard-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      padding: 20px;
      display: flex;
      align-items: center;
    }
    
    .card-icon {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      flex-shrink: 0;
    }
    
    .card-content h3 {
      margin: 0 0 5px;
      font-size: 18px;
      font-weight: 500;
    }
    
    .card-content p {
      margin: 0;
      color: #777;
    }
    
    /* Additional styles for active support cases */
    .support-cases {
      margin-top: 30px;
      background-color: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    
    .support-cases h2 {
      margin: 0 0 15px;
    }
    
    .support-case {
      border-bottom: 1px solid var(--husqvarna-border);
      padding: 10px 0;
    }
    
    .support-case:last-child {
      border-bottom: none;
    }
    
    .nav {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid var(--husqvarna-border);
    }
    
    .nav a {
      color: var(--husqvarna-dark);
      margin: 0 15px;
      text-decoration: none;
      font-weight: 500;
    }
    
    .nav a:hover {
      color: var(--husqvarna-orange);
    }
  </style>
</head>
<body>
  <div class="dashboard-container">
    <div class="sidebar">
      <div class="logo-container">
        <a href="index.html">
          <img src="https://portal.husqvarnagroup.com/static/b2b/assets/with-name.e34798d1.svg" alt="Husqvarna" class="logo">
        </a>
      </div>
      <ul class="nav-menu">
        <li><a href="customer-dashboard.html" class="active">Dashboard</a></li>
        <li><a href="support-cases.html">Aktiva Supportärenden</a></li>
        <li><a href="notifications.html">Notiser</a></li>
        <li><a href="settings.html">Inställningar</a></li>
        <li><a href="logout.html">Logga ut</a></li>
      </ul>
    </div>
    
    <div class="main-content">
      <div class="dashboard-header">
        <h1 class="page-title">Partner Dashboard</h1>
        <div class="user-menu">
          <div class="user-avatar">
            <!-- Placeholder for user avatar -->
            <svg><!-- User icon SVG here --></svg>
          </div>
          <div class="user-info">
            <span class="user-name">John Doe</span>
            <span class="user-role">Partner</span>
          </div>
        </div>
      </div>
      
      <div class="dashboard-cards">
        <div class="card">
          <div class="card-icon orange">
            <svg><!-- Icon SVG here --></svg>
          </div>
          <div class="card-content">
            <h3>Aktiva Supportärenden</h3>
            <p>Se och hantera dina supportärenden.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-icon blue">
            <svg><!-- Icon SVG here --></svg>
          </div>
          <div class="card-content">
            <h3>Notiser</h3>
            <p>Se dina senaste notiser.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-icon green">
            <svg><!-- Icon SVG here --></svg>
          </div>
          <div class="card-content">
            <h3>Inställningar</h3>
            <p>Hantera dina kontoinställningar.</p>
          </div>
        </div>
      </div>
      
      <div class="support-cases">
        <h2>Aktiva Supportärenden</h2>
        <div class="support-case">
          <strong>Ärende #12345:</strong> Problem med produkt X.
        </div>
        <div class="support-case">
          <strong>Ärende #12346:</strong> Fråga om installation.
        </div>
        <div class="support-case">
          <strong>Ärende #12347:</strong> Begäran om återbetalning.
        </div>
      </div>
      
      <div class="nav">
        <a href="admin.html" class="nav-internal">Skapa nytt meddelande</a>
      </div>
    </div>
  </div>
</body>
</html>
```

### Key Features of the Dashboard

1. **Sidebar Navigation**: The sidebar allows users to navigate to different sections of the dashboard, including active support cases, notifications, and settings.
2. **User Information**: Displays the user's name and role, along with an avatar placeholder.
3. **Dashboard Cards**: Cards provide quick access to key functionalities, such as viewing active support cases and notifications.
4. **Active Support Cases Section**: A dedicated section to display active support cases, allowing users to see their current issues at a glance.
5. **Responsive Design**: The layout is designed to be responsive, ensuring usability across various devices.

### Integration with Existing Views

- The design and styles are consistent with the existing Husqvarna branding.
- The sidebar and navigation links allow users to easily transition between the dashboard and other functionalities like the admin panel or the landing page.
- The dashboard can be expanded with additional features as needed, such as a news feed or alerts.

This cohesive user interface will enhance the user experience for Husqvarna partners, making it easier to manage their interactions and support cases.