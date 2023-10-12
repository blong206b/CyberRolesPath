document.addEventListener('DOMContentLoaded', function() {
  const values = [
    'Diversity & Inclusion', 'Social Responsibility', 'Environmental Stewardship',
    'Gender Equality', 'Community Outreach', 'Work-Life Balance', 
    'Mental Health Awareness', 'Affordable Healthcare', 'Educational Access', 
    'Animal Welfare', 'Civil Liberties', 'Data Privacy', 'Corporate Ethics',
    'Global Poverty', 'Cultural Preservation', 'Renewable Energy', 
    'Social Entrepreneurship', 'Support for Local Businesses',
    'Body Positivity', 'Global Peace'
  ];

  const form = document.getElementById('valuesForm');
  const valuesList = document.getElementById('valuesList');
  
  values.forEach((value, index) => {
    const item = `
      <div class="value-item">
        <label for="${index}">${value}:</label>
        <input type="number" id="${index}" name="${index}" min="1" max="10">
      </div>`;
    valuesList.innerHTML += item;
  });

  let scoredValues = [];

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    
    scoredValues = values.map((value, index) => {
      return {
        name: value,
        score: formData.get(index.toString()) || 'N/A'
      };
    });

    renderScores();
  });

  function renderScores() {
    const container = document.getElementById('scoredValues');
    container.innerHTML = scoredValues.map(data => {
      return `<div class="scored-item">
        <strong>${data.name}:</strong> ${data.score}
      </div>`;
    }).join('');
  }
});
