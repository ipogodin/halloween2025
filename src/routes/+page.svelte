<script>
  import '@fontsource/creepster';
  import '@fontsource/inter';
  import { onMount } from 'svelte';
  import { currentLanguage, languages, translate } from '$lib/i18n.js';
  
  let pumpkinCount = 0;
  let batCount = 0;
  let showDetailedPlan = true;
  
  // Reactive translation function
  $: t = (key) => translate(key, $currentLanguage);
  
  // Language switcher
  function switchLanguage(lang) {
    currentLanguage.set(lang);
  }
  
  onMount(() => {
    // Animate floating elements
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.5}s`;
    });
  });
  
  function createPumpkin() {
    pumpkinCount++;
    setTimeout(() => pumpkinCount--, 2000);
  }
  
  function createBat() {
    batCount++;
    setTimeout(() => batCount--, 3000);
  }
  
  function handleCountMeIn() {
    // Open the Google Calendar invitation link
    window.open('https://calendar.app.google/nhNbSmueiRvTkH8U6', '_blank');
    
    // Create celebration pumpkins
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createPumpkin(), i * 200);
    }
  }
  
  function handleMaybeLater() {
    // Rick Roll them for disobeying!
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    
    // Create some disappointed bats
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createBat(), i * 300);
    }
  }
</script>

<svelte:head>
  <title>{t('site.title')}</title>
  <meta name="description" content={t('site.description')} />
</svelte:head>

<main class="halloween-party">
  <!-- Floating Halloween elements -->
  <div class="floating-elements">
    {#each Array(8) as _, i}
      <div class="floating bat" style="left: {10 + i * 12}%; animation-delay: {i * 0.7}s;">🦇</div>
    {/each}
    {#each Array(6) as _, i}
      <div class="floating ghost" style="left: {5 + i * 15}%; animation-delay: {i * 1.2}s;">👻</div>
    {/each}
  </div>

  <!-- Language Switcher -->
  <div class="language-switcher">
    <span class="lang-label">{t('ui.language')}:</span>
    {#each Object.entries(languages) as [code, name]}
      <button 
        class="lang-btn {$currentLanguage === code ? 'active' : ''}"
        on:click={() => switchLanguage(code)}
      >
        {name}
      </button>
    {/each}
  </div>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1 class="spooky-title">
        🎃 {t('hero.title')} 🎃
      </h1>
      <h2 class="main-title">
        {t('hero.subtitle')}
      </h2>
      <p class="tagline">{t('site.tagline')}</p>
      
      <div class="pumpkin-decoration">
        <span class="pumpkin">🎃</span>
        <span class="spider">🕷️</span>
        <span class="pumpkin">🎃</span>
      </div>
      
      <div class="invitation-download">
        <a href="/coolHallParty2025.pdf" download="Halloween_Party_2025_Invitation.pdf" class="download-btn">
          📄 {t('hero.downloadInvitation')}
        </a>
      </div>
    </div>
  </section>

  <!-- Event Details -->
  <section class="event-details">
    <div class="container">
      <div class="details-grid">
        <div class="detail-card">
          <div class="icon">📅</div>
          <h3>{t('eventDetails.when')}</h3>
          <p>{t('eventDetails.date')}</p>
          <p class="time">{t('eventDetails.time')}</p>
        </div>
        
        <div class="detail-card">
          <div class="icon">📍</div>
          <h3>{t('eventDetails.where')}</h3>
          <p>{t('eventDetails.address')}</p>
          <p class="address">{t('eventDetails.city')}</p>
        </div>
        
        <div class="detail-card">
          <div class="icon">👻</div>
          <h3>{t('eventDetails.dressCode')}</h3>
          <p>{t('eventDetails.costumeRequired')}</p>
          <p class="note">{t('eventDetails.prizeNote')}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Party Layout Section -->
  <section class="party-layout">
    <div class="container">
      <h2 class="section-title">{t('layout.title')}</h2>
      <div class="layout-toggle">
         <button 
          class="toggle-btn {showDetailedPlan ? 'active' : ''}" 
          on:click={() => showDetailedPlan = true}
        >
          {t('layout.detailedPlan')}
        </button>
        <button 
          class="toggle-btn {!showDetailedPlan ? 'active' : ''}" 
          on:click={() => showDetailedPlan = false}
        >
          {t('layout.simplePlan')}
        </button>
      </div>
      
      <div class="plan-container">
        {#if showDetailedPlan}
          <img src="/plan1.png" alt="Detailed Party Layout Plan" class="plan-image" />
        {:else}
          <img src="/plan_simplified.png" alt="Simplified Party Layout Plan" class="plan-image" />
        {/if}
      </div>
      
      <div class="studios-grid">
        <div class="studio-card">
          <h3>{t('layout.studioBee')}</h3>
          <p>{t('layout.studioBeeDesc')}</p>
          <div class="warning">{t('layout.studioBeeWarning')}</div>
        </div>
        
        <div class="studio-card">
          <h3>{t('layout.studioBoo')}</h3>
          <p>{t('layout.studioBooDesc')}</p>
          <div class="note">{t('layout.studioBooNote')}</div>
        </div>
        
        <div class="studio-card">
          <h3>{t('layout.studioGee')}</h3>
          <p>{t('layout.studioGeeDesc')}</p>
          <div class="note">{t('layout.studioGeeNote')}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Detailed Agenda Section -->
    <!-- Detailed Agenda Section -->
  <section class="agenda">
    <div class="container">
      <h2 class="section-title">{t('schedule.title')}</h2>
      <div class="agenda-timeline">
        <div class="timeline-item">
          <div class="timeline-time">2:00 PM</div>
          <div class="timeline-content">
            <h3>{t('schedule.2pm')}</h3>
            <p>{t('schedule.2pmDesc')}</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-time">3:00 PM</div>
          <div class="timeline-content">
            <h3>{t('schedule.3pm')}</h3>
            <p>{t('schedule.3pmDesc')}</p>
          </div>
        </div>
        
        <div class="timeline-item highlight">
          <div class="timeline-time">4:00 PM</div>
          <div class="timeline-content">
            <h3>{t('schedule.4pm')}</h3>
            <p><strong>{t('schedule.4pmDesc')}</strong></p>
            <div class="performance-ideas">
              {t('schedule.4pmIdeas')}
            </div>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-time">5:00 PM</div>
          <div class="timeline-content">
            <h3>{t('schedule.5pm')}</h3>
            <p>{t('schedule.5pmDesc')}</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-time">6:00 PM</div>
          <div class="timeline-content">
            <h3>{t('schedule.6pm')}</h3>
            <p>{t('schedule.6pmDesc')}</p>
          </div>
        </div>
        
        <div class="timeline-item warning">
          <div class="timeline-time">7:00 PM</div>
          <div class="timeline-content">
            <h3>{t('schedule.7pm')}</h3>
            <p>{t('schedule.7pmDesc')}</p>
          </div>
        </div>
        
        <div class="timeline-item danger">
          <div class="timeline-time">7:30 PM</div>
          <div class="timeline-content">
            <h3>{t('schedule.730pm')}</h3>
            <p>{t('schedule.730pmDesc')}</p>
          </div>
        </div>
        
        <div class="timeline-item danger">
          <div class="timeline-time">8:00 PM</div>
          <div class="timeline-content">
            <h3>{t('schedule.8pm')}</h3>
            <p>{t('schedule.8pmDesc')}</p>
          </div>
        </div>
        
        <div class="timeline-item zombie">
          <div class="timeline-time">8:10 PM</div>
          <div class="timeline-content">
            <h3>{t('schedule.810pm')}</h3>
            <p>{t('schedule.810pmDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Requirements Section -->
  <section class="requirements">
    <div class="container">
      <h2 class="section-title">{t('requirements.title')}</h2>
      <div class="requirements-grid">
        <div class="requirement-card mandatory">
          <div class="req-icon">👗</div>
          <h3>{t('requirements.costumeTitle')}</h3>
          <p>{t('requirements.costumeDesc')}</p>
        </div>
        
        <div class="requirement-card mandatory">
          <div class="req-icon">🍕</div>
          <h3>{t('requirements.foodTitle')}</h3>
          <p>{t('requirements.foodDesc')}</p>
        </div>
        
        <div class="requirement-card mandatory">
          <div class="req-icon">🎭</div>
          <h3>{t('requirements.talentTitle')}</h3>
          <p>{t('requirements.talentDesc')}</p>
        </div>
        
        <div class="requirement-card outdoor">
          <div class="req-icon">🌡️</div>
          <h3>{t('requirements.outdoorTitle')}</h3>
          <p>{t('requirements.outdoorDesc')}</p>
        </div>
        
        <div class="requirement-card health">
          <div class="req-icon">😷</div>
          <h3>{t('requirements.healthTitle')}</h3>
          <p>{t('requirements.healthDesc')}</p>
        </div>
        
        <div class="requirement-card optional">
          <div class="req-icon">🎒</div>
          <h3>{t('requirements.optionalTitle')}</h3>
          <p>{t('requirements.optionalDesc')}</p>
        </div>
        
        <div class="requirement-card mood">
          <div class="req-icon">😊</div>
          <h3>{t('requirements.moodTitle')}</h3>
          <p>{t('requirements.moodDesc')}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- RSVP Section -->
  <section class="rsvp">
    <div class="container">
      <div class="rsvp-card">
        <h2>{t('rsvp.title')}</h2>
        <p>{t('rsvp.plusOne')}</p>
        <p class="rsvp-deadline">{t('rsvp.deadline')}</p>
        <div class="rsvp-buttons">
          <button class="btn-primary" on:click={handleCountMeIn}>{t('rsvp.countMeIn')}</button>
          <button class="btn-secondary" on:click={handleMaybeLater}>{t('rsvp.maybeLater')}</button>
        </div>
        <p class="contact">{t('rsvp.contact')}</p>
        <div class="important-note">
          <strong>{t('rsvp.important')}</strong> {t('rsvp.importantText')}
        </div>
        <div class="calendar-note">
          <small>{t('rsvp.calendarNote')}</small>
        </div>
        
        <div class="pdf-download-section">
          <p>{t('rsvp.downloadQuestion')}</p>
          <a href="/coolHallParty2025.pdf" download="Halloween_Party_2025_Invitation.pdf" class="download-btn secondary">
            {t('rsvp.downloadPdf')}
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Elements -->
  {#each Array(pumpkinCount) as _, i}
    <div class="click-pumpkin" style="left: {Math.random() * 90}%; top: {Math.random() * 80}%;">🎃</div>
  {/each}
  
  {#each Array(batCount) as _, i}
    <div class="click-bat" style="left: {Math.random() * 90}%; top: {Math.random() * 80}%;">🦇</div>
  {/each}
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #1a0033 0%, #330066 50%, #000 100%);
    color: #fff;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  .halloween-party {
    min-height: 100vh;
    position: relative;
  }

  .floating-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .floating {
    position: absolute;
    font-size: 1.5rem;
    animation: float 6s ease-in-out infinite;
  }

  .bat {
    animation: fly 8s linear infinite;
  }

  .ghost {
    animation: float 10s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(10deg); }
  }

  @keyframes fly {
    0% { transform: translateX(-100px) translateY(0px); }
    25% { transform: translateX(25vw) translateY(-20px); }
    50% { transform: translateX(50vw) translateY(10px); }
    75% { transform: translateX(75vw) translateY(-15px); }
    100% { transform: translateX(calc(100vw + 100px)) translateY(5px); }
  }

  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: 2;
    background: radial-gradient(circle at center, rgba(255, 140, 0, 0.1) 0%, transparent 50%);
  }

  .hero-content {
    max-width: 800px;
    padding: 2rem;
  }

  .spooky-title {
    font-family: 'Creepster', cursive;
    font-size: clamp(2.5rem, 8vw, 5rem);
    color: #ff8c00;
    text-shadow: 3px 3px 0px #000, 0 0 20px #ff8c00;
    margin-bottom: 1rem;
    animation: glow 2s ease-in-out infinite alternate;
  }

  .main-title {
    font-family: 'Creepster', cursive;
    font-size: clamp(2rem, 6vw, 4rem);
    color: #fff;
    text-shadow: 2px 2px 0px #000, 0 0 15px #9370db;
    margin-bottom: 1rem;
  }

  .tagline {
    font-size: 1.5rem;
    color: #cccccc;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px #000;
  }

  .pumpkin-decoration {
    font-size: 3rem;
    margin: 2rem 0;
    animation: bounce 2s infinite;
  }

  .spider {
    animation: swing 3s ease-in-out infinite;
    display: inline-block;
  }

  @keyframes glow {
    from { text-shadow: 3px 3px 0px #000, 0 0 20px #ff8c00; }
    to { text-shadow: 3px 3px 0px #000, 0 0 30px #ff8c00, 0 0 40px #ff8c00; }
  }

  @keyframes bounce {
    0%, 20%, 60%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    80% { transform: translateY(-5px); }
  }

  @keyframes swing {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .event-details {
    padding: 5rem 0;
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2;
  }

  .details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .detail-card {
    background: linear-gradient(145deg, #2a0845, #1a0533);
    border: 2px solid #ff8c00;
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .detail-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(255, 140, 0, 0.3);
  }

  .detail-card .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .detail-card h3 {
    font-family: 'Creepster', cursive;
    font-size: 1.8rem;
    color: #ff8c00;
    margin-bottom: 1rem;
  }

  .detail-card p {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .time, .address, .note {
    color: #cccccc;
    font-size: 1rem;
  }

  .activities {
    padding: 5rem 0;
    position: relative;
    z-index: 2;
  }

  .section-title {
    font-family: 'Creepster', cursive;
    font-size: 3rem;
    text-align: center;
    color: #ff8c00;
    text-shadow: 2px 2px 0px #000;
    margin-bottom: 3rem;
  }

  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .activity-card {
    background: linear-gradient(145deg, #330066, #1a0033);
    border: 2px solid transparent;
    background-clip: padding-box;
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .activity-card::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff8c00, #9370db, #ff8c00);
    border-radius: 17px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .activity-card:hover::before {
    opacity: 1;
  }

  .activity-card:hover {
    transform: scale(1.05);
  }

  .activity-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .activity-card h3 {
    font-family: 'Creepster', cursive;
    font-size: 1.5rem;
    color: #ff8c00;
    margin-bottom: 1rem;
  }

  .rsvp {
    padding: 5rem 0;
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 2;
  }

  .rsvp-card {
    background: linear-gradient(145deg, #2a0845, #1a0533);
    border: 3px solid #ff8c00;
    border-radius: 20px;
    padding: 3rem;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
  }

  .rsvp-card h2 {
    font-family: 'Creepster', cursive;
    font-size: 2.5rem;
    color: #ff8c00;
    margin-bottom: 1rem;
  }

  .rsvp-buttons {
    margin: 2rem 0;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary, .btn-secondary {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .btn-primary {
    background: linear-gradient(45deg, #ff8c00, #ff6600);
    color: #000;
    box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 140, 0, 0.5);
  }

  .btn-primary:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);
  }

  .btn-secondary {
    background: transparent;
    color: #ff8c00;
    border: 2px solid #ff8c00;
  }

  .btn-secondary:hover {
    background: #ff8c00;
    color: #000;
    transform: translateY(-3px);
  }

  .btn-secondary:active {
    transform: translateY(-1px) scale(0.98);
    background: #cc6600;
  }

  .contact {
    color: #cccccc;
    font-size: 1rem;
    margin-top: 2rem;
  }

  .rsvp-deadline {
    font-size: 1.1rem;
    color: #ff8c00;
    font-weight: bold;
    margin: 1rem 0;
  }

  .important-note {
    background: rgba(255, 140, 0, 0.2);
    border: 2px solid #ff8c00;
    border-radius: 10px;
    padding: 1rem;
    margin-top: 1.5rem;
    color: #fff;
    font-size: 0.95rem;
  }

  .calendar-note {
    background: rgba(0, 255, 0, 0.1);
    border: 1px solid #44ff44;
    border-radius: 8px;
    padding: 0.8rem;
    margin-top: 1rem;
    color: #ccffcc;
  }

  .calendar-note small {
    font-size: 0.85rem;
  }

  .click-pumpkin, .click-bat {
    position: fixed;
    font-size: 2rem;
    pointer-events: none;
    animation: fadeOut 2s forwards;
    z-index: 100;
  }

  @keyframes fadeOut {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(2); }
  }

  /* Party Layout Styles */
  .party-layout {
    padding: 5rem 0;
    background: rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 2;
  }

  .layout-toggle {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .toggle-btn {
    padding: 0.8rem 2rem;
    background: transparent;
    border: 2px solid #ff8c00;
    color: #ff8c00;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
    font-weight: bold;
  }

  .toggle-btn.active,
  .toggle-btn:hover {
    background: #ff8c00;
    color: #000;
    transform: translateY(-2px);
  }

  .plan-container {
    text-align: center;
    margin: 2rem 0;
  }

  .plan-image {
    max-width: 100%;
    height: auto;
    border-radius: 15px;
    border: 3px solid #ff8c00;
    box-shadow: 0 8px 25px rgba(255, 140, 0, 0.3);
  }

  .studios-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .studio-card {
    background: linear-gradient(145deg, #2a0845, #1a0533);
    border: 2px solid #9370db;
    border-radius: 15px;
    padding: 2rem;
    transition: transform 0.3s ease;
  }

  .studio-card:hover {
    transform: translateY(-5px);
  }

  .studio-card h3 {
    font-family: 'Creepster', cursive;
    color: #ff8c00;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .warning {
    background: rgba(255, 0, 0, 0.2);
    border: 1px solid #ff4444;
    border-radius: 8px;
    padding: 0.5rem;
    margin-top: 1rem;
    color: #ffcccc;
    font-size: 0.9rem;
  }

  .note {
    background: rgba(0, 255, 0, 0.2);
    border: 1px solid #44ff44;
    border-radius: 8px;
    padding: 0.5rem;
    margin-top: 1rem;
    color: #ccffcc;
    font-size: 0.9rem;
  }

  /* Agenda Styles */
  .agenda {
    padding: 5rem 0;
    position: relative;
    z-index: 2;
  }

  .agenda-timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }

  .agenda-timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #ff8c00, #9370db);
    transform: translateX(-50%);
  }

  .timeline-item {
    display: flex;
    margin: 2rem 0;
    position: relative;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 15px;
    height: 15px;
    background: #ff8c00;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .timeline-item:nth-child(odd) {
    flex-direction: row;
  }

  .timeline-item:nth-child(even) {
    flex-direction: row-reverse;
  }

  .timeline-time {
    width: 45%;
    text-align: center;
    font-family: 'Creepster', cursive;
    font-size: 1.2rem;
    color: #ff8c00;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .timeline-content {
    width: 45%;
    background: linear-gradient(145deg, #2a0845, #1a0533);
    border: 2px solid #ff8c00;
    border-radius: 15px;
    padding: 1.5rem;
    margin: 0 1rem;
  }

  .timeline-content h3 {
    color: #ff8c00;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  .performance-ideas {
    background: rgba(255, 140, 0, 0.1);
    border: 1px solid #ff8c00;
    border-radius: 8px;
    padding: 0.8rem;
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #ffcc99;
  }

  .timeline-item.highlight::before {
    background: #ffff00;
    box-shadow: 0 0 15px #ffff00;
  }

  .timeline-item.highlight .timeline-content {
    border-color: #ffff00;
    box-shadow: 0 0 20px rgba(255, 255, 0, 0.3);
  }

  .timeline-item.warning .timeline-content {
    border-color: #ffa500;
    background: linear-gradient(145deg, #4a2c00, #3a1f00);
  }

  .timeline-item.danger .timeline-content {
    border-color: #ff4444;
    background: linear-gradient(145deg, #4a0000, #3a0000);
  }

  .timeline-item.zombie::before {
    background: #00ff00;
    animation: pulse 1s infinite;
  }

  .timeline-item.zombie .timeline-content {
    border-color: #00ff00;
    background: linear-gradient(145deg, #003300, #001a00);
    animation: shake 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.3); }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
    20%, 40%, 60%, 80% { transform: translateX(2px); }
  }

  /* Requirements Styles */
  .requirements {
    padding: 5rem 0;
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2;
  }

  .requirements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .requirement-card {
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease;
  }

  .requirement-card:hover {
    transform: translateY(-8px);
  }

  .requirement-card.mandatory {
    background: linear-gradient(145deg, #4a0000, #2a0000);
    border: 2px solid #ff4444;
  }

  .requirement-card.outdoor {
    background: linear-gradient(145deg, #003d4a, #001a2a);
    border: 2px solid #44aaff;
  }

  .requirement-card.health {
    background: linear-gradient(145deg, #4a4a00, #2a2a00);
    border: 2px solid #ffff44;
  }

  .requirement-card.optional {
    background: linear-gradient(145deg, #2a4a00, #1a2a00);
    border: 2px solid #44ff44;
  }

  .requirement-card.mood {
    background: linear-gradient(145deg, #4a3a00, #2a2000);
    border: 2px solid #ffaa44;
  }

  .req-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .requirement-card h3 {
    font-family: 'Creepster', cursive;
    color: #ff8c00;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .details-grid {
      grid-template-columns: 1fr;
    }
    
    .activities-grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    
    .rsvp-card {
      margin: 0 1rem;
      padding: 2rem;
    }
    
    .rsvp-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .btn-primary, .btn-secondary {
      width: 100%;
      max-width: 250px;
    }

    .studios-grid,
    .requirements-grid {
      grid-template-columns: 1fr;
    }

    .agenda-timeline::before {
      left: 30px;
    }

    .timeline-item {
      flex-direction: column !important;
      margin-left: 60px;
    }

    .timeline-item::before {
      left: -45px;
      transform: translateY(-50%);
    }

    .timeline-time,
    .timeline-content {
      width: 100%;
      margin: 0;
    }

    .timeline-time {
      text-align: left;
      padding: 0.5rem 0;
    }

    .plan-image {
      max-width: 95%;
    }

    .layout-toggle {
      flex-direction: column;
      align-items: center;
    }

    .toggle-btn {
      width: 200px;
    }
  }

  /* Download Button Styles */
  .invitation-download {
    margin: 2rem 0;
  }

  .download-btn {
    display: inline-block;
    background: linear-gradient(45deg, #9370db, #6a5acd);
    color: #fff;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 30px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(147, 112, 219, 0.3);
    border: 2px solid transparent;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .download-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(147, 112, 219, 0.5);
    background: linear-gradient(45deg, #8a2be2, #9370db);
  }

  .download-btn:active {
    transform: translateY(-1px) scale(0.98);
  }

  .download-btn.secondary {
    background: transparent;
    color: #9370db;
    border: 2px solid #9370db;
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }

  .download-btn.secondary:hover {
    background: #9370db;
    color: #fff;
    transform: translateY(-3px);
  }

  .pdf-download-section {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 140, 0, 0.3);
  }

  .pdf-download-section p {
    color: #cccccc;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    .download-btn {
      width: 100%;
      max-width: 280px;
      font-size: 1rem;
    }
  }

  /* Language Switcher Styles */
  .language-switcher {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 20px;
    padding: 0.5rem 1rem;
    border: 1px solid #ff8c00;
  }

  .lang-label {
    color: #fff;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .lang-btn {
    background: transparent;
    border: 1px solid #ff8c00;
    color: #ff8c00;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .lang-btn:hover,
  .lang-btn.active {
    background: #ff8c00;
    color: #000;
  }

  @media (max-width: 768px) {
    .language-switcher {
      position: static;
      margin-bottom: 1rem;
      justify-content: center;
    }
  }
</style>
