let unit = 'imperial';
function setUnit(u){
  unit = u;
  document.getElementById('unit-imperial').classList.toggle('active', u==='imperial');
  document.getElementById('unit-metric').classList.toggle('active', u==='metric');
  document.getElementById('label-height').textContent = u==='imperial' ? 'Height (inches)' : 'Height (cm)';
  document.getElementById('label-weight').textContent = u==='imperial' ? 'Weight (lb)' : 'Weight (kg)';
  document.getElementById('height').placeholder = u==='imperial' ? 'e.g. 68' : 'e.g. 173';
  document.getElementById('weight').placeholder = u==='imperial' ? 'e.g. 160' : 'e.g. 72';
}

// Scroll-spy: highlight the mobile tab that matches the section currently in view
const spySections = ['home','programs','coaches','visit']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const tabLinks = document.querySelectorAll('.mobile-tab a[data-section]');

function updateActiveTab(){
  const scrollPos = window.scrollY + 160;
  let current = spySections[0].id;
  spySections.forEach(sec => {
    if(scrollPos >= sec.offsetTop) current = sec.id;
  });
  tabLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });
}
window.addEventListener('scroll', updateActiveTab, {passive:true});
window.addEventListener('resize', updateActiveTab);
updateActiveTab();

function calcBMI(){
  const h = parseFloat(document.getElementById('height').value);
  const w = parseFloat(document.getElementById('weight').value);
  const resultBox = document.getElementById('bmi-result');
  if(!h || !w || h<=0 || w<=0){
    resultBox.innerHTML = '<p class="bmi-placeholder">Enter a valid height and weight to calculate.</p>';
    return;
  }
  let bmi;
  if(unit === 'imperial'){
    bmi = (w / (h*h)) * 703;
  } else {
    const hM = h/100;
    bmi = w / (hM*hM);
  }
  bmi = Math.round(bmi*10)/10;

  let cat, color;
  if(bmi < 18.5){cat='Underweight'; color='#7DD3FC';}
  else if(bmi < 25){cat='Normal'; color='#4ADE80';}
  else if(bmi < 30){cat='Overweight'; color='#F5B84A';}
  else {cat='Obese'; color='#FF5A54';}

  resultBox.innerHTML = `
    <div class="bmi-number">${bmi}</div>
    <div class="bmi-category" style="color:${color};border-color:${color}55;">${cat}</div>
    <p style="margin-top:18px;font-size:13px;color:var(--text-mute);max-width:220px;">Want a plan built around this number? <a href="#visit" style="color:var(--gold);text-decoration:underline;">Book a session</a>.</p>
  `;
}
