fetch('BCG.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('json-container');

    data.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'entry';
      div.innerHTML = `<strong>Entry ${index + 1}</strong>:<br>${JSON.stringify(item, null, 2)}`;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });
