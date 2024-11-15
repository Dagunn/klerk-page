document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.mailing__tabs-button');
  const tabPanels = document.querySelectorAll('.mailing__tabs-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {

      tabButtons.forEach(btn => btn.parentNode.classList.remove('mailing__tabs-item--active'));
      tabPanels.forEach(panel => panel.classList.remove('mailing__tabs-panel--active'));


      button.parentNode.classList.add('mailing__tabs-item--active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('mailing__tabs-panel--active');
    });
  });


});

