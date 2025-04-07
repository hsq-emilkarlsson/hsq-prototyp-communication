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

    .card-content h3 {
      margin: 0 0 5px;
      font-size: 18px;
      font-weight: 500;
    }

    .card-content p {
      margin: 0;
      color: #777;
    }

    footer {
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
      <div class="logo-container">
        <img src="https://portal.husqvarnagroup.com/static/b2b/assets/with-name.e34798d1.svg" alt="Husqvarna" class="logo">
      </div>
      <ul class="nav-menu">
        <li><a href="customer-dashboard.html" class="active">Dashboard</a></li>
        <li><a href="active-cases.html">Aktiva Supportärenden</a></li>
        <li><a href="notifications.html">Notifikationer</a></li>
        <li><a href="settings.html">Inställningar</a></li>
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

      <section class="dashboard-cards">
        <div class="card">
          <div class="card-content">
            <h3>Aktiva Supportärenden</h3>
            <p>Se och hantera dina aktiva supportärenden.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h3>Senaste Notifikationer</h3>
            <p>Håll dig uppdaterad med de senaste notifikationerna.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h3>Kontoinställningar</h3>
            <p>Hantera dina kontoinställningar och preferenser.</p>
          </div>
        </div>
      </section>
    </main>
  </div>

  <footer>
    <p>&copy; 2025 Husqvarna Group. Alla rättigheter förbehållna.</p>
  </footer>
</body>
</html>