function hideHeading() {
  const heading = document.getElementById('main-heading');
  if (heading) {
    heading.style.display = 'none';
  }
}

function showHeading() {
  const heading = document.getElementById('main-heading');
  if (heading) {
    heading.style.display = 'block';
  }
}

function clickme() {
  const heading = document.getElementById('main-heading');
  if (heading) {
    heading.style.display = heading.style.display === 'none' ? 'block' : 'none';
  }
}
