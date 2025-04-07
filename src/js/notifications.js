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
    
    .active-cases {
      margin-bottom: 30px;
    }
    
    .case-item {
      background-color: var(--husqvarna-light-gray);
      border-radius: 4px;
      padding: 15px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }
    
    .case-title {
      font-weight: 500;
    }
    
    .case-status {
      color: var(--husqvarna-orange);
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
        <img src="https://portal.husqvarnagroup.com/static/b2b/assets/with-name.e34798d1.svg" alt="Husqvarna" class="logo">
      </div>
      <ul class="nav-menu">
        <li><a href="customer-dashboard.html" class="active">Dashboard</a></li>
        <li><a href="support-cases.html">Aktiva Supportärenden</a></li>
        <li><a href="notifications.html">Notiser</a></li>
        <li><a href="settings.html">Inställningar</a></li>
        <li><a href="index.html">Till Startsidan</a></li>
      </ul>
    </div>
    
    <div class="main-content">
      <div class="dashboard-header">
        <h1 class="page-title">Partner Dashboard</h1>
      </div>
      
      <div class="active-cases">
        <h2>Aktiva Supportärenden</h2>
        <div class="case-item">
          <span class="case-title">Problem med produkt X</span>
          <span class="case-status">Öppen</span>
        </div>
        <div class="case-item">
          <span class="case-title">Fråga om installation</span>
          <span class="case-status">Under behandling</span>
        </div>
        <div class="case-item">
          <span class="case-title">Uppdatering av programvara</span>
          <span class="case-status">Stängd</span>
        </div>
      </div>
      
      <div class="dashboard-cards">
        <div class="card">
          <div class="card-icon orange">
            <svg>...</svg> <!-- Replace with actual SVG -->
          </div>
          <div class="card-content">
            <h3>Antal Meddelanden</h3>
            <p class="stat">120</p>
          </div>
        </div>
        <div class="card">
          <div class="card-icon blue">
            <svg>...</svg> <!-- Replace with actual SVG -->
          </div>
          <div class="card-content">
            <h3>Aktiva Användare</h3>
            <p class="stat">75</p>
          </div>
        </div>
        <div class="card">
          <div class="card-icon green">
            <svg>...</svg> <!-- Replace with actual SVG -->
          </div>
          <div class="card-content">
            <h3>Supportärenden</h3>
            <p class="stat">5</p>
          </div>
        </div>
      </div>
      
      <div class="nav">
        <a href="admin.html" class="nav-internal">Skapa nytt meddelande</a>
        <a href="templates.html" class="nav-internal">Meddelandemallar</a>
        <a href="index.html" class="nav-external">Till Startsidan</a>
      </div>
    </div>
  </div>
</body>
</html>